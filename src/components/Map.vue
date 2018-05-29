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
      let dataShops = getData();
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA';
      this.map = new mapboxgl.Map({
      container: 'map',
      center: [24.0336551,49.8368523],
      zoom: 14,
      hash: true,
      style: 'mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i'
      });

    // Add zoom and rotation controls
      this.map.addControl(new mapboxgl.NavigationControl());
    // Add geolocation button
      this.map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true
        },
        trackUserLocation: true
      }));

      function getData() {
        //OVERPASS_API
        let dataShops = {},
            urlShops = 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];'+
        '(node["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);'+
        // 'way["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);'+
        'relation["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707););'+
        'out;>;out skel qt;';
        $.ajax({
          url: urlShops,
          dataType: 'json',
          type: 'GET',
          async: false,
          crossDomain: true,
          success: function (response) {
            // console.log(response);
            //here response = geojson from overpass-api
            dataShops = response.elements;
          }
        })
        return dataShops;
      }

    // add markers to map
    let map = this.map;
    dataShops.forEach(function(marker) {
    // create a DOM element for the marker
        let el = document.createElement('div');
        el.className = 'marker-shops';

    //add addEventListener to markers
        el.addEventListener('click', function() {
            window.alert(marker.tags.alt_name);
        });
        console.log(el);
    // add marker to map
    let coordinates = [marker.lon, marker.lat];
    new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .addTo(map);
    });
    },
    logging: () =>{
      console.log('success init');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#map{
  position:absolute;
  top:0;
  bottom:0;
  width:100%;
}
.marker-shops{
  width: 10px;
  height: 10px;
  background-color: #5BE7C4;
  border-radius: 10px;
}
</style>
