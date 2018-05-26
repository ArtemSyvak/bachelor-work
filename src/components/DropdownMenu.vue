<template>
  <div id='dropdown-menu'>
    <ul class="dropdown-menu-list">
      <li class="dropdown-menu-item">
      <label for="parking">Parking</label>
      <input type="checkbox" id="parking" value="Parking" v-model="checkedNames">
      </li>
      <li class="dropdown-menu-item">
        <label for="rental">Rentals</label>
        <input type="checkbox" id="rental" value="Rental" v-model="checkedNames">
      </li>
      <li class="dropdown-menu-item">
        <label for="shop">Shops &nbsp</label>
        <input type="checkbox" id="shop" value="Shops" v-model="checkedNames">
      </li>
    </ul>

    <br>
    <span>Checked flags: {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
  name: 'dropdown-menu',
  data: function () {
    return {
      checkedNames: []
    }
  }
}
</script>

<style lang="css">
  #dropdown-menu{
    background-color: #FCFCFC;
    padding: 1.5rem 2rem;
    color: #5BE7C4;
  }
  ul{
    padding: 0;
  }
  .dropdown-menu-item{
    margin: 20px;
    display: block;
    list-style: none;
  }
  .dropdown-menu-item>input{
    display: block;
    float: right;
  }
</style>
