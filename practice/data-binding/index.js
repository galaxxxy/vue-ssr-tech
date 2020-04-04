import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123dsf</span>',
    aaa: 'main',
    styles: {
      color: 'red',
      appearance: 'none'
    },
    styles2: {
      color: 'black'
    }
  },
  // template: `
  // <div :id="aaa" @click="handleClick">
  //   <p v-html="html"></p>
  // </div>
  // `,
  template: `
  <div
    :class="[{ avtive: !isActive }]"
    :style="[styles, styles2]"
  >
    <p v-html="html"></p>
  </div>
  `,
  methods: {
    handleClick () {
      alert('click')
    }
  }
})
