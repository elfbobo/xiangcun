<template>
    <div class="huan--container">
        <chart-title>
            {{ title }}
        </chart-title>
        <div class="layout--row">
            <div class="huan--chart">
                <chart-mixins
                        ref="pie"
                        :options="options"
                ></chart-mixins>
            </div>
            <div class="huan--legend">
                <table class="huan--legend__table">
                    <tr v-if="finished">
                        <td><span style="background: #3af16e"></span>已完成</td>
                        <td>{{ percentage.finished }}<span>%</span></td>
                        <td>{{ finished }}<span>项</span></td>
                    </tr>
                    <tr v-if="processing">
                        <td><span style="background: #04f4fb"></span>按计划推进</td>
                        <td>{{ percentage.processing }}<span>%</span></td>
                        <td>{{ processing }}<span>项</span></td>
                    </tr>
                    <tr v-if="delayed">
                        <td><span style="background: #ff5959"></span>滞后</td>
                        <td>{{ percentage.delayed }}<span>%</span></td>
                        <td>{{ delayed }}<span>项</span></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>

import 'echarts/lib/chart/pie'
import 'echarts/lib/component/grid'
import 'echarts/lib/component/tooltip'
import ChartTitle from '../ChartTitle'
import ChartMixins from '../ChartMixins'

export default {
  name: 'Huan',
  components: { ChartMixins, ChartTitle },
  props: {
    title: {
      type: String,
      default: '推进情况'
    },
    finished: {
      type: [Number, String],
      default: 18
    },
    processing: {
      type: [Number, String],
      default: 56
    },
    delayed: {
      type: [Number, String],
      default: 3
    }
  },
  computed: {
    percentage () {
      const sum = this.finished + this.processing + this.delayed
      return {
        finished: (this.finished / sum * 100).toFixed(2),
        processing: (this.processing / sum * 100).toFixed(2),
        delayed: (this.delayed / sum * 100).toFixed(2)

      }
    }
  },
  data: () => ({
    options: {
      grid: {
        left: '2%',
        right: '2%',
        bottom: '2%',
        top: '2%'
      },
      tooltip: {
        show: true,
        textStyle: {
          fontSize: '8%'
        },
        renderMode: 'html'

      },
      series: [{
        type: 'pie',
        radius: ['50%', '70%'],
        label: {
          normal: {
            show: false
          }
        },
        data: []
      }]
    }
  }),
  mounted () {
    this.$nextTick(() => {

    })
  },
  methods: {
    setChart ({ finished, processing, delayed }) {
      this.options.series[0].data = []
      if (delayed) {
        this.options.series[0].data.push(this.setPieDetail('滞后', delayed, '#ff5959'))
      }

      if (finished) {
        this.options.series[0].data.push(this.setPieDetail('已完成', finished, '#3af16e'))
      }
      if (processing) {
        this.options.series[0].data.push(this.setPieDetail('按计划推进', processing, '#04f4fb'))
      }
      this.$refs.pie.setChart()
    },
    setPieDetail (name = '', value = 100, color = '#04f4fb') {
      return {
        name: name,
        value: value,
        itemStyle: {
          color: color
        },
        tooltip: {
          formatter: function (params) {
            return `${params.marker} ${params.name}: ${params.percent}%`
          }
        }
      }
    }
  }
}
</script>

<style scoped>
    .huan--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin-right: 30px;
    }

    .huan--chart {
        flex: 0 0 auto;
        width: 40%;
        max-width: 40%;
        height: 100%;
        position: relative;
    }

    .huan--legend {
        flex: 1 0 auto;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .huan--legend__table {
        color: white;
        font-size: 0.6vw;
    }

    .huan--legend__table tr td {
        padding: 0.4vw;
    }

    .huan--legend__table tr td:first-child *:first-child {
        display: inline-block;
        margin-right: 0.4vw;
        width: 0.4vw;
        height: 0.4vw;
        background: white;
    }

    .huan--legend__table tr td span:last-child {
        font-size: 0.4vw;
        margin-left: 0.3vw;
    }

    .layout--row {
        display: flex;
        flex-grow: 1;
        flex-shrink: 1;
        flex-direction: row;
    }

</style>
