<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Menu/>
    <!-- <DropdownMenu/> -->
  </div>
</template>

<script>

import Menu from '@/components/Menu'
import DropdownMenu from '@/components/DropdownMenu'

export default {
  name: 'App',
  components:{
    Menu,
    DropdownMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
