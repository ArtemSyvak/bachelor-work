<template>
  <div id='dropdown-menu'>
    <ul class="dropdown-menu-list">
      <li class="dropdown-menu-item">
        <h6>Parking</h6>
        <input type="checkbox" id="parking" value="Parking" v-model="checkedNames">
        <label for="parking"></label>
      </li>
      <li class="dropdown-menu-item">
        <h6>Rental</h6>
        <input type="checkbox" id="rental" value="Rental" v-model="checkedNames">
        <label for="rental"></label>
      </li>
      <li class="dropdown-menu-item">
        <h6>Shops</h6>
        <input type="checkbox" id="shop" value="Shops" v-model="checkedNames">
        <label for="shop"></label>
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
    display: none;
    background-color: #FCFCFC;
    padding: 1.5rem 2rem;
    color: #5BE7C4;
  }
  ul{
    padding: 0;
  }
  h6{
    float: left;
  }
  .dropdown-menu-item{
    margin: 20px;
    display: block;
    list-style: none;
    border-bottom: 1px solid #EEEEEE;
  }

/* custom input checkboxes */

  input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
  	cursor: pointer;
  	width: 40px;
  	height: 15px;
  	background: #EAEAEA;
  	display: block;
  	border-radius: 30px;
  	position: relative;
    float: right;
  }

  label:after {
  	content: '';
  	position: absolute;
  	top: -2px;
  	left: 2px;
  	width: 20px;
  	height: 20px;
  	background: #5BE7C4;
  	border-radius: 20px;
  	transition: 0.3s;
  }

  input:checked + label {
  	background: #7A57D1;
  }

  input:checked + label:after {
  	left: calc(100% - 2px);
  	transform: translateX(-100%);
  }

  label:active:after {
  	width: 10px;
  }
</style>
