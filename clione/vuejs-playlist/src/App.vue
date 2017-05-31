<template>
  <div>
    <h1>{{title}}</h1>
    
    <button v-on:click="greeting()">greet</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Your first Vue file',
    }
  },
  methods: {
    greeting: function(){
      this.title = 'wom'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
