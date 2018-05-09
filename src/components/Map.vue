<template>
  <div id="map"></div>
</template>

<script>

export default {
  name: 'Map',
  mounted(){
    this.createMap(),
    this.logging()
  },
  methods:{
    createMap: () =>{
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA';
      this.map = new mapboxgl.Map({
      container: 'map',
      center: [24.0336551,49.8368523],
      zoom: 14,
      hash: true,
      // maxBounds: [
      //         [23.9632689953,49.7979017214],
      //         [24.1040313244,49.8758455877]
      //       ],
      style: 'mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i'
      });
      // Add zoom and rotation controls to the map.
        this.map.addControl(new mapboxgl.NavigationControl());
      // Add geolocation button
        this.map.addControl(new mapboxgl.GeolocateControl({
          positionOptions: {
            enableHighAccuracy: true
          },
          trackUserLocation: true
        }));
    },
    logging: () =>{
      console.log("Hello from Map vue!!!");
    }
  }
}
</script>




<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map{
  position:absolute;
  top:0;
  bottom:0;
  width:100%;
}
</style>
