<template>
    <div>
        <div :class="classNameP" ref="probabilityChart"></div>
    </div>
</template>

<script>
export default {
  props: ['classNameP'],
  data () {
    return {
      probability: null,
      chartData: {
        colorList: [],
        xAxisData: [],
        yAxisSplit: 5,
        gridY: 0,
        lengendFont: 0,
        legendPosition: 'top',
        barWidth: 0,
        itemGap: 0,
        itemWidth: 0,
        itemHeight: 0,
        legendData: [],
        seriesData: [],
        gridYOne: 0,
        legendXPos: 'center',
        gridXTwo: 0,
        gridXOne: 0,
        tooltip: false,
        unit: '',
        xUnit: ''
      }
    }
  },
  methods: {
    init (attrSet, data) {
      this.chartData = {
        colorList: attrSet.pageList.colorList,
        legendPosition: attrSet.pageList.legend.yPos || 'top',
        yAxisSplit: attrSet.pageList.yAxis.splitNum,
        barWidth: attrSet.pageList.series.barMaxWidth || 9,
        tooltip: attrSet.pageList.tooltip.show || false,
        itemGap: attrSet.pageList.legend.itemGap || 50,
        itemWidth: attrSet.pageList.legend.itemWidth || 25,
        itemHeight: attrSet.pageList.legend.itemHeight || 10,
        gridY: attrSet.pageList.grid.yTwo || 20,
        gridYOne: attrSet.pageList.grid.yOne || 20,
        lengendFont: attrSet.pageList.legend.fontSize || '68%',
        legendXPos: attrSet.pageList.legend.xPos || 'center',
        xAxisData: data.xaxis,
        legendData: data.legend,
        seriesData: JSON.parse(JSON.stringify(data.series)),
        gridXOne: attrSet.pageList.grid.gridXOne,
        gridXTwo: attrSet.pageList.grid.gridXTwo,
        unit: attrSet.pageList.unit,
        xUnit: attrSet.pageList.xUnit
      }
      this.$nextTick(() => {
        this.drawBarChart(this.chartData)
      })
    },
    drawBarChart (optionChart) {
      this.probability = this.$echarts.init(this.$refs.probabilityChart)
      var option = {
        color: optionChart.colorList,
        tooltip: {
          show: optionChart.tooltip,
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
                optionChart.unit
              )
            }
            listItem = list.join('<br>')
            return '<div class="showBox"><span style="display:block">' + params[0].axisValue + ' ' + optionChart.xUnit + '</span>' + listItem + '</div>'
          }
        },
        toolbox: {
          show: false
        },
        legend: {
          itemGap: optionChart.itemGap,
          left: optionChart.legendXPos,
          itemHeight: optionChart.itemHeight,
          itemWidth: optionChart.itemWidth,
          icon: 'rect',
          textStyle: {
            fontSize: optionChart.lengendFont,
            color: '#ffffff'
          },
          data: optionChart.legendData,
          top: optionChart.legendPosition
        },
        grid: {
          borderWidth: 0,
          x: optionChart.gridXOne,
          y: optionChart.gridYOne,
          x2: optionChart.gridXTwo,
          y2: optionChart.gridY,
          backgroundColor: 'rgba(0,0,0,0)'
        },
        xAxis: [{
          type: 'category',
          position: 'bottom',
          boundaryGap: true,
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: true,
            margin: 8,
            interval: 0,
            formatter: '{value}',
            textStyle: {
              color: '#ffffff',
              fontFamily: 'microsoft yahei',
              fontSize: '68%',
            }
          },
          splitArea: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          data: optionChart.xAxisData
        }],
        yAxis: [{
          type: 'value',
          position: 'left',
          min: 0,
          offset: 8,
          splitNumber: optionChart.yAxisSplit,
          boundaryGap: [0.2,0.2],
          axisLine : {
            show: false
          },
          axisTick : {
            show: true
          },
          axisLabel: {
            show: true,
            margin: 13,
            formatter: '{value}',
            textStyle: {
                color: '#fff',
                fontFamily: 'microsoft yahei',
                fontSize: '68%'
            }
          },
          splitArea: {
            show: false,
            areaStyle: {
              color:['rgba(144,238,144,0)','rgba(135,200,250,0)']
            }
          },
          splitLine : {
            show:false
          }
        }],
        series: []
        };
      for(var i=0;i<optionChart.seriesData.length;i++){
        option.series[i]={
          name: optionChart.legendData[i],
          type: 'bar',
          itemStyle: {
            normal: {
              barBorderRadius:0,
              label: {
                show: false,
                position: 'top',
                textStyle: {
                  color: 'white',
                  fontSize: '68%'
                }
              }
            }
          },
          barCategoryGap: '6%',
          barMaxWidth:optionChart.barWidth,
          data:optionChart.seriesData[i]
        }
      }
      this.probability.setOption(option)
    }
  }
}
</script>

<style scoped>

</style>
