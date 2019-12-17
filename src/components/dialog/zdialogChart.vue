<template>
  <div >
      <transition>
          <dialog-base :title='title'
          :isShow='isShowDialog'
          v-show="isShowDialog"
          @close='cancelPop'
          :isFull=false
          :autoClose=autoCloseData
          >
          <div class="chart-body">
              <div class="pop-bg">
                  <div class="pop-con pop-con-left">
                      <div class="pop-chart-title">分区农业总产值</div>
                      <div class="pop-chart-view">
                          <div class="pop-chart-unit">(亿元)</div>
                          <line-chart ref="lineChartPop" :width='popWidth' :height='popHeight'></line-chart>
                      </div>
                  </div>
                  <div class="pop-con pop-con-right">
                        <div class="pop-chart-title">分区分行业农业总产值<span>(2017)</span></div>
                        <div class="pop-chart-view">
                            <div class="pop-chart-unit">(亿元)</div>
                            <barchart ref="barChartPop" :classNameP="popBarClass"></barchart>
                        </div>
                  </div>
              </div>
          </div>
          </dialog-base>
      </transition>
      <transition><dialog-mark :isShow='isShowDialog' v-show="isShowDialog"></dialog-mark></transition>
  </div>
</template>

<script>
import DialogBase from '@/components/dialog/zdialogbase'
import DialogMark from '@/components/dialog/dialoMark'
import LineChart from '@/components/lineCharts/popLineChart'
import Barchart from '@/components/barCharts/barChartPop'
export default {
  data () {
    return {
      title: '',
      src: 'https://www.baidu.com',
      isShowDialog: false,
      autoCloseData: false,
      popWidth: '6.5rem',
      popHeight: '6.8rem',
      popAttr: {
        pageList: {}
      },
      popBarAttr: {
        pageList: {}
      },
      popBarClass: 'popBarClass'
    }
  },
  components: {
    DialogBase,
    DialogMark,
    Barchart,
    LineChart
  },
  methods: {
    init () {
      this.isShowDialog = true
      this.linePopChart()
      this.barPopChart()
    },
    cancelPop () {
      this.isShowDialog = false
    },
    linePopChart () {
      this.$set(this.popAttr, 'pageList', {
        colorList: ['#35f0fe', '#5395d2', '#cbeef0', '#ec7d31', '#ffc000', '#93d695', '#5a77e0', '#ec8764', '#8777d8'],
        legend: { show: true },
        unit: '亿元',
        xUnit: '年',
        grid: { xPos: '8%', yPos: '13%', xPosR: '7%', yPosB: '10.5%' },
        yAxis: { min: 0, max: 15 },
        series: { symbol: false, symbolMark: false }
      })
      var dataList = {
        legend: ['浦东', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明'],
        series: [
          [68.98, 65.1, 59.44, 53.07, 47.97],
          [5.77, 5.55, 4.88, 4.07, 3.15],
          [4, 3.67, 3.64, 3.59, 2.86],
          [12.88, 12.21, 11.24, 11.13, 10.06],
          [35.9, 35.6, 34.9, 30.89, 28.23],
          [21.59, 21.84, 21.64, 19.74, 17.09],
          [24.54, 23.75, 22.8, 21.09, 20.01],
          [45.93, 43.4, 41.59, 40.4, 32.82],
          [61.05, 62.37, 60.06, 58.86, 57.32]
        ],
        xaxis: ['2013', '2014', '2015', '2016', '2017']
      }
      this.$refs.lineChartPop.init(this.popAttr, dataList)
    },
    barPopChart () {
      this.$set(this.popBarAttr, 'pageList', {
        colorList: ['#35f1ff', '#5396d3', '#cceff1', '#ed7d31', '#ffbe00'],
        tooltip: { show: true },
        unit: '亿元',
        xUnit: '',
        legend: {
          itemGap: 35,
          itemWidth: 8,
          itemHeight: 8,
          yPos: '3%',
          xPos: 'center'
        },
        grid: {
          yOne: '13.5%',
          yTwo: '10%',
          gridXOne: '8%',
          gridXTwo: '5%'
        },
        yAxis: { min: 0, max: 150, splitNum: 4 },
        series: {
          barMaxWidth: 10
        }
      })
      var dataList = {
        legend: ['种植业', '林业', '牧业', '渔业', '农林牧渔服务业'],
        series: [
          [31.78, 2.41, 2.47, 7.7, 17.78, 7.94, 13.13, 19.17, 27.16],
          [2.5, 0.13, 0.17, 0.24, 0.97, 2.84, 0.61, 1.4, 5.57],
          [2.24, 0.15, 0.03, 0.69, 6.27, 4.21, 1.08, 5.41, 9.56],
          [7.61, 0.14, 0.05, 0.7, 2.2, 0.89, 4.45, 5.64, 12.88],
          [3.84, 0.32, 0.14, 0.73, 1.01, 1.21, 0.74, 1.2, 2.15]
        ],
        xaxis: ['浦东', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明']
      }
      this.$refs.barChartPop.init(this.popBarAttr, dataList)
    }
  }
}
</script>

<style scoped>
  .chart-body{width:100%;height: 100%;font-size: .2rem;color:rgba(255,255,255,.7);text-align: center;box-sizing: border-box;padding-top:.2rem;}
  /* .pop-bg{position: absolute;left:0;top:0;bottom:0;right: 0; background: url(../../assets/images/echarts-popup.png) no-repeat;background-size: 100% auto;} */
  .chart-body img{width:100%;}
  .pop-bg{padding-top:.62rem;}
  .pop-con-left{padding-left:.5rem;float:left;}
  .pop-con-right{float:right;padding-right:.5rem;}
  /* .pop-chart-title{background: url(../../assets/images/pop-title-bg.png) no-repeat;background-size:4.78rem .33rem;width:4.78rem;height: .33rem;font-size: .2rem;line-height: .33rem;margin:0 auto;position: relative;} */
  .pop-chart-title span{position: absolute;font-size: .15rem;right:.2rem;top:0rem;}
  .pop-chart-view{position: relative;}
  .pop-chart-unit{position:absolute;font-size: .133rem;text-align: left;top:.6rem;}
</style>
