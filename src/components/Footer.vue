<template>
  <footer>
      <p> {{ copyright }}</p>
  </footer>
</template>

<script>

export default {
//   components: {
//     'app-header': Header
//   },
  data () {
    return {
      copyright: 'Copyright 2017 Vue Title'
    }
  }
}
</script>

<style scoped>
 footer{
     background: #222;
     padding: 6px;
 }
 p{
     color: lightgreen;
     text-align: center;
 }
</style>
