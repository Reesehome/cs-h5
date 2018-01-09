// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import router from './router'
import Vuex from 'vuex'
import {AlertPlugin, ToastPlugin, AjaxPlugin} from 'vux'
import FastClick from 'fastclick'
import { Field } from 'mint-ui'

import Toast from '@cmpt/common/vue-plugin.js';

/***引入全局样式 START***/

import '@styles/base.less';
import '@cmpt/common/vue-plugin.less';
import 'mint-ui/lib/style.css'

/********* END *********/
Vue.use(Toast);

Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(AjaxPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({}); // 使用vuex状态管理

/*console.log(Vue.http);*/

/*******************************配合vue-router在页面切换时自动显示loading遮罩层*********************************/
store.registerModule('vux', { // 名字自己定义
    state: {
        isLoading: false
    },
    mutations: {
        updateLoadingStatus(state, payload) {
            state.isLoading = payload.isLoading
        }
    }
});

router.beforeEach(function (to, from, next) {
    store.commit('updateLoadingStatus', {isLoading: true});
    next()
});

router.afterEach(function (to) {
    store.commit('updateLoadingStatus', {isLoading: false})
});
/************************************END**********************************************************************/

Vue.config.productionTip = false;

Vue.component(Field.name, Field);

/* eslint-disable no-new */
const vm = new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});

/*添加Fastclick移除移动端点击延迟*/
FastClick.attach(document.body);
