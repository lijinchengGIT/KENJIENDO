<template>
<header class="nav_box">
            <div class="hender">
              <ul class="nav">
                <table></table>
                <li><router-link to="/home">HOME</router-link></li> 
                <li> <router-link to="/about">ABOUT</router-link></li>
                <li><router-link to="/album">ALBUM</router-link></li> 
                <li> <router-link to="/new">NEWS</router-link></li> 
                <li><a>CONTACT</a></li> 
                <table></table>
              </ul>
            </div>
</header>
</template>

<script> 
/* require('../assets/css/base.css') */
 import '../assets/css/base.css' 
 import '../assets/css/index.css'
 import '../assets/js/jquery-3.2.1.js'
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>





