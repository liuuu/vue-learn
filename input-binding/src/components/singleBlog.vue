<template>
  <div id="single-blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        id: this.$route.params.id,
        blog: {},
      }
    },
    created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts/'+ this.id)
        .then(data => {
          this.blog = data.body;
        })
    }
  }
</script>

<style media="screen">
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>
