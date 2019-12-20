<template>
  <div v-show="isShow" class="district--modal" :class="{dfadeIn: isShow,dfadeOut: !isShow}">
    <div class="district--inner">
      <div class="dialog--close" @click="isShow = false">
        <svg t="1576823376933" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2611" width=".1rem" height=".1rem"><path d="M1004.032007 907.639505l-395.605202-395.605201 395.605202-395.673468c12.902396-12.902396 19.967993-30.037323 19.967993-48.298651 0-18.158927-7.099731-35.259722-19.93386-48.059717A67.583977 67.583977 0 0 0 955.938156 0.000341c-18.295461 0-35.430388 7.099731-48.298651 19.967994L512.000171 415.573536 116.360836 19.968335A67.720511 67.720511 0 0 0 68.164585 0.000341C49.971525 0.000341 32.87073 7.100072 19.968335 19.968335A67.549844 67.549844 0 0 0 0.000341 68.096319c0 18.227194 7.065598 35.362122 19.967994 48.264517l395.673468 395.673468L19.968335 907.605372A67.720511 67.720511 0 0 0 0.000341 955.835756c0 18.193061 7.099731 35.327988 19.967994 48.196251 12.902396 12.868262 30.00319 19.967993 48.19625 19.967993 18.193061 0 35.327988-7.099731 48.196251-19.967993l395.673468-395.605202 395.605201 395.605202c12.868262 12.868262 30.037323 19.967993 48.230384 19.967993 18.227194 0 35.293855-7.099731 48.127984-19.93386a68.266644 68.266644 0 0 0 0-96.426635z" p-id="2612" fill="#ffffff"></path></svg>

      </div>
      <div class="district--container">
        <chart-title>第一批9个</chart-title>
        <div class="district--content">
          <div v-for="(item, i) in first" :key="'first'+i" class="district--item">
            <div class="district--img">
              <img :src="item.img" alt=""/>
            </div>
            <div class="district--text">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
      <div class="district--container">
        <chart-title>第二批28个</chart-title>
        <div class="district--content">
          <div v-for="(item, i) in second" :key="'second'+i" class="district--item">
            <div class="district--img">
              <img :src="item.img" alt=""/>
            </div>
            <div class="district--text">
              {{ item.name }}
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import wufang from '@/assets/images/shijing/吴房村.jpg'
import tangwan from '@/assets/images/shijing/塘湾村.jpg'
import xiangyang from '@/assets/images/shijing/向阳村.jpg'
import yuanyi from '@/assets/images/shijing/园艺村.jpg'
import shuiku from '@/assets/images/shijing/水库村.jpg'
import lianhu from '@/assets/images/shijing/莲湖村.jpg'
import zhaoqiao from '@/assets/images/shijing/赵桥村.jpg'
import gexin from '@/assets/images/shijing/革新村.jpg'
import huangqiao from '@/assets/images/shijing/黄桥村.jpg'

import ChartTitle from './ChartTitle'
export default {
  name: 'DistrictModal',
  components: { ChartTitle },
  data: () => ({
    isShow: false,
    first: [
      {
        name: '吴房村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '塘湾村',
        img: tangwan,
        url: 'https://720yun.com/t/b1vkiwie5il?scene_id=34831695'
      },
      {
        name: '革新村',
        img: gexin,
        url: 'https://720yun.com/t/cevkul27517?scene_id=37690415'
      },
      {
        name: '水库村',
        img: shuiku,
        url: 'https://720yun.com/t/2evknlpls8e?scene_id=28657187'
      },
      {
        name: '赵桥村',
        img: zhaoqiao,
        url: 'https://720yun.com/t/4avkn9fbz17?scene_id=29738402'
      },
      {
        name: '向阳村',
        img: xiangyang,
        url: ''
      },
      {
        name: '园艺村',
        img: yuanyi,
        url: ''
      }, {
        name: '莲湖村',
        img: lianhu,
        url: ''
      }, {
        name: '黄桥村',
        img: huangqiao,
        url: ''
      }
    ],
    second: [
      {
        name: '同心村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '赵家村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '连民村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '界浜村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '长达村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '大河村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '公平村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '联一村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '海星村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '天平村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '聚源桥村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '新强村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '浦秀村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '杨王村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '沈陆村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '关港村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '南杨村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '东夏村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '新义村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '待泾村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '永乐村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '和平村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '山塘村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '张马村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '东庄村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '徐姚村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '北双村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      },
      {
        name: '新安村',
        img: wufang,
        url: ' https://720yun.com/t/zzlraaj55rim4gmwfr?from=singlemessage&isappinstalled=0&pano_id=rerl7tl98LIPQFrk'
      }
    ]
  }),
  mounted () {
    if (!this.$route.path.includes('/beautiful')) this.isShow = false
  },
  methods: {
    showModal () {
      if (!this.$route.path.includes('/beautiful')) return
      this.isShow = true
    }
  }
}
</script>

<style lang="less" scoped>
  .district--modal {
    position: absolute;
    top: 0;
    left: 4rem;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
    z-index: 10000;

    *, &, *::after, *::before {
      box-sizing: border-box;
    }
  }
  .district--inner {
    display: flex;
    flex-direction: row;
    width: calc(100% - 0.2rem);
    height: calc(100% - 0.2rem);
    margin: .1rem;
    background: rgba(3, 19, 44, 0.5);
  }

  .district--container {
    padding: .1rem;
    flex: 1 1 auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    &:first-child {
      flex: 0 1 auto;
      width: 8rem;
    }
  }

  .dialog--close {
    z-index: 1001;
    position: absolute;
    top: .1rem;
    right: .2rem;
    width: .3rem;
    height: .3rem;
    background: rgba(0,0,0, 1);
    border-radius: 50%;

    &:hover {
      cursor: pointer;
    }
  }

  .dialog--close svg {
    position: absolute;
    top: .1rem;
    left: .1rem;
  }
  .district--content {
    padding: .1rem;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    min-height: 3.6rem;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
  }

  @square-width: .85rem;
  .district--item {
    flex: 1 1 .2rem;
    padding: .2rem;
    width: @square-width;
    min-width: @square-width;
    max-width: @square-width;
    height: @square-width;
    position: relative;
    overflow: hidden;

  }

  .district--text {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 25%;
    font-size: 0.1rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(3, 19, 44, 0.5);

    &:hover {
      cursor: pointer;
    }
  }

  .district--img {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    overflow: hidden;

    img {
      position: absolute;
      left: 50%;
      top: 50%;
      max-height: 100%;
      transform: translate(-50%, -50%);
      opacity: 0.7;
    }

    &:hover {
      cursor: pointer;
    }
  }

  .dfadeIn {
    animation: fadeIn 0.6s forwards;
  }

  .dfadeOut {
    animation: fadeOut 0.6s forwards;

  }

  @keyframes fadeIn {
    0% {
      transform: translate(0, -100%);
    }
    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes fadeOut {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(0, -100%);
    }
  }

</style>
