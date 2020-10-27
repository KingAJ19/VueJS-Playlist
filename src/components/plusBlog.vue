<template>
  <div id="plusBlog">
    <h2>Add a New Blog Post</h2>
    <form>
        <label>Blog Title:</label>
        <input type="text" v-model.lazy="blog.title" required/>
        <label>Blog Content:</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
            <label>Anime</label>
            <input type="checkbox" value="Anime" v-model="blog.categories"/>
            <label>Movies</label>
            <input type="checkbox" value="Movies" v-model="blog.categories"/>
            <label>Music</label>
            <input type="checkbox" value="Music" v-model="blog.categories"/>
            <label>Games</label>
            <input type="checkbox" value="Games" v-model="blog.categories"/>
        </div>
        <label>Author:</label>
        <select v-model="blog.author">
            <option v-for="author in authors">{{ author }}</option>
        </select>
        <button v-on:click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post!</h3>
    </div>
    <div id="preview">
        <h3>Preview Blog</h3>
        <p>Blog Title: {{ blog.title }}</p>
        <p>Blog Content: </p>
        <p>{{ blog.content }}</p>
        <p>Blog Categories:</p>
        <ul>
            <li v-for="category in blog.categories">{{ category }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
    </div>
    
  </div>

</template>

<script>
export default {
    
  data () {
    return {
      blog: {
          title: "",
          content: "",
          categories: [],
          author: ""
      },
      authors: ['Male', 'Female', 'Other'],
      submitted: false
    }
  },
  methods:{
      post:function(){
          this.$http.post('https://anime-blog-ef171.firebaseio.com/posts.json', this.blog).then(function(data){
              console.log(data);
              this.submitted = true;
          });
      }
  }
}
</script>

<style>

#plus-blog *{
    box-sizing: border-box;
}
#plus-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
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
#checkboxes input{
    display: inline-block;
    margin-right: 10px;
}
#checkboxes label{
    display: inline-block;
}
</style>