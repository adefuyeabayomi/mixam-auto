import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuesax from 'vuesax'
import Vmodal from "vue-js-modal"

//import axios from "axios";

import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import "vue-js-modal/dist/styles.css"
import "../node_modules/vuesax/dist/vuesax.css";

Vue.use(Vmodal,{ dialog : true , dynamicDefaults: { draggable: true, resizable: true } })
Vue.use(vuesax);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
