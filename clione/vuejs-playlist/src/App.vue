<template>
  <div>
    <app-header></app-header>
    <ninjas></ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Ninjas from './components/Ninjas.vue'


export default {
  components: {
    'ninjas': Ninjas,
    'app-header': Header,
    'app-footer': Footer
  },
  data () {
    return {
      title: 'Ninja App',
    }
  },
  methods: {
    greeting: function(){
      this.title = 'wom'
    }
  }
}
</script>

<style scoped>
  h1 {
    color: purple;
  }
</style>
