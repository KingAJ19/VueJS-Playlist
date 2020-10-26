<template>
  <div>
    <plus-blog></plus-blog>
  </div>

</template>

<script>
import plusBlog from './components/plusBlog.vue';
export default {

    components:{
      'plus-blog': plusBlog
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
