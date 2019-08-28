import Vue from 'vue'
import Vant, { Locale } from 'vant'
import 'vant/lib/index.css'
import './vant-variables.less'
import lang from 'vant/lib/locale/lang/en-US'

Vue.use(Vant)
Locale.use('en-US', lang)
