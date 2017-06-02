<template id="">
  <div id="show-blog" v-theme:column="'wide'">
    <h1>All Blogs</h1>
    <div class="single-blog" v-for="blog in blogs">
      <h2 v-rainbow>{{blog.title}}</h2>
      <article class="">{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
// Imports

export default {
    data() {
      return {
        blogs: [],
      }
    },
    methods: {

    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts')
        .then(data => {
          console.log(data);
          this.blogs = data.body.slice(0, 10);
        })
    }
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
