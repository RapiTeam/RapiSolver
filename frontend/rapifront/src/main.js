import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueResource from 'vue-resource'
import LoadScript from 'vue-plugin-load-script';
import vuejquery from 'vue-jquery'
import Vuetify from 'vuetify'
import VueGeoLocation from 'vue-browser-geolocation'
import * as VueGoogleMaps from 'vue2-google-maps'

var PulseLoader = require('vue-spinner/src/PulseLoader.vue');

Vue.config.productionTip = false

Vue.use(VueResource)

Vue.use(LoadScript);

Vue.use(vuejquery)

Vue.use(Vuetify)

Vue.use(VueGeoLocation)

Vue.use(VueGoogleMaps,{
  load: {
    key:'AIzaSyDkY0z8ZHx7crWrDDONgwibUns7ogcppoc',
  },
});


new Vue({
  components: {
    'PulseLoader': PulseLoader
  },
  vuetify : new Vuetify(),
  router,
  render: h => h(App)
}).$mount('#app')
