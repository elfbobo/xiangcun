<template>
    <div class="bar--container">
        <chart-title subtitle="（按滞后任务数排名）">{{ title }}</chart-title>
        <div style="flex: 1 1 auto;position: relative;">
            <chart-mixins ref="bar" :options="options"></chart-mixins>
        </div>
    </div>
</template>

<script>
import ChartTitle from '../ChartTitle'
import ChartMixins from '../ChartMixins'
import 'echarts/lib/component/axis'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/legend'
import 'echarts/lib/component/grid'

export default {
  name: 'TuijingBar',
  components: { ChartMixins, ChartTitle },
  props: {
    title: {
      type: String,
      default: '推进情况'
    }
  },
  data: () => ({
    options: {
      grid: {
        top: '15%',
        left: '5%',
        right: '2%',
        bottom: '5%'
      },
      legend: {
        padding: [20, 10, 0, 10],
        itemWidth: 10,
        itemGap: 120,
        itemHeight: 10,
        textStyle: {
          color: '#ffffff',
          fontSize: '9%'
        },
        data: ['已完成', '按计划推进', '滞后']
      },
      yAxis: {
        type: 'category',
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
            fontSize: '9%'
          }
        },
        axisTick: {
          show: false,

          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },

        data: []
      },
      xAxis: {
        type: 'value',
        splitNumber: 20,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLabel: {
          show: false
        },
        axisTick: {
          show: false,
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
      series: [{
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: '8%'

            }

          }
        },
        itemStyle: {
          color: '#04f4fb'
          // barBorderRadius: [20, 0, 0, 20]
        },
        barWidth: '50%',
        name: '按计划推进',
        data: []
      }, {
        type: 'bar',
        stack: '总量',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: '8%'
            }
          }
        },

        itemStyle: {
          color: '#3af16e'
        },
        name: '已完成',
        data: []
      }, {
        type: 'bar',
        stack: '总量',
        name: '滞后',
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#000',
              fontSize: '8%'

            }

          }
        },
        itemStyle: {
          color: '#fbb919'
          // barBorderRadius: [0, 20, 20, 0]
        },
        data: []
      }]
    }
  }),
  mounted () {
  },
  methods: {
    /**
             * [
             *  {name:'奉贤',finished:16,processing:46,delayed:0},
             *  {name:'浦东',finished:16,processing:42,delayed:0},
             *  ...
             * ]
             * @param dataArray
             */
    setOptionData (dataArray = []) {
      if (!dataArray || dataArray.length === 0) {
        return
      }
      const arr = dataArray.sort((a, b) => {
        return b.delayed - a.delayed
      })

      arr.forEach((ele) => {
        if (ele.delayed === 0) {
          ele.delayed = null
        }
        if (ele.finished === 0) {
          ele.finished = null
        }
        if (ele.processing === 0) {
          ele.processing = null
        }
      })
      const { categories, finished, processing, delayed } = arr.reduce((prev, next) => {
        prev.categories.push(next.name)
        prev.finished.push(next.finished)
        prev.processing.push(next.processing)
        prev.delayed.push(next.delayed)

        return prev
      }, { categories: [], finished: [], processing: [], delayed: [] })
      this.options.series[0].data = processing
      this.options.series[1].data = finished
      this.options.series[2].data = delayed
      this.options.yAxis.data = categories
      if (processing.filter(ele => ele !== null).length === 0) {
        this.options.legend.data.splice(this.options.legend.data.indexOf('按计划推进'), 1)
      }
      if (finished.filter(ele => ele !== null).length === 0) {
        this.options.legend.data.splice(this.options.legend.data.indexOf('已完成'), 1)
      }
      if (delayed.filter(ele => ele !== null).length === 0) {
        this.options.legend.data.splice(this.options.legend.data.indexOf('滞后'), 1)
      }

      this.$refs.bar.setChart()
    }
  }
}
</script>

<style scoped>
    .bar--container {
        width: 100%;
        flex: 1 0 auto;
        min-height: 20%;
        display: flex;
        flex-direction: column;
        position: relative;
    }

</style>
