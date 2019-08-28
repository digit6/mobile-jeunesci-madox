import Vue from 'vue'
import { Capacitor ,Plugins } from '@capacitor/core';

const { Share , Browser ,SplashScreen } = Plugins;


Vue.prototype.$Share=Share
Vue.prototype.$Plugins=Plugins
Vue.prototype.$Browser=Browser
Vue.prototype.$SplashScreen=SplashScreen