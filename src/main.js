import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/js/public'
import './assets/css/css.css'
import './assets/stylesheets/main.less'
import echarts from 'echarts/lib/echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

Vue.use(echarts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
