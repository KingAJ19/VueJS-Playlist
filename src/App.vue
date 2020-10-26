<template>
  <div>
    <app-header></app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Ninjas from './components/Ninjas.vue';
export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-ninjas': Ninjas
  },
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

<style>

</style>
