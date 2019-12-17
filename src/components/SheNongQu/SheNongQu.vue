<template>
    <div class="shenongqu--container">
        <div class="shenongqu--left">
            <div class="shenongqu--huan">
                <huan
                        ref="huan1"
                        :finished="huan.first.finished"
                        :processing="huan.first.processing"
                        :delayed="huan.first.delayed"
                        title="2019年1月至11月77项重点任务推进情况"
                ></huan>
                <huan
                        ref="huan2"
                        :finished="huan.second.finished"
                        :processing="huan.second.processing"
                        :delayed="huan.second.delayed"
                        title="11月77项重点任务推进情况"
                ></huan>
            </div>
            <div class="shenongqu--mianji">
                <mian-ji ref="mianji1" title="2019年1月至11月涉农区重点任务推进排名"></mian-ji>
                <mian-ji ref="mianji2" title="11月各涉农区重点任务推进排名" start-color="rgba(251,185,25,1)"></mian-ji>
            </div>
        </div>
        <div class="shenongqu--right">
            <tuijing-bar ref="bar1" title="2019年1月至11月重点任务推进情况"></tuijing-bar>
            <tuijing-bar ref="bar2" title="11月重点任务推进情况"></tuijing-bar>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Huan from './Huan'
import MianJi from './MianJi'
import TuijingBar from './TuijingBar'

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
  mounted () {
    this.getData([this.sendRequest('/snq/pie/overall'), this.sendRequest('/snq/pie/last')], this.resolveData, 'huan')
    this.getData([this.sendRequest('/snq/bar/overall'), this.sendRequest('/snq/bar/last')], this.resolveData, 'bar')
    this.getData([this.sendRequest('/snq/line/overall'), this.sendRequest('/snq/line/last')], this.resolveData, 'line')
  },
  methods: {
    resolveData (data = {}, i = 0, type = 'huan') {
      const res = Array.isArray(data) ? [...data] : { ...data }
      if (type === 'bar') {
        this.$refs[i === 0 ? 'bar1' : 'bar2'].setOptionData(res)
      } else if (type === 'line') {
        res.value = res.value.sort((a, b) => b.value - a.value)
        this.$refs[i === 0 ? 'mianji1' : 'mianji2'].setOptionData(res.value, res.target ? res.target : null)
      } else {
        this.huan[i === 0 ? 'first' : 'second'] = res
        this.$refs[i === 0 ? 'huan1' : 'huan2'].setChart(res)
      }
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
    sendRequest (url = '/snq', params = {}) {
      const instance = axios.create({
        baseURL: 'http://localhost:8081/api'
      })
      return instance({
        method: 'get',
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
