<template>
    <div>
        <div class="attestation" ref="attestationChart" :style={width:elWidth,height:elHeight}></div>
        <el-dialog-page ref="serverUserDialog"></el-dialog-page>
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
        legendShow: false,
        gridXT: 0,
        gridYL: 0,
        gridXB: 0,
        gridYR: 0,
        symbolS: false,
        unit: [],
        xUnit: ''
      },
      elWidth: '',
      elHeight: ''
    }
  },
  components: {
    ElDialogPage
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
  methods: {
    init (attrSet, data) {
      this.chartData = {
        colorList: attrSet.pageList.colorList,
        yAxisSplit: attrSet.pageList.yAxis.splitNum || 3,
        legendShow: attrSet.pageList.legend.show || false,
        gridXT: attrSet.pageList.grid.xPos || '14%',
        gridYL: attrSet.pageList.grid.yPos || '8%',
        gridXB: attrSet.pageList.grid.xPosR || '6%',
        gridYR: attrSet.pageList.grid.yPosB || '19%',
        symbolS: attrSet.pageList.series.symbol,
        symbolMark: attrSet.pageList.series.symbolMark,
        legendData: data.legend,
        xAxisData: data.xaxis,
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
    openServerUser (url) {
      this.$nextTick(() => {
        if (!this.attestation) {
          return
        }
        var _this = this
        this.attestation.getZr().on('click', function () {
          _this.$refs.serverUserDialog.init(url)
        })
      })
    },
    singleLineChart (optionData) {
      var img = [
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAVlJREFUKBVNUbFOQkEQnD1RTAwYiTZEE40FVnZSSGigMjT6A7ZaYKKlCYWJsbTSQr9CGzqxIVgQPkAKiRWFGIgQiqfy1tmnT9hmbnbmbueygolKDzSnQEZ8pNShKUCtHpPH0EIOZAe65CluVbEXCiGK4C4qOKjGpCNnqq48QBWKbQjeneLGn8KzG2HDFxyyv8j+UyGGrCv3UQyMQIumTY5/kxF2DI1zQst080n6Qx+YM+8Eu4yR5/noPwJwxRgVX3HPvBUzd2lYiMaR+Ozjxc4T5t5MHOteH12ae4yIrom+hwSzdUJjgORBn8R8jtgw4cvDvihOeBwaZw350rH1fykabjqCS+Ya8dVTOCzPOqw5h5whP7lifdMDn93aGmgJPs6DFwRt5mtybIqzk9YThxKXcxEsxRr8aIFwTdOqcSuKr4RifV7Kf9xgXJmhJr+57gjXXZuT9lgBfgB7Fn8YCYOrVQAAAABJRU5ErkJggg==',
        'image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDE5LTEyLTEzVDE2OjQ3OjQ3KzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAxOS0xMi0xM1QxNjo0ODoyNyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0xMi0xM1QxNjo0ODoyNyswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMzEyMjNmYS03YjkwLTQzNGItYTdhMC00MzhiNWJmNzFlY2UiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDMxMjIzZmEtN2I5MC00MzRiLWE3YTAtNDM4YjViZjcxZWNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MDMxMjIzZmEtN2I5MC00MzRiLWE3YTAtNDM4YjViZjcxZWNlIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowMzEyMjNmYS03YjkwLTQzNGItYTdhMC00MzhiNWJmNzFlY2UiIHN0RXZ0OndoZW49IjIwMTktMTItMTNUMTY6NDc6NDcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz69bLxkAAABBUlEQVQokWXRsS4EARAG4G83+wKE4jYkREHlAYiGZBPR8AJaipNQSnSiVFHwFDSKu6ARKg/gCqLawsmprrqTVZhNLvzNP/PPZDIzf1JVlRrDdr6KZcyjg8esKO/relJVlWE7n8QltvzHFXayouwmg1YjxQOW8IkLvGABu5jAE1ZSNKPxDYv4wHrwYuhLaCaDVuMWa9gM3htZ4Qx3uMZdMmg1ehjDOF4jrvGFOfTwlUYgmrt/juuGDr0Uz5Fs4wD9yPvYDx2eU5ziG4eYwixWg6dD/8Zp/ecjHMeE0q8h88hDO8qK8iSpHRy28w2cY2Zk53c0s6K8IRwcxbCd5zG1kxVlOVr7AfwbVE751AI7AAAAAElFTkSuQmCC'
      ]
      this.attestation = this.$echarts.init(this.$refs.attestationChart)
      let options = {
        color: optionData.colorList,
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
                                optionData.unit[i]
              )
            }
            listItem = list.join('<br>')
            return '<div class="showBox"><span style="display:block">' + params[0].axisValue + ' ' + optionData.xUnit + '</span>' + listItem + '</div>'
          }
        },
        title: {
          show: false
        },
        legend: {
          show: optionData.legendShow,
          icon: 'circle',
          itemGap: 50,
          itemWidth: 8,
          itemHeight: 8,
          top: '3%',
          left: 'center',
          textStyle: {
            color: '#ffffff',
            fontSize: '8%'
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
          data: optionData.xAxisData,
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
            color: '#ffffff',
            fontSize: '8%'
          },
          min: 0,
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
        }, {
          type: 'value',
          position: 'right',
          offset: 0,
          axisLabel: {
            margin: 13,
            fontSize: '8%',
            color: '#ffffff'
          },
          min: 0,
          splitNumber: optionData.yAxisSplit,
          scale: true,
          boundaryGap: [ 0.2, 0.2 ],
          axisTick: {
            show: false,
            length: 5
          },
          splitLine: {
            show: false,
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
      for (var i = 0; i < optionData.legendData.length; i++) {
        var imgUrl = optionData.symbolS ? img[i] : 'none'
        var imgUrlMark = optionData.symbolMark ? img[i] : 'none'
        options.series[i] = {
          name: optionData.legendData[i],
          smooth: true,
          symbol: imgUrl,
          symbolSize: 6,
          type: 'line',
          yAxisIndex: [i],
          showAllSymbol: true,
          lineStyle: {
            normal: {
            }
          },
          markPoint: {
            symbol: imgUrlMark,
            symbolSize: 6
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
                }, {
                  offset: 0, color: 'rgba(251,185,25,.5)'
                }, {
                  offset: 1, color: 'rgba(251,185,25,0)'
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
      // },10000)
    }
  }
}
</script>

<style scoped>
</style>
