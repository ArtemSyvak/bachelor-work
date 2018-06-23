<template>
  <div id="app">
    <div class="preloader-wrapper">
      <div class="preloader">
          <img src="./assets/logo-blue.png">
      </div>
    </div>
    <router-view/>
    <Menu/>
  </div>
</template>

<script>

import Menu from '@/components/Menu'

export default {
  name: 'App',
  components:{
    Menu
  }
}
</script>

<style>
body.preloader-site {
    overflow: hidden;
}
/* .preloader-image{
  padding: 100px;
  width: 200px;
  height: 200px;
  background: url('assets/logo-blue.png') no-repeat;

} */

.preloader-wrapper {
    height: 100%;
    width: 100%;
    background: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999999;
}

.preloader-wrapper .preloader {
    position: absolute;
    top: 50%;
    left: 40%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 120px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
