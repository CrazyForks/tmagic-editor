<template>
  <div :class="`magic-code-editor`">
    <Teleport to="body" :disabled="!fullScreen">
      <div
        :class="`magic-code-editor-wrapper${fullScreen ? ' full-screen' : ''}`"
        :style="!fullScreen && height ? `height: ${height}` : '100%'"
      >
        <TMagicButton
          v-if="!disabledFullScreen"
          class="magic-code-editor-full-screen-icon"
          circle
          size="small"
          @click="fullScreenHandler"
          ><MIcon :icon="FullScreen"></MIcon
        ></TMagicButton>
        <div ref="codeEditor" class="magic-code-editor-content"></div>
      </div>
    </Teleport>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onBeforeUnmount, onMounted, onUnmounted, ref, useTemplateRef, watch } from 'vue';
import { FullScreen } from '@element-plus/icons-vue';
import { throttle } from 'lodash-es';
import serialize from 'serialize-javascript';

import { TMagicButton } from '@tmagic/design';

import MIcon from '@editor/components/Icon.vue';
import { getEditorConfig } from '@editor/utils/config';
import monaco from '@editor/utils/monaco-editor';

defineOptions({
  name: 'MEditorCodeEditor',
});

const props = withDefaults(
  defineProps<{
    initValues?: any;
    modifiedValues?: any;
    type?: 'diff';
    language?: string;
    options?: monaco.editor.IStandaloneEditorConstructionOptions;
    height?: string;
    autoSave?: boolean;
    parse?: boolean;
    disabledFullScreen?: boolean;
  }>(),
  {
    initValues: '',
    autoSave: true,
    language: 'javascript',
    options: () => ({
      tabSize: 2,
    }),
    parse: false,
    disabledFullScreen: false,
  },
);

const emit = defineEmits(['initd', 'save']);

const toString = (v: string | any, language: string): string => {
  let value: string;
  if (typeof v !== 'string') {
    if (language === 'json') {
      value = JSON.stringify(v, null, 2);
    } else {
      value = serialize(v, {
        space: 2,
        unsafe: true,
      }).replace(/"(\w+)":\s/g, '$1: ');
    }
  } else {
    value = v;
  }
  if (language === 'javascript' && value.startsWith('{') && value.endsWith('}')) {
    value = `(${value})`;
  }
  return value;
};

const parseCode = (v: string | any, language: string): any => {
  if (typeof v !== 'string') {
    return v;
  }

  if (language === 'json') {
    return JSON.parse(v);
  }

  return getEditorConfig('parseDSL')(v);
};

let vsEditor: monaco.editor.IStandaloneCodeEditor | null = null;
let vsDiffEditor: monaco.editor.IStandaloneDiffEditor | null = null;

const values = ref('');
const loading = ref(false);
const codeEditorEl = useTemplateRef<HTMLDivElement>('codeEditor');

const resizeObserver = new globalThis.ResizeObserver(
  throttle((): void => {
    vsEditor?.layout();
    vsDiffEditor?.layout();
  }, 300),
);

const setEditorValue = (v: string | any, m: string | any) => {
  values.value = toString(v, props.language.toLocaleLowerCase());

  if (props.type === 'diff') {
    const originalModel = monaco.editor.createModel(values.value, 'text/javascript');
    const modifiedModel = monaco.editor.createModel(toString(m, props.language), 'text/javascript');
    const position = vsDiffEditor?.getPosition();
    const result = vsDiffEditor?.setModel({
      original: originalModel,
      modified: modifiedModel,
    });
    if (position) {
      vsDiffEditor?.setPosition(position);
      vsDiffEditor?.focus();
    }
    return result;
  }
  // 保存当前光标位置
  const position = vsEditor?.getPosition();
  const result = vsEditor?.setValue(values.value);
  // 恢复光标位置
  if (position) {
    vsEditor?.setPosition(position);
    vsEditor?.focus();
  }
  return result;
};

const getEditorValue = () =>
  (props.type === 'diff' ? vsDiffEditor?.getModifiedEditor().getValue() : vsEditor?.getValue()) || '';

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.keyCode === 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
    e.preventDefault();
    e.stopPropagation();
    const newValue = getEditorValue();
    values.value = newValue;
    emit('save', props.parse ? parseCode(newValue, props.language) : newValue);
  }
};
const init = async () => {
  if (!codeEditorEl.value) return;

  if (codeEditorEl.value.clientHeight === 0) {
    await nextTick();
  }

  const options = {
    value: values.value,
    language: props.language,
    theme: 'vs-dark',
    ...props.options,
  };

  if (props.type === 'diff') {
    vsDiffEditor = getEditorConfig('customCreateMonacoDiffEditor')(monaco, codeEditorEl.value, options);
  } else {
    vsEditor = getEditorConfig('customCreateMonacoEditor')(monaco, codeEditorEl.value, options);
  }

  setEditorValue(props.initValues, props.modifiedValues);

  emit('initd', vsEditor);
  codeEditorEl.value.addEventListener('keydown', handleKeyDown);

  if (props.type !== 'diff' && props.autoSave) {
    vsEditor?.onDidBlurEditorWidget(() => {
      const newValue = getEditorValue();
      if (values.value !== newValue) {
        values.value = newValue;
        emit('save', props.parse ? parseCode(newValue, props.language) : newValue);
      }
    });
  }

  resizeObserver.observe(codeEditorEl.value);
};

watch(
  () => props.initValues,
  (v, preV) => {
    if (v !== preV) {
      setEditorValue(props.initValues, props.modifiedValues);
    }
  },
  {
    deep: true,
    immediate: true,
  },
);

watch(
  () => props.options,
  (v) => {
    vsEditor?.updateOptions(v);
    vsDiffEditor?.updateOptions(v);
  },
  {
    deep: true,
  },
);

onMounted(async () => {
  loading.value = true;

  await init();

  loading.value = false;
});

onBeforeUnmount(() => {
  resizeObserver.disconnect();

  vsEditor?.dispose();
  vsDiffEditor?.dispose();

  vsEditor = null;
  vsDiffEditor = null;
});
onUnmounted(() => {
  codeEditorEl.value?.removeEventListener('keydown', handleKeyDown);
});
const fullScreen = ref(false);
const fullScreenHandler = () => {
  fullScreen.value = !fullScreen.value;
  setTimeout(() => {
    vsEditor?.focus();
    vsEditor?.layout();
    vsDiffEditor?.focus();
    vsDiffEditor?.layout();
  });
};

defineExpose({
  values,

  getEditor() {
    return vsEditor || vsDiffEditor;
  },

  getVsEditor() {
    return vsEditor;
  },

  getVsDiffEditor() {
    return vsDiffEditor;
  },

  setEditorValue,
  getEditorValue,

  focus() {
    vsEditor?.focus();
    vsDiffEditor?.focus();
  },
});
</script>
