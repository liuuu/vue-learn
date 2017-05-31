<template>
  <div>
    <h1>{{title}}</h1>
    <button v-on:click="greeting()">greet</button>
    <ninjas></ninjas>
  </div>
</template>

<script>
import Ninjas from './Ninjas.vue'


export default {
  components: {
    'ninjas': Ninjas
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
