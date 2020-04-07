import Vue from 'vue'

const component = {
  props: {
    active: {
      type: Boolean
    },
    propOne: String
  },
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted', this.$parent.$options.name)
  },
  template: `
    <div>
      <input type="text" v-model.number="text"/>
      <span>{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `
}

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  }
}

// const CompVue = Vue.extend(component)
// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: 212
//   },
//   mounted () {
//     console.log('instance comp mounted')
//   }
// })

new Vue({
  el: '#root',
  name: 'Root',
  components: {
    Comp: component2
  },
  template: '<comp/>'
})
