<template>
  <div id="menu">
    <ul id="bottom-menu">
      <li class="menu-item"><a href="#" class="menu-link" @click="showMenu()"><icon class="toggle-menu-icon" name="bars"/><icon style="display:none" class="toggle-menu-icon" name="arrow-down"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link" @click="showNavigation()"><icon name="location-arrow"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link" @click="showSearch()"><icon name="search"/></a></li>
    </ul>
      <DropdownMenu/>
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
      // need add animation rotate-icon
      $('.toggle-menu-icon').toggle('slow');
      $('#menu').hasClass('collapse-top')
    ? $('#menu').removeClass('collapse-top')
    : $('#menu').addClass('collapse-top')
      $('#dropdown-menu').toggle('slow');
    },
    showNavigation: ()=>{
      $('.mapboxgl-ctrl-top-left .mapboxgl-ctrl-directions').toggle("slow");
    },
    showSearch: () =>{
      $('.mapboxgl-ctrl-top-right .mapboxgl-ctrl-geocoder').toggle("slow");
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
    transition: 0.4s;
    background: linear-gradient(89.44307193183613deg, rgba(138, 42, 176,1) -2.6077507320644173%,rgba(223, 75, 103,1) 95.29671486090776%,rgba(224, 76, 103,1) 95.29671486090776%)
  }
  .collapse-top{
    transition: 0.4s;
    margin-bottom: 203px;
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
    color: #FDFFFC;
    /* color: #f4f5f9; */
    font-weight: 600;
  }
</style>
