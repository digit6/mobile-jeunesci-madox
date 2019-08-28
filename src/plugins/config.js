import Vue from 'vue'

import SuiVue from 'semantic-ui-vue';

/* ... */

Vue.use(SuiVue);
import 'semantic-ui-css/semantic.min.css';

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);




import VueOffline from 'vue-offline'
Vue.use(VueOffline)

import VueBus from 'vue-bus';
 
Vue.use(VueBus);

const moment = require('moment')
require('moment/locale/fr')
 
Vue.use(require('vue-moment'), {
    moment
})



import Vue2TouchEvents from 'vue2-touch-events'
 
Vue.use(Vue2TouchEvents, {
    touchClass: '',
    tapTolerance: 10,
    swipeTolerance: 100,
    longTapTimeInterval: 40
})


import { VueHammer } from 'vue2-hammer'
Vue.use(VueHammer)


import { VFBLogin as VFacebookLogin } from 'vue-facebook-login-component'
Vue.component('VFacebookLogin',VFacebookLogin)


import sleep from 'sleep-promise';
Vue.prototype.$sleep=sleep



import BackTop from '@mlqt/vue-back-top'
 
Vue.use(BackTop)

const forEachs = require('array-foreach-async');
Vue.prototype.$forEach=forEachs


var VueCookie = require('vue-cookie');
// Tell Vue to use the plugin
Vue.use(VueCookie);

import AutoStorage from "vue-auto-storage";
 
Vue.use(AutoStorage);
