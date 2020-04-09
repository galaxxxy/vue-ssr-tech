<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <router-link to="/app">
      app
    </router-link>
    <router-link to="/login">
      login
    </router-link>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './views/layout/header.vue'
import Footer from './views/layout/footer.jsx'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
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
