<template>
    <div class="tuijing--container">
        <div class="tuijing--header">
            <span class="tuijing--select--span"></span>
            <span class="tuijing--title">
                {{ title }}
              <date-select v-if="this.month !== 'overall'" :overall="this.month !== 'overall'" @onChosenValue="onChooseMonth"></date-select>
              77项所有重点任务推进情况
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
import ElSelect from '../select/elSelect'
import ElOption from '../select/elOption'
import DateSelect from '../DateSelect'
export default {
  name: 'TuiJing',
  components: { DateSelect },
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
        this.setOptionsData(newVal, this.month, this.cm)
      },
      deep: true
    }
  },
  data: () => ({
    chart: undefined,
    itemsNumber: 77,
    cm: 0,
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
            color: 'rgba(23,76,110,0.2)'
          }
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff',
            fontSize: '90%'
          }
        },
        axisTick: {
          show: false,

          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: 'rgba(23,76,110,0.2)'
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
            color: 'rgba(23,76,110,0.2)'
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
          show: false,
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(23,76,110,0.2)'
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
    this.$nextTick(() => {
      this.setOptionsData(this.selectedDistrict, this.month, this.currentMonth)
    })
  },
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth',
      currentDay: 'dataDetail/currentDay'
    })
  },
  methods: {
    endOfMonth (m) {
      switch (m) {
        case 4:case 6:case 9:case 11: return 30
        case 2: return 28
        default: return 31
      }
    },
    onChooseMonth (month) {
      this.cm = month
      this.setOptionsData(this.selectedDistrict, this.month, month)
    },
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
    setOptionsData (obj = {}, month = '', monthValue = 1) {
      if (!month) return
      let params = {}
      if (month === 'overall') {
        params = {
          begin: `${this.currentYear}-01-01`,
          end: `${this.currentYear}-${monthValue || this.currentMonth}-${this.endOfMonth(monthValue || this.currentMonth)}`,
          qx: obj.code
        }
      } else {
        params = {
          month: monthValue || this.currentMonth,
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

<style lang="less" scoped>
    .tuijing--title {
      font-size: inherit;
      vertical-align: middle;
    }
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
