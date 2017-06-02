<template id="">
  <div id="show-blog" v-theme:column="'wide'">
    <h1>List Blog Titles</h1>
    <input type="text" v-model="search" placeholder="search">
    <div class="single-blog" v-for="blog in filteredBlogs">
      <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
// Imports
import searchMixin from '../mixins/searchMixin'

export default {
    data() {
      return {
        blogs: [],
        search: '',
      }
    },
    methods: {

    },
    computed: {

    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(data => {
          console.log(data);
          this.blogs = data.body.slice(0, 10);
        })
    },
    filters: {
      toUppercase(value){
        return value.toUpperCase();
      }
    },
    directives: {
      'rainbow': {
        bind(el, binding, vnode){
          el.style.color = "#" + Math.random().toString().slice(2,8);
          el.style.padding = '10px';
        }
      }
    },
    mixins: [searchMixin]
}
</script>

<style>
#show-blog {
  max-width: 800px;
  margin: 0 auto;
}
.single-blog {
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
}
</style>
