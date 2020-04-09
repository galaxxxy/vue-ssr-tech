import Vue from 'vue'

const component = {
  name: 'comp',
  props: ['props1'],
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  },
  // template: `
  //   <div :style="style">
  //     <slot></slot>
  //   </div>
  // `,
  render (h) {
    return h('div', {
      style: this.style
      // on: {
      //   // 要在组件内部手动触发该事件（除原生节点）
      //   click: () => this.$emit('click')
      // }
    }, [this.$slots.header, this.props1])
  }
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  // template: `
  //   <comp-one ref="comp">
  //     <span ref="span">{{value}}</span>
  //   </comp-one>
  // `,
  render (h) {
    return h('comp-one', {
      ref: 'comp',
      props: {
        props1: this.value
      },
      // on: {
      //   click: this.handleClick
      // },
      // nativeOn会绑定到组件的原生节点上 无需在组件内部使用$emit
      nativeOn: {
        click: this.handleClick
      }
    }, [h('span', {
      ref: 'span',
      slot: 'header',
      // domProps: {
      //   innerHTML: '<span>4353425</span>'
      // }
      // attrs: {
      //   id: 'test-id'
      // },
      class: 'test'
    }, this.value)])
  }
})
