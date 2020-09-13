import Vue from 'vue';
import jquery from 'jquery';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Loading from 'vue-loading-overlay';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'vue-loading-overlay/dist/vue-loading.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';

library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
window.$ = jquery;

Vue.use(VueAxios, axios);
Vue.component('Loading', Loading);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
