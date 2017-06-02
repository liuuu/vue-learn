<template id="">
  <div id="add-blog">
    <h2>Add a new blog</h2>
    <form  method="post" v-if="!submitted">
      <label for="">Blog Title:</label>
      <input type="text" v-model="blog.title">
      <label for="">Blog Content</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkbox">
        <label for="">categories:</label>
        <label for="">ninjas</label>
        <input type="checkbox" name="" value="ninjas" v-model="blog.categories">
        <label for="">wizards</label>
        <input type="checkbox" name="" value="wizards" v-model="blog.categories">
        <label for="">mario</label>
        <input type="checkbox" name="" value="mario" v-model="blog.categories">
        <label for="">cheese</label>
        <input type="checkbox" name="" value="cheese" v-model="blog.categories">
      </div>
      <label for="">Authors:</label>
      <select class="" name="" v-model="blog.author">
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button type="button" name="button" v-on:click.prevent="post()">Add blog</button>
    </form>
    <div v-if="submitted">
      <h3>Thanks to submit your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog title:{{blog.title}}</p>
      <p>Blog content:</p>
      <p>{{blog.content}}</p>
      <p>Blog categories:</p>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Author:</p>
      <p>{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
// Imports

export default {
    data () {
        return {
            blog: {
                title: '',
                content: '',
                categories:[],
                author:''
            },
            authors:['lee', 'ninja', 'panda'],
            submitted: false,
        }
    },
    methods: {
      post(){
        this.$http.post('http://jsonplaceholder.typicode.com/posts', {
          title: this.blog.title,
          body: this.blog.content,
          userId: 1
        }).then(data => {
          this.submitted = true;
          console.log(data);
        });
    },
  }
}
</script>

<style>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 90%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkbox input{
  display: inline-block;
  margin-right: 10px;
}
#checkbox label {
  display: inline-block;
}
</style>
