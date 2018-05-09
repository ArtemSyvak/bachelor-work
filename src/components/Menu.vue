<template>
  <div id="menu">
    <ul id="bottom-menu">
      <li class="menu-item"><a href="#" class="menu-link"><icon name="align-justify"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><icon name="location-arrow"/></a></li>
      <li class="menu-item"><a href="#" class="menu-link"><icon name="search"/></a></li>
    </ul>
  </div>
</template>

<script>

import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'menu',
  components:{
    Icon
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
    padding-left: 90px;
  }
  .menu-item{
    width: 33%;
    float: left;
    list-style: none;
  }
  .menu-link{
    text-decoration: none;
    color: #FCE38A;
    font-weight: 600;
  }
</style>
