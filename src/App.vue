<template>
  <div>
    <router-view></router-view>
  </div>

</template>

<script>
import plusBlog from './components/plusBlog.vue';
import showBlogs from './components/showBlogs.vue';
import listBlogs from './components/listBlogs.vue';

export default {

    components:{
      'plus-blog': plusBlog,
      'show-blogs': showBlogs,
      'list-blogs': listBlogs
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
