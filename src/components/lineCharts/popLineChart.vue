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
        yAfontSize: attrSet.pageList.yAxis.fontSize || '68%',
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
      var _this = this
      var img = []
      this.attestation = this.$echarts.init(this.$refs.attestationChart)
      let options = {
        color: optionData.colorList,
        // title: [{
        //         text: '',
        //         left:'center',
        //         show:false
        // },{
        //      text: '浦东',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#35f0fe',

        //         },
        //         right:'2%',
        //         top:'47%'
        //     },{
        //      text: '宝山',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#5395d2',

        //         },
        //         right:'2%',
        //         top:'83.5%'
        //     },{
        //      text: '闵行',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#cbeef0',

        //         },
        //         right:'2%',
        //         top:'86%'
        //     },{
        //      text: '嘉定',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#ec7d31',

        //         },
        //         right:'2%',
        //         top:'79.5%'
        //     },{
        //      text: '金山',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#ffc000',

        //         },
        //         right:'2%',
        //         top:'64%'
        //     },{
        //      text: '松江',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#93d695',

        //         },
        //         right:'2%',
        //         top:'73.5%'
        //     },{
        //      text: '青浦',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#5a77e0',

        //         },
        //         right:'2%',
        //         top:'71%'
        //     },{
        //      text: '奉贤',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#ec8764',

        //         },
        //         right:'2%',
        //         top:'60.5%'
        //     },{
        //      text: '崇明',
        //      show:true,
        //         textStyle:{
        //             fontSize:'68%',
        //             color:'#8777d8',

        //         },
        //         right:'2%',
        //         top:'39%'
        //     }],
        legend: {
          show: optionData.legendShow,
          textStyle: {
            color: '#fff',
            fontSize: '68%'
          },
          icon: 'rect',
          itemHeight: 8,
          itemWidth: 8,
          itemGap: 30,
          left: 'center',
          top: '2.5%',
          borderRadius: 5
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
            return '<div class="showBox"><span style="display:block;text-align:left">' + params[0].axisValue + ' ' + optionData.xUnit + '</span>' + listItem + '</div>'
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
            fontSize: '68%'
          },
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [{
          type: 'value',
          position: 'left',
          offset: 16,
          axisLabel: {
            margin: 26,
            fontSize: '68%',
            color: '#ffffff'
          },
          min: optionData.yAxisMin,
          splitNumber: optionData.yAxisSplit,
          scale: true,
          boundaryGap: [ 0.2, 0.2 ],
          axisTick: {
            show: true
          },
          splitLine: {
            show: false
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
            }
          },
          label: {
            show: true,
            fontSize: '68%',
            formatter: function (params) {
              if (params.dataIndex == optionData.xAxisData.length - 1) {
                return params.seriesName
              } else {
                return ''
              }
            }
          },
          tooltip: {
            show: true
          },
          areaStyle: {
            show: false,
            normal: {
              color: 'rgba(0,0,0,0)'
            }
          },
          data: optionData.seriesData[i]
        }
      }
      this.attestation.setOption(options)
    }
  }
}
</script>

<style scoped>
</style>
