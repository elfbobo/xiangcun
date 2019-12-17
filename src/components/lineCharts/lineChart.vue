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
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAWZJREFUKBVNkTFIglEQx+9/n5SDLUUQUlSDGEUNQVNLuAZBkBEkDQWJkFBtgUNQjW1RONQcOOTS2hC01VaRBdHkkOKQBFr6rrvsC2+5u9/9795790BtFj95iAnJNJFEiVAA4SaXGrvyJbAgfvbSK/VaVoTm/YLvAbpAZzCZW42UeFeEpVbPmxBAGYx9gBMtj7Jxq5vO6+lbTOux6zrpVbyuKdD3IJGbIfCz41Aa8mWnTbzflSsBkMyJZmDeRrO6o7E2q4lbZqpGSLk4lzcdk8ik1Tpc6FpdwuI2S/xxbZZJFqBixab30S2EUpuQLDduzHQ6GbeWNJpY8Zi3dD2flpvX1W0at9x0HAjIoa6nCciOOOlHMDjseYiZ14YB41b/1VnTwvF9Rj9jz2KdVtRH6odQVFnYGIMyudT4gbKWxbOPs865I33IkM8IeGPmjVxy9NLYv9gXLJ0+hV2jEdX7Fc7XRoo+N/8DnFSRfz4FGFwAAAAASUVORK5CYII='
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
          offset: 8,
          axisLabel: {
            margin: 13,
            fontSize: optionData.yAfontSize,
            color: '#ffffff'
          },
          min: optionData.yAxisMin,
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
      this.attestation.setOption(options)
      // setInterval(()=>{
      //     if(!this.attestation){return}
      //     this.attestation.clear()
      //     this.attestation.setOption(options)
      // },9000)
    }
  }
}
</script>

<style scoped>
</style>
