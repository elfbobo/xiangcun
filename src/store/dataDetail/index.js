import axios from '../../utils/axiosRequest'

const state = {
  districts: [
    { name: '浦东新区', code: 310115, alias: 'pdxq', short: '浦东' },
    { name: '奉贤区', code: 310120, alias: 'fxq', short: '奉贤' },
    { name: '崇明区', code: 310151, alias: 'cmq', short: '崇明' },
    { name: '金山区', code: 310116, alias: 'jsq', short: '金山' },
    { name: '嘉定区', code: 310114, alias: 'jdq', short: '嘉定' },
    { name: '松江区', code: 310117, alias: 'sjq', short: '松江' },
    { name: '闵行区', code: 310112, alias: 'mhq', short: '闵行' },
    { name: '青浦区', code: 310118, alias: 'qpq', short: '青浦' },
    { name: '宝山区', code: 310113, alias: 'bsq', short: '宝山' }
  ],
  current: {
    month: new Date().getMonth()  === 0 ? 1 : new Date().getMonth(),
    year: new Date().getFullYear(),
    day: new Date().getDate()
  },
  urls: {
    mianji: {
      current: '/geta',
      overall: '/getb'
    },
    pie: {
      current: '/getc',
      overall: '/getd'
    },
    tuijin: {
      current: '/gete',
      overall: '/getf'
    },
    table: {
      current: '/getg',
      overall: '/geth'
    },
    cydw: {
      current: '/geti',
      overall: '/getj'
    }
  }
}

const mutations = {

}

const actions = {

}

const getters = {
  currentMonth: state => {
    return state.current.month
  },
  currentYear: state => {
    return state.current.year
  },
  currentDay: state => {
    return state.current.day
  },
  districtNames: state => {
    return state.districts.reduce((prev, next) => {
      return prev.concat(next.name)
    }, [])
  },
  zdrw: state => {
    return state.districts.concat({ name: '委办局', code: 0, alias: 'wbj' })
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
  namespaced: true
}
