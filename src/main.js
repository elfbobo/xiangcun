import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/js/public'
import './assets/css/css.css'
import './assets/stylesheets/main.less'
import echarts from 'echarts/lib/echarts'
import http from './utils/httpRequest'
// import VueAxios from "vue-axios";
// import axios from 'axios'
import 'swiper/css/swiper.css'
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = http
Vue.prototype.$endOfMonth = function (m = 0) {
  switch (m) {
    case 4:case 6:case 9:case 11: return 30
    case 2: return 28
    default: return 31
  }
}

// axios.defaults.baseURL = `http://localhost:8081/api`
// axios.defaults.timeout = 3000
//
// Vue.use(VueAxios, axios)
Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
