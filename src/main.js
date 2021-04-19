import { createApp } from 'vue'

import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap';
import jquery from 'jquery'
import twzipcode from './assets/js/jquery.twzipcode.min.js';

import App from './App.vue'
import router from './router'

window.$ = jquery

const app = createApp(App).use(router)
app.config.productionTip = false
app.use(VueAxios, axios)
app.mount('#app')