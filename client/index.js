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

// Vuex动态绑定模块
// store.registerModule('c', {
//   state: {
//     text: 3
//   }
// })
// 解绑模块
// store.unregisterModule('c')
// store.watch(state => state.count + 1, (newCount) => {
//   console.log('new count watched:', newCount)
// })
// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})

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
