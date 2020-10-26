<template>
  <div id="ninjas">
      <ul>
          <li v-for="ninja in ninjas" v-on:click="ninja.show =!ninja.show" :key="ninja">
              <h2> {{ ninja.name }}</h2>
              <h3 v-show="ninja.show"> {{ ninja.speciality }}</h3>
              <h4></h4>
          </li>
      </ul>
  </div> 
</template>

<script>
export default {
//   components: {
//     'app-header': Header,
//     'app-footer': Footer
//   },
  data () {
    return {
      ninjas: [
                {name: 'Itachi', speciality: 'Tsukuyomi', show: false},
                {name: 'Naruto', speciality: 'Shadow Clones', show: false},
                {name: 'Nagato', speciality: 'Rinnegan', show: false},
                {name: 'Hashirama', speciality: 'Wood Style', show: false},
                {name: 'Kakashi', speciality: 'Lightning Style', show: false},
                {name: 'Sasuke', speciality: 'Chidori', show: false}
            ]
        }
    }
}
</script>

<style scoped>
#ninjas{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>