System.register(["./useApp-legacy.d06aeb34.js","./index-legacy.1dc0be94.js"],(function(e,t){"use strict";var n,o;return{setters:[e=>{n=e.u},e=>{o=e._}],execute:function(){const t=Vue.defineComponent({props:{config:{type:Object,default:()=>({})},model:{type:Object,default:()=>({})}},setup(e){n(e);const t=Vue.getCurrentInstance()?.proxy,o=Vue.reactive([]),c=Vue.computed((()=>["function"==typeof e.config.preAction?e.config.preAction:()=>!0,...o,"function"==typeof e.config.postAction?e.config.postAction:()=>!0]));return{pushAction:function(e){o.push(e)},clickHandler:async function(){for(const n of c.value)if("function"==typeof n&&!1===await n(t,{model:e.model}))break},textConfig:Vue.computed((()=>({type:"text",text:e.config?.text||"",disabledText:e.config?.disabledText||"",html:e.config?.html||""})))}}});e("default",o(t,[["render",function(e,t,n,o,c,i){const u=Vue.resolveComponent("magic-ui-text");return Vue.openBlock(),Vue.createElementBlock("button",{class:"magic-ui-button",onClick:t[0]||(t[0]=(...t)=>e.clickHandler&&e.clickHandler(...t))},[Vue.renderSlot(e.$slots,"default",{},(()=>[Vue.createVNode(u,{config:e.textConfig},null,8,["config"])]))])}],["__file","/parisma/github/tmagic-editor/packages/ui/src/button/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.a35443c4.js.map