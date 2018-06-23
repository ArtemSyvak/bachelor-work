<template>
  <div id='dropdown-menu'>
    <ul class="dropdown-menu-list">
      <li class="dropdown-menu-item">
        <h6>Parking</h6>
        <input type="checkbox" id="parking" value="Parking" @click="toggleParking()">
        <label for="parking"></label>
      </li>

      <li class="dropdown-menu-item">
        <h6>Rental</h6>
        <input type="checkbox" id="rental" value="Rental" @click="toggleRentals()">
        <label for="rental"></label>
      </li>

      <li class="dropdown-menu-item">
        <h6>Shops</h6>
        <input type="checkbox" id="shop" value="Shops" @click="toggleShops()">
        <label for="shop"></label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'dropdown-menu',
  methods: {
    toggleShops: () =>{
      $('.marker-shops').toggle("slow");
    },
    toggleRentals: () =>{
      $('.marker-rentals').toggle("slow");
    },
    toggleParking: () =>{
      $('.marker-parking').toggle("slow");
    }
  }
}
</script>

<style lang="css">
  #dropdown-menu{
    display: none;
    background-color: #FCFCFC;
    padding: 1.5rem 2rem;
    color: #A94CAF;
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

  #dropdown-menu input[type=checkbox]{
    height: 0;
    width: 0;
    visibility: hidden;
  }

  #dropdown-menu label {
  	cursor: pointer;
  	width: 40px;
  	height: 15px;
  	background: #6abe83;
  	display: block;
  	border-radius: 30px;
  	position: relative;
    float: right;
  }

  #dropdown-menu label:after {
  	content: '';
  	position: absolute;
  	top: -2px;
  	right: 2px;
  	width: 20px;
  	height: 20px;
  	/* background: #5BE7C4; */
  	background: #f06966;
  	border-radius: 20px;
  	transition: 0.3s;
  }

  #dropdown-menu input:checked + label {
    background: #EAEAEA;
  }

  #dropdown-menu input:checked + label:after {
  	right: calc(100% - 2px);
  	transform: translateX(100%);
  }

  #dropdown-menu label:active:after {
  	width: 10px;
  }
</style>
