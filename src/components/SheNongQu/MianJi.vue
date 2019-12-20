<template>
    <div class="mianji--container">
        <chart-title>
            {{title}}
        </chart-title>
        <div style="position: relative;flex: 1 1 auto;">
            <chart-mixins
                    ref="mianji"
                    :options="options"
            >
            </chart-mixins>
        </div>

    </div>
</template>

<script>
import 'echarts/lib/component/legend'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/axis'
import 'echarts/lib/chart/line'
import 'echarts/lib/component/grid'
import ChartTitle from '../ChartTitle'
import ChartMixins from '../ChartMixins'

export default {
  name: 'MianJi',
  components: { ChartMixins, ChartTitle },
  props: {
    title: {
      type: String,
      default: '推进情况'
    },
    startColor: {
      type: String,
      default: 'rgba(4,244,251,1)'
    },
    target: {
      type: [Boolean, Number],
      default: false
    },
    smooth: Boolean,
    lineWidth: {
      type: Number,
      default: 2
    },
    startOffset: {
      type: Number,
      default: 0
    },
    endOffset: {
      type: Number,
      default: 1
    },
    left: {
      type: String,
      default: '10%'
    }
  },
  data: () => ({
    options: {
      grid: {
        left: '10%',
        right: '5%',
        top: '10%'
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        boundaryGap: false,

        axisLabel: {
          show: true,
          margin: 25,

          textStyle: {
            color: '#fff',
            fontSize: '9%'
          },
          formatter: function (params) {
            let res = ''
            const maxW = 6
            const rowNumber = Math.ceil(params.length / maxW)
            for (let i = 0; i < rowNumber; i++) {
              res += params.slice(i * maxW, i * maxW + maxW) + '\n'
            }
            return res
          }
        },
        axisTick: {
          show: false,
          lineStyle: {
            show: false,
            color: 'rgba(4,244,251,0.3)'
          }
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(4,244,251,0.3)'
          }
        },
        data: ['宝山', '浦东', '嘉定', '崇明', '奉贤', '松江', '青浦', '闵行', '金山']
      },
      yAxis: {
        type: 'value',
        splitNumber: 10,

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
            fontSize: '7%'
          },
          formatter: '{value} %'
        },
        axisTick: {
          show: false,
          lineStyle: {
            show: false,
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
          fontSize: '8%'
        },
        backgroundColor: 'rgba(4,244,251,0.25)',
        renderMode: 'html',
        formatter: function (params) {
          const param = params[0]
          return `<span style="font-size: 0.6vw;">${param.value}%</span>`
        }
      },
      series: [{
        type: 'line',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
        areaStyle: {
          color: '#04f4fb'
        },
        lineStyle: {
          color: '#04f4fb'
        },
        itemStyle: {
          color: '#04f4fb',
          opacity: 0
        },
        emphasis: {
          itemStyle: {
            color: '#ffffff',
            opacity: 100
          }
        }
      }]
    }
  }),
  mounted () {
    this.options.series[0].areaStyle.color = this.setGradientColor(this.startColor, 'rgba(0,0,0,0)')
    this.options.series[0].itemStyle.color = this.startColor
    this.options.series[0].lineStyle.color = this.startColor
    let temp = this.startColor.split(',')
    temp[temp.length - 1] = '0.25)'
    this.options.tooltip.backgroundColor = temp.join(',')
    this.setChartStyle()
    this.$refs.mianji.setChart()
  },
  methods: {
    setGradientColor (start, end) {
      return new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
        {
          offset: this.startOffset,
          color: start
        },
        {
          offset: this.endOffset,
          color: end
        }
      ])
    },
    setOptionData (dataArray = [], target) {
      if (dataArray.length === 0) {
        return
      }

      const { names, values } = dataArray.reduce((prev, next) => {
        prev.names.push(next.name)
        prev.values.push(next.value)
        return prev
      }, { names: [], values: [] })

      this.options.series[0].data = values
      this.options.xAxis.data = names
      if (target) {
        this.options.series.push({
          type: 'line',
          connectNulls: true,
          itemStyle: {
            opacity: 100
          },

          lineStyle: {
            type: 'dotted',
            color: this.startColor
          },
          data: [{
            value: target,
            itemStyle: {
              opacity: 0
            }
          }, null, null, null, null, null, null, null, target],
          label: {
            show: true,
            fontSize: '20px',
            color: this.startColor,
            formatter: '{c} %',
            position: 'bottom'
          }
        })
      }
      this.$refs.mianji.setChart()
    },
    setChartStyle () {
      this.options.series[0].smooth = this.smooth
      this.options.series[0].lineStyle.width = this.lineWidth
      this.options.grid.left = this.left
    }

  }
}
</script>

<style scoped>
    .mianji--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin-right: 30px;
        position: relative;
    }
</style>
