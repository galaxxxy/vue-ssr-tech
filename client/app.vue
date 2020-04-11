<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <!-- <p>{{ fullName }} {{ counter }}</p>
    <p>{{ textA }} {{ textPlus }} {{ textC }}</p> -->
    <router-link to="/app">
      app
    </router-link>
    <router-link to="/login">
      login
    </router-link>
    <transition name="fade">
      <router-view />
    </transition>
    <Footer />
    <!-- <router-view name="a"/> -->
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },
  computed: {
    ...mapState({
      counter: (state) => state.count,
      textA: state => state.a.text,
      textC: state => state.c.text
    }),
    ...mapGetters({
      fullName: 'fullName',
      textPlus: 'a/textPlus'
    })
    // textA () {
    //   return this.$store.state.a.text
    // }
  },
  mounted () {
    console.log(this.$store)
    // let i = 1
    // setInterval(() => {
    //   this.updateCount(i++)
    // }, 1000)
    // this.$store.dispatch('updateCountAsync', {
    //   num: 5,
    //   time: 2000
    // })
    this.updateCountAsync({
      num: 5,
      time: 2000
    })
    this['a/updateText']('123')
    this['a/add']()
    this.testAction()
  },
  methods: {
    ...mapActions(['updateCountAsync', 'a/add', 'testAction']),
    ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>

<style lang="stylus" scoped>
  #app {
    position absolute;
    left 0;
    right 0;
    top 0;
    bottom 0;
  }
  #cover {
    position absolute;
    left 0;
    top 0;
    right 0;
    bottom 0;
    background-color #999;
    opacity .9;
    z-index -1;
  }
</style>
