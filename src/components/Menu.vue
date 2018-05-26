<template>
  <div id="menu">
    <ul id="bottom-menu">
      <li class="menu-item"><a href="#" class="menu-link" @click="showMenu()"><icon name="align-justify"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><icon name="location-arrow"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><icon name="search"/></a></li>
    </ul>
    <div class="container">
      <DropdownMenu/>
    </div>
  </div>
</template>

<script>

//component for UI navigation bottom-menu

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import DropdownMenu from './DropdownMenu'

export default {
  name: 'Menu',
  components:{
    Icon,
    DropdownMenu
  },
  methods:{
    showMenu: () =>{
      $('#dropdown-menu').hide("slow");
    }
  }
}
</script>

<style scoped>
  #menu{
    position: absolute;
    bottom: 0;
    color: white;
    width: 100%;
    height: 40px;
    background-color: #5BE7C4;
  }
  #bottom-menu{
    height: 100%;
    margin: 0;
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
  }
  .menu-item{
    width: 33.3333%;
    margin: 13px 0;
    list-style: none;
  }
  .menu-link{
    height: 100%;
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #FCE38A;
    font-weight: 600;
  }
</style>
