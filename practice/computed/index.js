import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    firstName: 'Jokcy',
    lastName: 'Lou',
    number: 0,
    fullName: ' ',
    obj: {
      a: '123'
    }
  },
  computed: {
    // name () {
    //   console.log('new name')
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      get () {
        console.log('new name')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true
    },
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return `${this.firstName} ${this.lastName}`
    }
  },
  template: `
    <div>
      <p>Name: {{name}}</p>
      <p>Name: {{getName()}}</p>
      <p>fullName: {{fullName}}</p>
      <p>number: <input type="text" v-model="number"/></p>
      <p>firstName: <input type="text" v-model="firstName"/></p>
      <p>lastName: <input type="text" v-model="lastName"/></p>
      <p>name: <input type="text" v-model="name"/></p>
      <p>obj.a: <input type="text" v-model="obj.a"/></p>
    </div>
  `
})
