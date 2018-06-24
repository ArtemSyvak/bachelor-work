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
      let dataShops = getDataShops(),
          dataRentals = getDataRentals(),
          dataParking = getDataParking();

      let myPosition,
          options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          }
      function success(pos) {
        myPosition = pos.coords;
        console.log(`Latitude : ${myPosition.latitude}`);
        console.log(`Longitude: ${myPosition.longitude}`);
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);
      const mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
      const MapboxGeocoder = require('@mapbox/mapbox-gl-geocoder');
      mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA';

      //creating map object
      this.map = new mapboxgl.Map({
      container: 'map',
      center: [24.0336551,49.8368523],
      pitch: 60,
      bearing: -60,
      zoom: 14,
      hash: true,
      // style: 'mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i'
      // style: 'mapbox://styles/artemsyvak/cjir8rd634pvf2sq8o3zw337f'
      style: 'mapbox://styles/artemsyvak/cjir8rd634pvf2sq8o3zw337f'
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
    //add geocoder
      this.map.addControl(new MapboxGeocoder({
        accessToken: mapboxgl.accessToken
      }));



      function drawGeoJSON(marker) {
        let responseGeometry;
        $.ajax({
          url: 'https://api.mapbox.com/directions/v5/mapbox/cycling/'+myPosition.longitude+','+myPosition.latitude+';'+marker.lon+','+marker.lat+'?overview=full&geometries=geojson&access_token=pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA&steps=true&alternatives=false',
          type: 'GET',
          async:false,
          dataType: 'json'
        })
        .done(function(response) {
          responseGeometry = response.routes[0].geometry;
        });

        if (map.getLayer('go-to-marker')){
          try {
            map.removeLayer('go-to-marker');
            map.removeSource('go-to-marker');
          } catch (e) {
            console.log(e);
          }
        }

        map.addLayer({
            "id": 'go-to-marker',
            "type": "line",
            "source": {
                "type": "geojson",
                "data": {
                    "type": "Feature",
                    "properties": {},
                    "geometry": responseGeometry
                }
            },
            "layout": {
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-color": "#FFD800",
                "line-width": 8
            }
        });
      }

    //   this.map.addControl(new MapboxDirections({
    //   accessToken: mapboxgl.accessToken
    // }),  'top-left');
    // The 'building' layer in the mapbox-streets vector source contains building-height
    // data from OpenStreetMap.
      this.map.on('load', function() {
          // Insert the layer beneath any symbol layer.
          var layers = map.getStyle().layers;

          var labelLayerId;
          for (var i = 0; i < layers.length; i++) {
              if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
                  labelLayerId = layers[i].id;
                  break;
              }
          }

          map.addLayer({
              'id': '3d-buildings',
              'source': 'composite',
              'source-layer': 'building',
              'filter': ['==', 'extrude', 'true'],
              'type': 'fill-extrusion',
              'minzoom': 15,
              'paint': {
                  'fill-extrusion-color': '#aaa',

                  // use an 'interpolate' expression to add a smooth transition effect to the
                  // buildings as the user zooms in
                  'fill-extrusion-height': [
                      "interpolate", ["linear"], ["zoom"],
                      15, 0,
                      15.05, ["get", "height"]
                  ],
                  'fill-extrusion-base': [
                      "interpolate", ["linear"], ["zoom"],
                      15, 0,
                      15.05, ["get", "min_height"]
                  ],
                  'fill-extrusion-opacity': .6
              }
          }, labelLayerId);
      });


    function getDataShops() {

      //OVERPASS_API
      let dataShops = {},
          url = 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];'+
      '(node["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);'+
      // 'way["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);'+
      'relation["shop"="bicycle"](49.768404561217,23.908653259277,49.901047809335,24.166145324707););'+
      'out;>;out skel qt;';
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        async: false,
        crossDomain: true,
        success: function (response) {
          console.log(response);
          //here response = geojson from overpass-api
          dataShops = response.elements;
        }
      })
      return dataShops;
    }

    function getDataRentals() {
      //OVERPASS_API
      let dataRentals = {},
          url = 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node["amenity"="bicycle_rental"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);relation["amenity"="bicycle_rental"](49.768404561217,23.908653259277,49.901047809335,24.166145324707););out;>;out skel qt;';
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        async: false,
        crossDomain: true,
        success: function (response) {
          //here response = geojson from overpass-api
          dataRentals = response.elements;
        }
      })
      return dataRentals;
    }

    function getDataParking() {
      //OVERPASS_API
      let dataParking = {},
          url = 'https://overpass-api.de/api/interpreter?data=[out:json][timeout:25];(node["amenity"="bicycle_parking"](49.768404561217,23.908653259277,49.901047809335,24.166145324707);relation["amenity"="bicycle_parking"](49.768404561217,23.908653259277,49.901047809335,24.166145324707););out;>;out skel qt;';
      $.ajax({
        url: url,
        dataType: 'json',
        type: 'GET',
        async: false,
        crossDomain: true,
        success: function (response) {
          // console.log(response);
          //here response = geojson from overpass-api
          dataParking = response.elements;
        }
      });
      return dataParking;
    }


    const map = this.map;


    // add data-shop-bycicles markers to map
    dataShops.forEach(function(marker) {
    // create a DOM element for the marker
        let el = document.createElement('div');
        el.className = 'marker-shops';

    //add addEventListener to markers
        el.addEventListener('click', function() {
          drawGeoJSON(marker);
        });
    //add popup
    let popup = new mapboxgl.Popup()
    .setLngLat([marker.lon, marker.lat])
    .setHTML('<h5 class="py-3">'+marker.tags.name+'</h5>'+'<p class="m-o py-3">'+marker.tags.opening_hours+'</p>');

    // add marker to map
    let coordinates = [marker.lon, marker.lat];
    new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map);
    });


    //add data-shop-rentals markers to map
    dataRentals.forEach(function(marker) {
       // console.log(marker);
    // create a DOM element for the marker
        let el = document.createElement('div');
        el.className = 'marker-rentals';

    //add addEventListener to markers
        el.addEventListener('click', function() {
          drawGeoJSON(marker);
        });
    //add popup
    var popup = new mapboxgl.Popup()
    .setLngLat([marker.lon, marker.lat])
    .setHTML('<h5 class="py-3">Rental place - '+marker.tags.name+'</h5>'+'<p>Network- '+marker.tags.network+'</p>'+'<hr>'+'<p>Capacity- '+marker.tags.capacity+'</p>');

    // add marker to map
    let coordinates = [marker.lon, marker.lat];
    new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map);
    });




    // add data-parking markers to map
    dataParking.forEach(function(marker) {

    // create a DOM element for the marker
        let el = document.createElement('div');
            el.className = 'marker-parking';

    //add addEventListener to markers
        el.addEventListener('click', function() {
          drawGeoJSON(marker);
        });

    //add popup
    var popup = new mapboxgl.Popup()
    .setLngLat([marker.lon, marker.lat])
    .setHTML('<h5 class="py-3">Bicycle parking</h5>'+'<p>Capacity - '+marker.tags.capacity+'</p>'+'<hr>'+'<p>Covered- '+marker.tags.covered+'</p>');

    // add marker to map
    let coordinates = [marker.lon, marker.lat];
    new mapboxgl.Marker(el)
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(map);
    });

    $('.preloader-wrapper').fadeOut(6000);
    // $('body').removeClass('preloader-site');
    },
    logging: () =>{
      console.log('success init');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
#map{
  position:absolute;
  top:0;
  bottom:0;
  width:100%;
}
.mapboxgl-ctrl-top-left .mapboxgl-ctrl-directions,
.mapboxgl-ctrl-top-right .mapboxgl-ctrl-geocoder{
  display: none;
}
.mapboxgl-ctrl-top-right{
  top:0;
  right: -10px;
  bottom: -81px;
}
.mapboxgl-ctrl-group{
  /* margin-bottom: 00px; */
}
.mapboxgl-ctrl-top-right .mapboxgl-ctrl{
  margin-bottom: 80px ;
}
.bg-shops{
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
}
.marker-shops{
  width: 40px;
  height: 40px;
  background-image: url('../assets/if_Shop.png');
  background-size: cover;
  cursor: pointer;
}
.marker-rentals{
  width: 40px;
  height: 40px;
  background-image: url('../assets/if_Bike.png');
  background-size: cover;
  cursor: pointer;
}
.marker-parking{
  width: 25px;
  height: 25px;
  background-image: url('../assets/if_parking_2.png');
  background-size: cover;
  cursor: pointer;
}
</style>
