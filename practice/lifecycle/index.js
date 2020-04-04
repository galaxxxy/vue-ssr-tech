import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforeMount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  // template: '<div>{{text}}</div>',
  render (h) {
    // throw new TypeError('render error')
    console.log('render function invoked')
    return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  }
  // errorCaptured(err) {
  //   会向上冒泡👎正式环境可以使用
  // }
})
app.$mount('#root')
// setInterval(() => {
//   app.text += 1
// }, 1000)

setTimeout(() => {
  app.$destroy()
}, 1000)
