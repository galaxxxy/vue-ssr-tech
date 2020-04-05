import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    arr: [1, 2, 3],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    text: 0,
    active: true,
    html: '<span>this is html</span>'
  },
  template: `
    <div>
      <div v-if="active">Text: {{text}}</div>
      <div v-else>else content</div>
      <div v-html="html"></div>
      <ul>
        <li v-for="(item, index) in arr" :key="item">{{item}} : {{index}}</li>
      </ul>
      <ul>
        <li v-for="(val, key, index) in obj" :key="key">{{val}} : {{key}} : {{index}}</li>
      </ul>
    </div>
  `
})
