<template>
  <div>
    <show-blogs></show-blogs>
  </div>

</template>

<script>
import plusBlog from './components/plusBlog.vue';
import showBlogs from './components/showBlogs.vue';
export default {

    components:{
      'plus-blog': plusBlog,
      'show-blogs': showBlogs
    },
    
  data () {
    return {
      
    }
  },
  methods:{

  }
}
</script>

<style>
body{
  margin: 0;
  font-family: 'Courier New', Courier, monospace;
}
</style>
