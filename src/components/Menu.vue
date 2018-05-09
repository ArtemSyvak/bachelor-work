<template>
  <div id="menu">
    <ul id="bottom-menu">
      <li class="menu-item left"><a href="#" class="menu-link"><icon name="align-justify"/></a></li>
      <li class="menu-item middle"><a href="#" class="menu-link"><icon name="location-arrow"/></a></li>
      <li class="menu-item right"><a href="#" class="menu-link"><icon name="search"/></a></li>
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
    display: flex;
    padding-left: 0;
    margin-bottom: 0;
  }
  .menu-item{
    width: 33.3333%;
    margin: auto;
    list-style: none;
  }
  /* .left{
    padding-left: 20px;
  }
  .right{
    padding-right: 20px;
  } */
  .menu-link{
    display: block;
    width: 100%;
    text-align: center;
    text-decoration: none;
    color: #FCE38A;
    font-weight: 600;
  }
  /* .right .menu-link{
    float: right;
  }
  .middle .menu-link{
    display: block;
    width: 100%;
    text-align: center;
  } */
</style>
