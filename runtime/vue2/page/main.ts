/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2025 Tencent.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import Vue from 'vue';

import TMagicApp, { DataSourceManager, DeepObservedData, getUrlParam, registerDataSourceOnDemand } from '@tmagic/core';
import type { UserRenderFunctionOptions } from '@tmagic/vue-runtime-help';

import asyncDataSources from '../.tmagic/async-datasource-entry';
import components from '../.tmagic/comp-entry';
import plugins from '../.tmagic/plugin-entry';

import request, { service } from './utils/request';
import AppComponent from './App.vue';
import { getLocalConfig } from './utils';

import '@tmagic/core/resetcss.css';

DataSourceManager.registerObservedData(DeepObservedData);

Vue.use(request);

const dsl = ((getUrlParam('localPreview') ? getLocalConfig() : window.magicDSL) || [])[0] || {};

const app = new TMagicApp({
  ua: window.navigator.userAgent,
  config: dsl,
  request: service,
  curPage: getUrlParam('page'),
  useMock: Boolean(getUrlParam('useMock')),
});

app.setDesignWidth(app.env.isWeb ? window.document.documentElement.getBoundingClientRect().width : 375);

Object.entries(components).forEach(([type, component]: [string, any]) => {
  app.registerComponent(type, component);
});

Object.values(plugins).forEach((plugin: any) => {
  Vue.use(plugin, { app });
});

registerDataSourceOnDemand(dsl, asyncDataSources).then((dataSources) => {
  Object.entries(dataSources).forEach(([type, ds]: [string, any]) => {
    DataSourceManager.register(type, ds);
  });

  Vue.prototype.app = app;

  const vueApp = new Vue({
    provide: {
      app,
      userRender: ({ h, type, props, attrs, style, className }: UserRenderFunctionOptions) =>
        // class作为保留字符，android 4.4以下不能直接使用, 需要加引号
        // eslint-disable-next-line prettier/prettier
        h(type, { props, attrs, style, 'class': className }),
    },

    render: (h) => h(AppComponent),
  });

  vueApp.$mount('#app');
});
