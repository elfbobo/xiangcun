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

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts
Vue.prototype.$http = http

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
