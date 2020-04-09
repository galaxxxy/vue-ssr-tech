<template>
  <div id="app">
    <div id="cover" />
    <Header />
    <p>{{ fullName }} {{ counter }}</p>
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
import { mapState, mapGetters } from 'vuex'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapGetters({
      fullName: 'fullName'
    })
  },
  mounted () {
    console.log(this.$store)
    let i = 1
    setInterval(() => {
      this.$store.commit('updateCount', i++)
    }, 1000)
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
