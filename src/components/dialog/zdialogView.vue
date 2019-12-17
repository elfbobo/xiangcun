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
                <div class="view-title clearfix">
                    <h4>{{maptitle}}简介</h4>
                    <ul>
                        <li @click='clickIndex=1' :class="{active:clickIndex==1}" v-if='videoShow'>航拍乡村振兴({{maptitle}}篇)</li>
                        <li @click='clickIndex=2' :class="{active:clickIndex==2}">乡村振兴示范村创建前后</li>
                    </ul>
                </div>
                <div class="view-tab-list">
                    <div class="view-tab-line" style="overflow:hidden" v-show='clickIndex==1' v-if='videoShow'>
                    <!-- <video :src="videoUrl" ref='isReplay' type="video/mp4" autoplay width="100%" muted="muted"  ></video> -->
                        <iframe :src="iframeUrl" width='100%' name="popInnerPage" height="100%"  scrolling="no" frameborder="0"></iframe>
                    </div>
                    <div class="view-tab-line clearfix" v-show='clickIndex==2'>
                        <div class="view-description">
                             {{dataDesc}}
                        </div>
                        <div class="view-ratio">
                            <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide clearfix" v-for="(item,index) in imgUrlData" :key='index'>
                                    <div class="view-left-img view-top-img"><div class="beforeMark">创建前</div><img :src="require('@/assets/images/'+item.before)" alt=""></div>
                                    <div class="view-left-img"><div class="afterMark">创建后</div><img :src="require('@/assets/images/'+item.after)" alt=""></div>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
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
import Swiper from 'swiper'
export default {
  data () {
    return {
      title: '',
      src: 'https://www.baidu.com',
      isShowDialog: false,
      autoCloseData: false,
      clickIndex: 2,
      maptitle: '',
      videoUrl: '',
      dataDesc: '',
      imgUrlData: [],
      iframeUrl: '',
      startIndex: 0,
      videoShow: false,
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
        autoplay: {
          delay: 6000,
          stopOnLastSlide: false,
          disableOnInteraction: true
        },
        speed: 500,
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
    init (data, imgUrl, showIndex, activeIndex) {
      this.maptitle = data.name
      this.videoShow = data.videoShow
      //   if(data.videoShow){
      //        this.videoUrl=require('../../../static/'+data.id+'_hp.mp4');
      //   }
      //  if(!!this.$refs.isReplay){
      //      this.$refs.isReplay.currentTime=0;
      //      this.$refs.isReplay.play();
      //  }
      this.dataDesc = data.mapDesc
      this.imgUrlData = imgUrl

      this.isShowDialog = true
      this.iframeUrl = data.iframeUrl
      this.clickIndex = showIndex
      this.mySwiper.activeIndex = activeIndex
    },
    cancelPop () {
      this.isShowDialog = false
      // if(!!this.$refs.isReplay){
      //      this.$refs.isReplay.pause();
      // }
    }
  }
}
</script>

<style scoped>
    .chart-body{width:100%;height: 100%;font-size: .2rem;color:rgba(255,255,255,.7);text-align: center;}
    .chart-body img{width:100%;font-size: 0;line-height: 0;display: block;text-align: center;margin:0 auto;}
</style>
