webpackJsonp([0],{"5AqT":function(t,n){},CIhq:function(t,n){},D4uH:function(t,n,i){"use strict";var e={},a={name:"icon",props:{name:{type:String,validator:function(t){return t?t in e||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+t+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(t){return"horizontal"===t||"vertical"===t}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var t=this.scale;return t=void 0===t?1:Number(t),isNaN(t)||t<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):t*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?e[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var t=this.icon,n=t.width,i=t.height;return Math.max(n,i)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var t=this.icon.raw,n={};return t=t.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(t,i,e){var a="fa-"+(o++).toString(16);return n[e]=a,' id="'+a+'"'}),t=t.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(t,i,e,a){var o=i||a;return o&&n[o]?"#"+n[o]:t}),t}},mounted:function(){var t=this;if(!this.icon){this.$children.forEach(function(n){n.outerScale=t.normalizedScale});var n=0,i=0;this.$children.forEach(function(t){n=Math.max(n,t.width),i=Math.max(i,t.height)}),this.childrenWidth=n,this.childrenHeight=i,this.$children.forEach(function(t){t.x=(n-t.width)/2,t.y=(i-t.height)/2})}},register:function(t){for(var n in t){var i=t[n];i.paths||(i.paths=[]),i.d&&i.paths.push({d:i.d}),i.polygons||(i.polygons=[]),i.points&&i.polygons.push({points:i.points}),e[n]=i}},icons:e},o=870711;var r={render:function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("svg",{class:t.klass,style:t.style,attrs:{version:"1.1",role:t.label?"img":"presentation","aria-label":t.label,x:t.x,y:t.y,width:t.width,height:t.height,viewBox:t.box}},[t._t("default",[t.icon&&t.icon.paths?t._l(t.icon.paths,function(n,e){return i("path",t._b({key:"path-"+e},"path",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.polygons?t._l(t.icon.polygons,function(n,e){return i("polygon",t._b({key:"polygon-"+e},"polygon",n,!1))}):t._e(),t._v(" "),t.icon&&t.icon.raw?[i("g",{domProps:{innerHTML:t._s(t.raw)}})]:t._e()])],2)},staticRenderFns:[]};var s=i("VU/8")(a,r,!1,function(t){i("5AqT")},null,null);n.a=s.exports},NHnr:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=i("7+uW"),a=(i("D/PP"),{name:"menu",components:{Icon:i("D4uH").a}}),o={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"menu"}},[n("ul",{attrs:{id:"bottom-menu"}},[n("li",{staticClass:"menu-item"},[n("a",{staticClass:"menu-link",attrs:{href:"#"}},[n("icon",{attrs:{name:"align-justify"}})],1)]),this._v(" "),n("li",{staticClass:"menu-item"},[n("a",{staticClass:"menu-link",attrs:{href:"#"}},[n("icon",{attrs:{name:"location-arrow"}})],1)]),this._v(" "),n("li",{staticClass:"menu-item"},[n("a",{staticClass:"menu-link",attrs:{href:"#"}},[n("icon",{attrs:{name:"search"}})],1)])])])},staticRenderFns:[]};var r={name:"App",components:{Menu:i("VU/8")(a,o,!1,function(t){i("CIhq")},"data-v-29928330",null).exports}},s={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),this._v(" "),n("Menu")],1)},staticRenderFns:[]};var c=i("VU/8")(r,s,!1,function(t){i("TzhD")},null,null).exports,l=i("/ocq"),h=this,u={name:"Map",mounted:function(){this.createMap(),this.logging()},methods:{createMap:function(){var t=i("1e2d");t.accessToken="pk.eyJ1IjoiYXJ0ZW1zeXZhayIsImEiOiJjamV6dDhtejQwYXo1MzB1cGtub3Awb3htIn0.bffgjaoFCdib8m5aRj3LVA",h.map=new t.Map({container:"map",center:[24.0336551,49.8368523],zoom:14,hash:!0,style:"mapbox://styles/artemsyvak/cjf1load5091o2tk8cy4cje4i"}),h.map.addControl(new t.NavigationControl),h.map.addControl(new t.GeolocateControl({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0}))},logging:function(){console.log("Hello from Map vue!!!")}}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"map"}})},staticRenderFns:[]};var d=i("VU/8")(u,p,!1,function(t){i("VQ2w")},"data-v-3b120e8a",null).exports;e.a.use(l.a);var f=new l.a({routes:[{path:"/",name:"Map",component:d}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:f,components:{App:c},template:"<App/>"})},TzhD:function(t,n){},VQ2w:function(t,n){}},["NHnr"]);
//# sourceMappingURL=app.d508544d97a9ae97377a.js.map