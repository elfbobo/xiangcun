<template>
    <div class="shenongqu--container">
        <div class="shenongqu--left">
            <div class="shenongqu--huan">
                <huan
                        ref="huan1"
                        :finished="huan.first.finished"
                        :processing="huan.first.processing"
                        :delayed="huan.first.delayed"
                        :title="`${title1}77项重点任务推进情况`"
                ></huan>
                <huan
                        ref="huan2"
                        :finished="huan.second.finished"
                        :processing="huan.second.processing"
                        :delayed="huan.second.delayed"
                        :title="`${title2}77项重点任务推进情况`"
                ></huan>
            </div>
            <div class="shenongqu--mianji">
                <mian-ji ref="mianji1" second-color="rgba(251,185,25,1)" :title="`${title1}涉农区重点任务推进排名`"></mian-ji>
                <mian-ji ref="mianji2" :title="`${title2}各涉农区重点任务推进排名`" start-color="rgba(251,185,25,1)" second-color="rgba(4,244,251,1)"></mian-ji>
            </div>
        </div>
        <div class="shenongqu--right">
            <tuijing-bar ref="bar1" :title="`${title1}重点任务推进情况`"></tuijing-bar>
            <tuijing-bar ref="bar2" :title="`${title2}重点任务推进情况`"></tuijing-bar>
        </div>
    </div>
</template>

<script>
import axios from '../../utils/axiosRequest'
import Huan from './Huan'
import MianJi from './MianJi'
import TuijingBar from './TuijingBar'
import { mapGetters } from 'vuex'

export default {
  name: 'SheNongQu',
  components: { TuijingBar, MianJi, Huan },
  data: () => ({
    huan: {
      first: { finished: 27, processing: 61, delayed: 12 },
      second: { finished: 0, processing: 61, delayed: 39 }
    }
  }),
  created () {

  },
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth',
      currentDay: 'dataDetail/currentDay',
      districtNames: 'dataDetail/districtNames'
    }),
    title1 () {
      return `${this.currentYear}年1月至${this.currentMonth}月`
    },
    title2 () {
      return `${this.currentYear}年${this.currentMonth}月`
    }

  },
  mounted () {
    this.getData([this.sendRequest(this.$store.state.dataDetail.urls.mianji.overall), this.sendRequest(this.$store.state.dataDetail.urls.mianji.current, { month: this.currentMonth })], this.resolveData, 'line')
    // this.getData([this.sendRequest('/getc'), this.sendRequest('/getd')], this.resolveData, 'bar')
    this.getData([this.sendRequest(this.$store.state.dataDetail.urls.pie.overall), this.sendRequest(this.$store.state.dataDetail.urls.pie.current, { month: this.currentMonth })], this.resolveData, 'huan')
    let totalAfterData = [{
      data: [
        { name: '奉贤', finished: 16, processing: 46, delayed: 0 },
        { name: '浦东', finished: 16, processing: 42, delayed: 0 },
        { name: '宝山', finished: 16, processing: 35, delayed: 0 },
        { name: '崇明', finished: 17, processing: 42, delayed: 1 },
        { name: '青浦', finished: 16, processing: 43, delayed: 1 },
        { name: '嘉定', finished: 17, processing: 41, delayed: 1 },
        { name: '松江', finished: 17, processing: 41, delayed: 1 },
        { name: '闵行', finished: 16, processing: 39, delayed: 1 },
        { name: '金山', finished: 16, processing: 44, delayed: 3 }
      ] }, {
      data: [
        { name: '奉贤', finished: 0, processing: 46, delayed: 0 },
        { name: '崇明', finished: 0, processing: 43, delayed: 0 },
        { name: '浦东', finished: 0, processing: 42, delayed: 0 },
        { name: '嘉定', finished: 0, processing: 42, delayed: 0 },
        { name: '松江', finished: 0, processing: 42, delayed: 0 },
        { name: '宝山', finished: 0, processing: 35, delayed: 0 },
        { name: '青浦', finished: 0, processing: 43, delayed: 1 },
        { name: '闵行', finished: 0, processing: 39, delayed: 1 },
        { name: '金山', finished: 0, processing: 45, delayed: 2 }
      ] }]
    this.getFixData(totalAfterData, this.resolveData, 'bar')
  },
  methods: {
    getFixData (data = {}, callback = () => {
    }, type = '') {
      for (let i = 0; i < data.length; i++) {
        callback(data[i].data, i, type)
      }
    },
    resolveData (data = [], i = 0, type = 'huan') {
      const res = [...data]
      if (type === 'bar') {
        this.$refs[i === 0 ? 'bar1' : 'bar2'].setOptionData(res)
      } else if (type === 'line') {
        res.forEach(ele => {
          ele.value = parseFloat(ele.result) || 0
          ele.name = ele.name.split('-')[1].slice(0, 2)
        })
        this.$refs[i === 0 ? 'mianji1' : 'mianji2'].setOptionData(res, parseFloat(res[0]['jjx']))
      } else {
        const obj = res.reduce((prev, next) => {
          const val = this.pick(next.type)

          if (next.type.includes('按计划推进')) {
            prev.processing = val
          } else if (next.type.includes('已完成')) {
            prev.finished = val
          } else if (next.type.includes('滞后')) {
            prev.delayed = val
          }
          return prev
        }, { finished: 0, delayed: 0, processing: 0 })
        this.huan[i === 0 ? 'first' : 'second'] = obj
        this.$refs[i === 0 ? 'huan1' : 'huan2'].setChart(obj)
      }
    },
    pick (str = '') {
      const reg = str.match(/[0-9]+/g)
      return reg !== null ? parseInt(reg[0]) : 0
    },
    getData (httpCallbacks = [], callback = () => {
    }, type = '') {
      Promise.all(httpCallbacks)
        .then(response => {
          for (let i = 0; i < response.length; i++) {
            const { status, data } = response[i]
            if (status && status === 200) {
              callback(data, i, type)
            }
          }
        }).catch(err => {
          console.error(err)
        })
    },
    sendRequest (url = '', params = {}) {
      return axios({
        url: url,
        params: params
      })
    }
  }
}
</script>

<style scoped>
    .shenongqu--container {
        display: flex;
        flex-direction: row;
        flex: 1 0 auto;
    }

    .shenongqu--left {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }

    .shenongqu--right {
        display: flex;
        width: 42%;
        flex-direction: column;
    }

    .shenongqu--huan {
        height: 50%;
        flex-grow: 1;
        display: flex;
    }

    .shenongqu--mianji {
        height: 50%;
        flex-grow: 1;
        display: flex;
    }

</style>
