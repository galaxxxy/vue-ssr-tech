import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from './app.vue'
import createRouter from './config/router'
import createStore from './store/store'

import './assets/styles/global.styl'

const root = document.createElement('div')
document.body.appendChild(root)

Vue.use(VueRouter)
Vue.use(Vuex)
const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  // 登录验证
  console.log('before each invoked')
  next()
})
router.beforeResolve((to, from, next) => {
  console.log('before resolve invoked')
  next()
})
router.afterEach((to, from) => {
  console.log('after each invoked')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount(root)
