import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import {
  Routes
} from './demo/config'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
