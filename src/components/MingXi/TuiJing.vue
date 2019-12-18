<template>
    <div class="tuijing--container">
        <div class="tuijing--header">
            <span class="tuijing--select--span"></span>
            <span>{{ selectedDistrict.name }}</span>
            <span>——</span>
            <span class="tuijing--title">
                {{ title }}{{ itemsNumber }}项相关委办局重点任务推进情况
            </span>
        </div>

        <div class="tuijing-chart" ref="tuijing"></div>
    </div>
</template>

<script>
import axios from '../../utils/axiosRequest'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/axis'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/visualMap'
import { mapGetters } from 'vuex'
export default {
  name: 'TuiJing',
  props: {
    title: {
      type: String,
      default: '任务推进情况'
    },
    selectedDistrict: {
      type: Object,
      default: () => ({})
    },
    month: {
      type: [Boolean, String],
      default: false
    },
    startColor: {
      type: String,
      default: '#14c396',
      validator (value) {
        return !!value.match(/^(#|(rgb|hsl)a?\()/)
      }
    },
    endColor: {
      type: String,
      default: '#1484c8',
      validator (value) {
        return !!value.match(/^(#|(rgb|hsl)a?\()/)
      }
    },
    grow: Boolean
  },
  watch: {
    selectedDistrict: {
      handler (newVal, old) {
        if (old === newVal) {
          return
        }
        this.setOptionsData(newVal, this.month)
      },
      deep: true
    }
  },
  data: () => ({
    chart: undefined,
    itemsNumber: 77,
    options: {
      grid: {
        left: '2.5%',
        right: '2%',
        bottom: '10%',
        top: '10%'
      },
      visualMap: {
        show: false,
        min: 0,
        max: 50,
        dimension: 0,
        inRange: {
          color: ['#4a657a', '#ef5055']
        }
      },
      xAxis: {
        type: 'category',
        x: 0,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '70%'
          }
        },
        axisTick: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }

        },
        splitNumber: 20,
        axisPointer: {},
        data: []
      },
      yAxis: {
        type: 'value',
        splitLine: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '70%'
          },
          formatter: '{value} %'
        },
        axisTick: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        }
      },

      tooltip: {
        show: true,
        trigger: 'axis',
        axisPointer: {
          type: 'line'
        },
        textStyle: {
          fontSize: '80%'
        },
        renderMode: 'html',
        formatter: function (params) {
          const param = params[0]
          return `<span style="display:inline-block;margin-right:5px;border-radius:10px;width:0.5vw;height:0.5vw;background-color:${param.color};"></span>` +
                            param.axisValue + '<br />' + param.name + '<br />' + param.value + '%'
        }
      },
      series: [{
        type: 'bar',
        itemStyle: {
          barBorderRadius: 20
        },
        tooltip: {
          show: true

        },
        barWidth: '50%',
        data: []

      }]
    }
  }),
  created () {
    this.options.visualMap.inRange.color = [this.startColor, this.endColor]
  },
  mounted () {
    this.setOptionsData(this.selectedDistrict, this.month)
  },
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth',
      currentDay: 'dataDetail/currentDay'
    })
  },
  methods: {
    setChart () {
      if (!this.chart) {
        this.chart = echarts.init(this.$refs.tuijing, null, { renderer: 'canvas' })
      }
      this.chart.setOption(this.options)
    },
    setValue (name = 'hehe', percent = 100) {
      return {
        name: name,
        value: percent
      }
    },
    setOptionsData (obj = {}, month = '') {
      if (!month) return
      let params = {}
      if (month === 'overall') {
        params = {
          begin: `${this.currentYear}-01-01`,
          end: `${this.currentYear}-${this.currentMonth}-${this.currentDay}`,
          qx: obj.code
        }
      } else {
        params = {
          month: this.currentMonth,
          qx: obj.code
        }
      }
      axios({
        url: month === 'overall' ? this.$store.state.dataDetail.urls.tuijin.overall : this.$store.state.dataDetail.urls.tuijin.current,
        params
      }).then(({ status, data }) => {
        if (status === 200) {
          const arr = []
          const arrIndex = []
          this.itemsNumber = data.length
          for (let i = 0; i < data.length; i++) {
            const [index, name] = data[i][month === 'overall' ? 'zdrwjc' : 'name'].split('-')
            arr.push(this.setValue(name, parseFloat(data[i].p)))
            arrIndex.push(index)
          }
          this.options.series[0].data = arr
          this.options.xAxis.data = arrIndex
          this.setChart()
        }
      }).catch(err => {
        console.log(err)
      })
    }

  }
}
</script>

<style scoped>
    .tuijing--container {

        display: flex;
        flex-direction: column;
        font-size: 0.6vw;
        flex: 0 1 auto;
        min-height: 50%;
    }

    .tuijing-grow {
        flex-grow: 1;
        flex-shrink: 0;
    }

    .tuijing--header {
        position: relative;
        display: flex;
        flex-wrap: wrap;
        flex-shrink: 1;
        flex-grow: 0;

    }

    .tuijing--header span + span {
        margin: 0 0.3vw;
        line-height: 1;
    }

    .tuijing-chart {
        flex-grow: 1;
        flex-shrink: 0;
        display: block;
    }

    .tuijing--select--span {
        width: 0.2vw;

        background: #04f4fb;
    }

</style>
