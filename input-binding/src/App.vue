<template>
  <div class="">
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import header from './components/header.vue';
export default {

  components: {
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog': listBlog,
    'app-header': header
  },
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
