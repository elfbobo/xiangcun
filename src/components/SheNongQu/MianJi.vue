<template>
    <div class="mianji--container">
        <chart-title :jiezhi="!jiezhi" @onChosenMonth="onChosenMonth">
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
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/visualMap'
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
    secondColor: {
      type: [Boolean, String],
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
    },
    changeLine: {
      type: Boolean,
      default: false
    },
    jiezhi: {
      type: Boolean,
      default: false
    },
    endColor: {
      type: [Boolean, String],
      default: '#14c396'
    }
  },
  data: () => ({
    options: {
      grid: {
        left: '10%',
        right: '5%',
        top: '10%',
        bottom: '20%'
      },
      visualMap: {
        show: false,
        min: 0,
        max: 10,
        dimension: 0,
        inRange: {
          color: ['#4a657a', '#ef5055']
        }
      },
      xAxis: {
        type: 'category',
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(23,76,110,0.2)'
          }
        },
        // boundaryGap: false,

        axisLabel: {
          show: true,
          margin: 25,
          textStyle: {
            color: '#fff',
            fontSize: '9%',
            lineHeight: 30
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
          show: false,
          lineStyle: {
            color: 'rgba(23,76,110,0.2)'
          }
        },
        data: ['宝山', '浦东', '嘉定', '崇明', '奉贤', '松江', '青浦', '闵行', '金山']
      },
      yAxis: {
        type: 'value',
        splitNumber: 10,
        min: function (value) {
          let min = Math.round((value.min - 10) / 10) * 10
          return min
        },
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
          show: false,
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
        // type: 'line',
        type: 'bar',
        data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
        barWidth: '40%',
        // areaStyle: {
        //   color: '#04f4fb'
        // },
        lineStyle: {
          color: '#04f4fb'
        },
        itemStyle: {
          // color: '#04f4fb',
          barBorderRadius: 50,
          opacity: 100
        },
        emphasis: {
          itemStyle: {
            // color: '#ffffff',
            opacity: 100,
            borderWidth: 5
          }
        }

      },{
          type: 'line',
          data: []
      }]
    }
  }),
  mounted () {
    if (this.changeLine) this.options.grid.bottom = '30%'
    // this.options.series[0].areaStyle.color = this.setGradientColor(this.startColor, 'rgba(0,0,0,0)')
    // this.options.series[0].itemStyle.color = this.startColor
    this.options.series[0].lineStyle.color = this.startColor

    let color = this.startColor
    let temp = color.split(',')
    temp[temp.length - 1] = '0.25)'
    this.options.tooltip.backgroundColor = temp.join(',')
    this.options.visualMap.inRange.color = [this.endColor, this.startColor]

    this.setChartStyle()
    this.$refs.mianji.setChart()
  },
  methods: {
    onChosenMonth (month) {
      this.$emit('onChosenMonth', month)
    },
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
        this.options.series[1] = {
          type: 'line',
          connectNulls: true,
          itemStyle: {
            opacity: 100
          },
          boundaryGap: false,
          lineStyle: {
            type: 'dotted',
            color: this.secondColor || this.startColor
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
            color: this.secondColor || this.startColor,
            formatter: '{c} %',
            position: 'bottom'
          }
        }
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
