import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showModal: false,
    serverMatterUrl: 'http://192.168.26.150:8080/datashow/pages/Cockpit/DpZwfw.do', // 行政审批服务事项、人次
    trendUrl: 'http://192.168.26.151/#/home', // 益农便民服务趋势
    subsidiesUrl: 'http://192.168.27.107:10505/appraise-web/supervise/map/index', // 补贴金额
    subObjUrl: 'http://192.168.27.107:10505/appraise-web/supervise/map/index', // 补贴对象
    CertifiedUrl: 'http://192.168.26.147:8002/get_show_view?name=%E9%A6%96%E9%A1%B5'// 绿色经营主体
    // serverMatterUrl:'https://www.baidu.com',//行政审批服务事项、人次
    // trendUrl:'https:www.baidu.com',//益农便民服务趋势
    // subsidiesUrl:'linkImg-h2.png',//补贴金额
    // subObjUrl:'linkImg-h1.png',//补贴对象
    // CertifiedUrl:'linkImg-h3.png'//绿色经营主体

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
