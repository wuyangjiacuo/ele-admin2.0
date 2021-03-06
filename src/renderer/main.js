import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import store from './store'
import API from './server'
import './style/index.less'
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import globalComponents from './components' // 自定义全局组件
import 'vue-croppa/dist/vue-croppa.css'
import Croppa from 'vue-croppa'
import { utils } from './utils/index'
import VCharts from 'v-charts'
Vue.use(Croppa)
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.use(globalComponents) // 使用插件的方式注册全局组件
Vue.use(VCharts)
Vue.prototype.$api = API
Vue.prototype.$utils = utils
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
