// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})


//initiallize mapboxgl
// var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');
// mapboxgl.accessToken = 'pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA';
// var map = new mapboxgl.Map({
// container: 'map',
// center: [24.0336551,49.8368523],
// zoom: 10,
// maxBounds: [
//         [23.9632689953,49.7979017214],
//         [24.1040313244,49.8758455877]
//       ],
// style: 'mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i'
// });
