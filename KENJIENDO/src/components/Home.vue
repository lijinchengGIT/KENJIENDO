<template>
  <section class="sec1">
      <div class="home"> 
        <img src="../assets/imgs/home/main.jpg" alt="" width="60%">
      </div>
      <div class="ab_box">
        <p class="ab_title">ABOUT</p>
        <img src="../assets/imgs/home/hr.png" alt="" width="50%">
        <p class="ab_msg">In 2007, he has had been impressed in San Francisco where Fred Everything, Miguel Migs and Mark Farina were playing at OM Records. He was particularly impressed by House music with the west coast taste in the US, so after coming back to Japan, his DJ career has started in September of the same year. Music".</p>
        <router-link to="/index/about" class="ab_btn">LEARN MORE</router-link>
      </div>
      <div class="float">
        <p class="float_title">KENJI ENDO</p>
        <img src="../assets/imgs/home/float_top_compress.png" alt="" class="float1">
        <img src="../assets/imgs/home/float_bottom_compress.png" alt="" class="float2"> 
      </div>
      <router-link to='/album' class="link_album">ALBUM</router-link>
      <img src="../assets/imgs/home/kenjiendo2.png" alt="" class="ken">
      <!-- <h3>666</h3> -->
  </section>
</template>

<script>
// require('../assets/css/base.css')
import '../assets/css/home.css'
// // @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
<style>

</style>

