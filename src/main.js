import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'

Vue.use(ElementUI,VueCookies);

import './uilt/rem';

import axios from 'axios';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

import echarts from "echarts";
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
