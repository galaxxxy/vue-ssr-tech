import Router from 'vue-router'
import routes from './routes.js'

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/',
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },
    // parseQuery (query) {},
    // stringifyQuery (obj) {},
    // 不支持history模式时变为hash模式
    fallback: true
  })
}
