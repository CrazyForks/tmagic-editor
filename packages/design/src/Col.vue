<template>
  <component class="tmagic-design-col" :is="uiComponent" v-bind="uiProps">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getDesignConfig } from './config';
import type { ColProps } from './types';

defineOptions({
  name: 'TMCol',
});

const props = defineProps<ColProps>();

const ui = getDesignConfig('components')?.col;

const uiComponent = ui?.component || 'el-col';

const uiProps = computed<ColProps>(() => ui?.props(props) || props);
</script>
