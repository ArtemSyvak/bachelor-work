<template>
  <div id="app">
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
