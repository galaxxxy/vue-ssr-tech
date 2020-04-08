import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: {
    value: String,
    value1: String
  },
  methods: {
    handleInput ($event) {
      this.$emit('change', $event.target.value)
    }
  },
  template: `
    <div>
      <input type="text" @change="handleInput" :value="value">
    </div>
  `
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data () {
    return {
      text: '123'
    }
  },
  template: `
    <div>
    <comp-one v-model="text"/>
    <!--<comp-one @input="text = arguments[0]" :value="text"/>-->
    </div>
  `
})
