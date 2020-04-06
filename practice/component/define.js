import Vue from 'vue'

// const data = {
//   text: 0
// }

const component = {
  props: {
    active: {
      // type: Boolean,
      // required: true,
      default: true,
      validator (value) {
        return typeof value === 'boolean'
      }
    },
    propOne: String
  },
  data () {
    return {
      text: 0
    }
  },
  template: `
    <div>
      <input type="text" v-model.number="text"/>
      <span>{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `
}

// 全局注册
// Vue.component('CompOne', component)

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  template: `
    <div>
      <comp-one :active="true" prop-one="text1"/>
      <comp-one :active="false" prop-one="text2 "/>
    </div>
  `
})
