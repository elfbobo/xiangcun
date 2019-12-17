<template>
    <div>
        <div class="attestation" ref="attestationChart" :style='{width:elWidth,height:elHeight}'></div>
        <el-dialog-page ref="serverMatterDialog"></el-dialog-page>
    </div>
</template>

<script>
import ElDialogPage from '@/components/dialog/zdialogPage'
export default {
  props: ['width', 'height'],
  data () {
    return {
      attestation: null,
      chartData: {
        colorList: [],
        xAxisData: [],
        legendData: [],
        seriesData: [],
        yAxisSplit: 5,
        yAxisMin: 0,
        legendShow: false,
        gridXT: 0,
        gridYL: 0,
        gridXB: 0,
        gridYR: 0,
        yAfontSize: 0,
        symbolS: false,
        unit: '',
        xUnit: ''
      },
      elWidth: '',
      elHeight: '',
      timer: null

    }
  },
  watch: {
    chartData: {
      handler (newVal, oldVal) {
        if (this.attestation) {
          if (newVal) {
            this.singleLineChart(newVal)
          } else {
            this.singleLineChart(oldVal)
          }
        }
      },
      deep: true
    }
  },
  beforeDestroy () {
    if (!this.attestation) {
      return
    }
    this.attestation.dispose()
    this.attestation = null
  },
  destroyed () {
    clearInterval(this.timer)
  },
  components: {
    ElDialogPage
  },
  methods: {
    init (attrSet, data) {
      this.chartData = {
        colorList: attrSet.pageList.colorList || ['#35f0fe', '#5395d2'],
        yAxisSplit: attrSet.pageList.yAxis.splitNum || 3,
        yAxisMin: attrSet.pageList.yAxis.min || 0,
        legendShow: attrSet.pageList.legend.show || false,
        gridXT: attrSet.pageList.grid.xPos || '14%',
        gridYL: attrSet.pageList.grid.yPos || '8%',
        gridXB: attrSet.pageList.grid.xPosR || '6%',
        gridYR: attrSet.pageList.grid.yPosB || '19%',
        yAfontSize: attrSet.pageList.yAxis.fontSize || '8%',
        xAxisData: data.xaxis,
        legendData: data.legend,
        symbolS: attrSet.pageList.series.symbol || true,
        seriesData: JSON.parse(JSON.stringify(data.series)),
        unit: attrSet.pageList.unit,
        xUnit: attrSet.pageList.xUnit
      }
      this.$nextTick(() => {
        this.singleLineChart(this.chartData)
      })
      this.elWidth = this.width
      this.elHeight = this.height
    },
    openServerMatter (url) {
      this.$nextTick(() => {
        if (!this.attestation) {
          return
        }
        var _this = this
        this.attestation.getZr().on('click', function () {
          _this.$refs.serverMatterDialog.init(url)
        })
      })
    },
    singleLineChart (optionData) {
      var img = [
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAVlJREFUKBVNUbFOQkEQnD1RTAwYiTZEE40FVnZSSGigMjT6A7ZaYKKlCYWJsbTSQr9CGzqxIVgQPkAKiRWFGIgQiqfy1tmnT9hmbnbmbueygolKDzSnQEZ8pNShKUCtHpPH0EIOZAe65CluVbEXCiGK4C4qOKjGpCNnqq48QBWKbQjeneLGn8KzG2HDFxyyv8j+UyGGrCv3UQyMQIumTY5/kxF2DI1zQst080n6Qx+YM+8Eu4yR5/noPwJwxRgVX3HPvBUzd2lYiMaR+Ozjxc4T5t5MHOteH12ae4yIrom+hwSzdUJjgORBn8R8jtgw4cvDvihOeBwaZw350rH1fykabjqCS+Ya8dVTOCzPOqw5h5whP7lifdMDn93aGmgJPs6DFwRt5mtybIqzk9YThxKXcxEsxRr8aIFwTdOqcSuKr4RifV7Kf9xgXJmhJr+57gjXXZuT9lgBfgB7Fn8YCYOrVQAAAABJRU5ErkJggg==',
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAWZJREFUKBVNkTFIglEQx+9/n5SDLUUQUlSDGEUNQVNLuAZBkBEkDQWJkFBtgUNQjW1RONQcOOTS2hC01VaRBdHkkOKQBFr6rrvsC2+5u9/9795790BtFj95iAnJNJFEiVAA4SaXGrvyJbAgfvbSK/VaVoTm/YLvAbpAZzCZW42UeFeEpVbPmxBAGYx9gBMtj7Jxq5vO6+lbTOux6zrpVbyuKdD3IJGbIfCz41Aa8mWnTbzflSsBkMyJZmDeRrO6o7E2q4lbZqpGSLk4lzcdk8ik1Tpc6FpdwuI2S/xxbZZJFqBixab30S2EUpuQLDduzHQ6GbeWNJpY8Zi3dD2flpvX1W0at9x0HAjIoa6nCciOOOlHMDjseYiZ14YB41b/1VnTwvF9Rj9jz2KdVtRH6odQVFnYGIMyudT4gbKWxbOPs865I33IkM8IeGPmjVxy9NLYv9gXLJ0+hV2jEdX7Fc7XRoo+N/8DnFSRfz4FGFwAAAAASUVORK5CYII=',
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjI0MEE0OURDRkJDMTFFOTg1MDBERjQ1OTU5MzhFNkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjI0MEE0OUVDRkJDMTFFOTg1MDBERjQ1OTU5MzhFNkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCMjQwQTQ5QkNGQkMxMUU5ODUwMERGNDU5NTkzOEU2QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCMjQwQTQ5Q0NGQkMxMUU5ODUwMERGNDU5NTkzOEU2QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Ph5xVUIAAAEESURBVHjaZJG/TgJBEIdv7w000hBNIBZa8QAaijsrYoMvYCsFJliaXEcoqaCAp8DGDtzCaMUDQKGhovDMUVmS9Rsyd25kkm/n3283uzvGORcUZk3MeglnsIS3IHIvedvsxNaUiMdwE+zbBO7YlBr2hSSvcAHfMIIFnEMLjuAd6iJsq/ATavAFDfU1rUu/LSdPCa6gqf7eu8IAZvAkXsQZwQEcwofGuW3gFESzCTUIVJz+e1yqdbFMxHNNbuEBfjQX39G62FzEfdjCIxxDFWL1J1qXfj//54SkqyesdSAymLLWEv65Z4oJWnPNOoSKd+fV7msj9/w3Qd+sKRfjjtzab/0KMADF908eGrBpOQAAAABJRU5ErkJggg=='
      ]
      this.attestation = this.$echarts.init(this.$refs.attestationChart)
      let options = {
        color: optionData.colorList,
        title: {
          show: false
        },
        legend: {
          show: optionData.legendShow
        },
        tooltip: {
          show: true,
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              width: 0
            }
          },
          formatter: function (params) {
            let list = []
            let listItem = ''
            for (var i = 0; i < params.length; i++) {
              list.push(

                '<i style="display: inline-block;width: 10px;height: 10px;background: ' +
                                params[i].color +
                                ';margin-right: 5px;border-radius: 50%;}"></i><span style="padding-right:10px;">' +
                                params[i].seriesName +
                                '</span>' +
                                params[i].value +
                                optionData.unit
              )
            }
            listItem = list.join('<br>')
            return '<div class="showBox"><span style="display:block">' + params[0].axisValue + ' ' + optionData.xUnit + '</span>' + listItem + '</div>'
          }
        },
        grid: {
          top: optionData.gridYL,
          left: optionData.gridXT,
          right: optionData.gridXB,
          bottom: optionData.gridYR
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            color: '#ffffff',
            fontSize: '8%'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(23,76,110,.2)'
            }
          }
        },
        yAxis: [{
          type: 'value',
          position: 'left',
          offset: 0,
          axisLabel: {
            margin: 13,
            fontSize: optionData.yAfontSize,
            color: '#ffffff'
          },
          min: optionData.yAxisMin,
          max: 30,
          splitNumber: optionData.yAxisSplit,
          scale: true,
          boundaryGap: [ 0.2, 0.2 ],
          axisTick: {
            show: false,
            length: 5
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(23,76,110,.2)'
            }
          },
          axisLine: {
            show: false
          }
        }],
        series: [
        ]
      }
      options.xAxis.data = this.chartData.xAxisData
      for (var i = 0; i < optionData.legendData.length; i++) {
        var imgUrl = optionData.symbolS ? img[i] : 'none'
        var imgUrlMark = optionData.symbolMark ? img[i] : 'none'
        options.series[i] = {
          name: optionData.legendData[i],
          smooth: true,
          type: 'line',
          symbol: imgUrl,
          symbolSize: 6,
          lineStyle: {
            normal: {
              color: '#65F9FF' // 线条颜色
            }
          },
          label: {
            show: false
          },
          tooltip: {
            show: true
          },
          areaStyle: {
            normal: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(101,249,255,.5)'
                }, {
                  offset: 1, color: 'rgba(101,249,255,0)'
                }],
                global: false
              }
            }
          },
          data: optionData.seriesData[i]
        }
      }
      var divineData = optionData.seriesData[0].map((item, index) => {
        if (index < optionData.seriesData[0].length - 1) {
          return ''
        } else {
          return item
        }
      })
      var targetData = optionData.seriesData[0].map((item, index) => {
        return ''
      })
      divineData.push('23', '30')
      targetData.push('20', '30')
      options.series.push({
        name: '预测',
        smooth: true,
        type: 'line',
        symbol: 'none',
        symbolSize: 6,
        lineStyle: {
          normal: {
            color: '#ffbe00', // 线条颜色
            type: 'dotted'
          }
        },
        label: {
          show: false,
          color: '#fff',
          fontSize: '8%',
          formatter: function (params) {
            return params.value + '%'
          }
        },
        tooltip: {
          show: false
        },
        areaStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0, color: 'rgba(255,190,0,.5)'
              }, {
                offset: 1, color: 'rgba(255,190,0,0)'
              }],
              global: false
            }
          }
        },
        data: divineData
      }, {
        name: '目标',
        smooth: true,
        type: 'line',
        symbol: img[2],
        symbolSize: 6,
        lineStyle: {
          color: 'rgba(0,0,0,0)'
        },
        label: {
          show: true,
          color: '#fff',
          position: 'bottom',
          fontSize: '8%',
          formatter: function (params) {
            return '目标' + params.value + '%'
          }
        },
        tooltip: {
          show: false
        },
        areaStyle: {
          color: 'rgba(0,0,0,0)'
        },
        data: targetData
      })
      this.attestation.setOption(options)
    }
  }
}
</script>

<style scoped>
</style>
