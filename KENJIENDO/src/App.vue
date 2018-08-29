<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <nav-ken></nav-ken>
    <router-view/>
    <ken-footer></ken-footer>
  </div>
</template>

<script>
import NavKen from '../src/components/Navken'
import KenFooter from '../src/components/KenFooter'
export default {

  name: 'App',
  components:{
    NavKen,
    KenFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
