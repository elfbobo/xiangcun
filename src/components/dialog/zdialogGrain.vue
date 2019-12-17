<template>
    <div >
        <transition>
            <dialog-base :title='title'
            :isShow='isShowDialog'
            v-show="isShowDialog"
            @close='cancelPop'
            :isFull=false
            ref='grainBase'
            :autoClose=autoCloseData
            >
            <div class="chart-body">
               <div class="total-ratio">
                    <div class="swiper-container">
                    <div class="swiper-wrapper">
                            <div class="swiper-slide clearfix">
                                <div class="total-ratio-box">
                                    <div class="slide-mark top-left"><img src="../../assets/images/left-top-mark.png" alt=""></div>
                                    <div class="slide-mark top-right"><img src="../../assets/images/right-top-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-left"><img src="../../assets/images/left-bottom-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-right"><img src="../../assets/images/right-bottom-mark.png" alt=""></div>
                                    <div class="total-ratio-pannel clearfix">
                                        <div class="total-ratio-data">
                                            <div class="total-ratio-title">
                                                <h4>粮食生产功能区</h4>
                                            </div>
                                            <div class="total-ratio-list">
                                                <ul class="clearfix">
                                                    <li v-for='(item,index) in lsgnData' :key='index'><span>{{item.label}}</span><em>{{item.value}} <i>万亩</i></em></li>
                                                </ul>
                                            </div>
                                            <div class="total-count">
                                                <span>总计</span><em>{{lsgnTotal}} <i>万亩</i></em>
                                            </div>
                                        </div>
                                        <div class="total-ratio-img">
                                            <img src="@/assets/images/lsgn-img.png" alt="">
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div class="swiper-slide clearfix">
                               <div class="total-ratio-box">
                                    <div class="slide-mark top-left"><img src="../../assets/images/left-top-mark.png" alt=""></div>
                                    <div class="slide-mark top-right"><img src="../../assets/images/right-top-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-left"><img src="../../assets/images/left-bottom-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-right"><img src="../../assets/images/right-bottom-mark.png" alt=""></div>
                                    <div class="total-ratio-pannel clearfix">
                                        <div class="total-ratio-data">
                                            <div class="total-ratio-title">
                                                <h4>蔬菜生产保护区</h4>
                                            </div>
                                            <div class="total-ratio-list">
                                                <ul class="clearfix">
                                                   <li v-for='(item,index) in scbhData' :key='index'><span>{{item.label}}</span><em>{{item.value}} <i>万亩</i></em></li>
                                                </ul>
                                            </div>
                                            <div class="total-count">
                                                <span>总计</span><em>{{scbhTotal}} <i>万亩</i></em>
                                            </div>
                                        </div>
                                        <div class="total-ratio-img">
                                            <img src="@/assets/images/scbh-img.png" alt="">
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div class="swiper-slide clearfix">
                               <div class="total-ratio-box">
                                    <div class="slide-mark top-left"><img src="../../assets/images/left-top-mark.png" alt=""></div>
                                    <div class="slide-mark top-right"><img src="../../assets/images/right-top-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-left"><img src="../../assets/images/left-bottom-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-right"><img src="../../assets/images/right-bottom-mark.png" alt=""></div>
                                    <div class="total-ratio-pannel clearfix">
                                        <div class="total-ratio-data">
                                            <div class="total-ratio-title">
                                                <h4>特色农产品优势区</h4>
                                            </div>
                                            <div class="total-ratio-list">
                                                <ul class="clearfix">
                                                    <li v-for='(item,index) in tsysData' :key='index'><span>{{item.label}}</span><em>{{item.value}} <i>万亩</i></em></li>
                                                </ul>
                                            </div>
                                            <div class="total-count">
                                                <span>总计</span><em>{{tsysTotal}} <i>万亩</i></em>
                                            </div>
                                        </div>
                                        <div class="total-ratio-img">
                                            <img src="@/assets/images/tsgn-img.png" alt="">
                                        </div>
                                    </div>
                               </div>
                            </div>
                            <div class="swiper-slide clearfix">
                               <div class="total-ratio-box">
                                    <div class="slide-mark top-left"><img src="../../assets/images/left-top-mark.png" alt=""></div>
                                    <div class="slide-mark top-right"><img src="../../assets/images/right-top-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-left"><img src="../../assets/images/left-bottom-mark.png" alt=""></div>
                                    <div class="slide-mark bottom-right"><img src="../../assets/images/right-bottom-mark.png" alt=""></div>
                                    <div class="total-ratio-pannel clearfix">
                                        <div class="total-ratio-data">
                                            <div class="total-ratio-title">
                                                <h4>养殖水域滩涂规划</h4>
                                            </div>
                                            <div class="total-ratio-list">
                                                <ul class="clearfix">
                                                    <li v-for='(item,index) in yyData' :key='index'><span>{{item.label}}</span><em>{{item.value}} <i>万亩</i></em></li>
                                                </ul>
                                            </div>
                                            <div class="total-count">
                                                <span>总计</span><em>{{yyTotal}} <i>万亩</i></em>
                                            </div>
                                        </div>
                                        <div class="total-ratio-img">
                                            <img src="@/assets/images/yy-img.png" alt="">
                                        </div>
                                    </div>
                               </div>
                            </div>
                        </div>

                    </div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
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
import Swiper from 'swiper'
export default {
  data () {
    return {
      title: '',
      src: 'https://www.baidu.com',
      isShowDialog: false,
      autoCloseData: false,
      lsgnData: [],
      lsgnTotal: 0,
      scbhData: [],
      scbhTotal: 0,
      tsysData: [],
      tsysTotal: 0,
      yyData: [],
      yyTotal: 0,
      mySwiper: null
    }
  },
  components: {
    DialogBase,
    DialogMark
  },
  mounted () {
    this.$nextTick(() => {
      this.mySwiper = new Swiper('.swiper-container', {
        autoplay: false,
        // autoplay: {
        // delay: 6000,
        // stopOnLastSlide: false,
        // disableOnInteraction: false,
        // },
        speed: 500,
        initialSlide: 0,
        freeMode: false,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    })
  },
  methods: {
    init (val) {
      this.isShowDialog = true
      this.mySwiper.activeIndex = val
      // this.$refs.grainBase.init({left:'30%',right:'30%'})
      this.getData()
    },
    cancelPop () {
      this.isShowDialog = false
    },
    getSum (total, num) {
      return parseFloat(total) + parseFloat(num)
    },
    getData () {
      this.lsgnData = [{
        label: '浦东',
        value: '8.06'
      }, {
        label: '宝山',
        value: '0.28'
      }, {
        label: '闵行',
        value: '0.83'
      }, {
        label: '嘉定',
        value: '4.01'
      }, {
        label: '金山',
        value: '12.50'
      }, {
        label: '松江',
        value: '10.25'
      }, {
        label: '青浦',
        value: '8.11'
      }, {
        label: '奉贤',
        value: '8.00'
      }, {
        label: '崇明',
        value: '28.35'
      }]
      // var lsgnArr=this.lsgnData.map(item=>item.value)
      // this.lsgnTotal=lsgnArr.reduce((num1,num2)=>{
      //     return parseFloat(num1)+parseFloat(num2)
      // })

      this.lsgnTotal = 80.37

      this.scbhData = [{
        label: '浦东',
        value: '8.34'
      }, {
        label: '宝山',
        value: '0.73'
      }, {
        label: '闵行',
        value: '1.13'
      }, {
        label: '嘉定',
        value: '2.32'
      }, {
        label: '金山',
        value: '4.70'
      }, {
        label: '松江',
        value: '2.06'
      }, {
        label: '青浦',
        value: '6.81'
      }, {
        label: '奉贤',
        value: '8.50'
      }, {
        label: '崇明',
        value: '15.60'
      }]

      this.scbhTotal = 50.18

      this.tsysData = [{
        label: '浦东',
        value: '1.02'
      }, {
        label: '嘉定',
        value: '0.45'
      }, {
        label: '金山',
        value: '1.21'
      }, {
        label: '松江',
        value: '0.36'
      }, {
        label: '青浦',
        value: '0.82'
      }, {
        label: '奉贤',
        value: '0.97'
      }, {
        label: '崇明',
        value: '2.27'
      }]

      this.tsysTotal = 7.1

      this.yyData = [{
        label: '浦东',
        value: '1.48'
      }, {
        label: '宝山',
        value: '0.09'
      }, {
        label: '闵行',
        value: '0.1'
      }, {
        label: '嘉定',
        value: '0.2'
      }, {
        label: '金山',
        value: '1.31'
      }, {
        label: '松江',
        value: '0.88'
      }, {
        label: '青浦',
        value: '2.38'
      }, {
        label: '奉贤',
        value: '2.35'
      }, {
        label: '崇明',
        value: '7.77'
      }]
      this.yyTotal = 16.56
    }
  }
}
</script>

<style scoped>
    .chart-body{width:100%;height: 100%;font-size: .2rem;color:rgba(255,255,255,.7);text-align: center;box-sizing: border-box;padding-top:.1rem;}
    .chart-body img{width:100%;font-size: 0;line-height: 0;display: block;text-align: center;margin:0 auto;}
    .total-ratio{width:95%;margin:.25rem auto;}
    .swiper-button-prev, .swiper-container-rtl .swiper-button-next{left:.5rem;}
    .swiper-button-next, .swiper-container-rtl .swiper-button-prev{right:.5rem}
</style>
