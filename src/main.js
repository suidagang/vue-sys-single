// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//清除浏览器默认样式
import "@/less/reset.css"
//封装axios  ajax请求
import {post,fetch} from '@/request/api'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=fetch;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
