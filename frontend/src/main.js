import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'; // Import Vuetify
import 'vuetify/dist/vuetify.min.css'; // Import Vuetify CSS
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuetify);
const vuetify = new Vuetify(); // Initialize Vuetify

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
