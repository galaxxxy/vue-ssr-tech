import Vue from 'vue'

const childComponent = {
  inject: ['grandparent', 'data'],
  mounted () {
    console.log(this.grandparent, this.data.value)
  },
  template: `
    <div>child component: {{data.value}}</div>
  `
}

const component = {
  name: 'comp',
  components: {
    childComponent
  },
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
  //     <div class="header">
  //       <slot name="header"></slot>
  //       </div>
  //       <div class="body">
  //       <slot name="body"></slot>
  //     </div>
  //   </div>
  // `
  template: `
    <div :style="style">
      <slot :value="value" aaa="111"></slot>
      <child-component />
    </div>
  `
}

new Vue({
  el: '#root',
  components: {
    CompOne: component
  },
  provide () {
    // hack实现provide的双向绑定
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      grandparent: this,
      data
    }
  },
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.span)
  },
  // template: `
  //   <div>
  //     <comp-one>
  //       <span slot="header">this is header</span>
  //       <span slot="body">this is body</span>
  //     </comp-one>
  //   </div>
  // `
  template: `
    <div>
      <comp-one ref="comp">
        <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}} {{value}}</span>
        </comp-one>
        <input type="text" v-model="value" />
    </div>
  `
})
