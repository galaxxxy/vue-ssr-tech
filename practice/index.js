import Vue from 'vue'

const div = document.createElement('div')
document.body.appendChild(div)

new Vue({
  el: '#root',
  template: '<div>hello vue</div>'
})
