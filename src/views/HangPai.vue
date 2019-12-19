<template>
  <div class="hangpai--container">
    <div class="xuanxiangka">
      <div class="svg--container" @click.capture="showModal">
        <svg @click.capture="clicked" t="1576722352193" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="3219" width="200" height="200">
          <path
            d="M512.546 86.050c0 0-12.561-0.546-24.030 7.1-12.015 8.192-462.029 380.109-462.029 380.109s-32.768 25.668 2.731 70.997 74.82 3.823 74.82 3.823l407.962-359.356 414.515 364.817c0 0 36.591 30.583 70.451-11.469 33.86-42.598-3.277-72.090-3.277-72.090l-121.242-99.942v-175.309h-164.932v39.868l-168.209-139.81c0 0-10.923-9.83-26.761-8.738z"
            p-id="3220" fill="#ffffff"></path>
          <path
            d="M512.546 241.152l-410.146 357.171v300.919l333.141 0.546v-246.306l152.917 1.638v244.122l333.141 0.546v-300.919z"
            p-id="3221" fill="#ffffff"></path>
        </svg>

        <span>乡村振兴航拍</span>
        <svg t="1576052696483" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg" p-id="1873" width="200" height="200">
          <path
            d="M916.48 124.16l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 143.64672 940.51328 124.16 916.48 124.16z"
            p-id="1874" fill="#ffffff"></path>
          <path
            d="M916.48 349.44l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 368.92672 940.51328 349.44 916.48 349.44z"
            p-id="1875" fill="#ffffff"></path>
          <path
            d="M916.48 574.72l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 594.20672 940.51328 574.72 916.48 574.72z"
            p-id="1876" fill="#ffffff"></path>
          <path
            d="M916.48 812.8l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 832.28672 940.51328 812.8 916.48 812.8z"
            p-id="1877" fill="#ffffff"></path>
          <path d="M105.80992 167.68m-43.52 0a4.25 4.25 0 1 0 87.04 0 4.25 4.25 0 1 0-87.04 0Z" p-id="1878"
                fill="#ffffff"></path>
          <path d="M105.80992 392.96m-43.52 0a4.25 4.25 0 1 0 87.04 0 4.25 4.25 0 1 0-87.04 0Z" p-id="1879"
                fill="#ffffff"></path>
          <path d="M105.80992 618.24m-43.52 0a4.25 4.25 0 1 0 87.04 0 4.25 4.25 0 1 0-87.04 0Z" p-id="1880"
                fill="#ffffff"></path>
          <path d="M105.80992 856.32m-43.52 0a4.25 4.25 0 1 0 87.04 0 4.25 4.25 0 1 0-87.04 0Z" p-id="1881"
                fill="#ffffff"></path>
        </svg>
      </div>

      <div ref="card" class="xuanxiangka--card">
        <div class="xuanxiangka--image" v-for="(item,i) in villages" :key="i" @click="changeIframe(item.url)">
          <div class="img--container">
            <img :src="item.img" alt=""/>
          </div>
          <div class="xuangxiangka--text">
            {{ item.name }}
            <svg v-if="item.url" style="padding-left: 10px" t="1576736324834" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2121" width="30" height="30"><path d="M865.52064 972.8s-172.40064-35.84-346.88-35.84c-178.74944 0-359.68 35.84-359.68 35.84a108.544 108.544 0 0 1-107.52-108.17024V158.63296a107.904 107.904 0 0 1 107.52-107.43296s181.8112 41.06752 360.96 41.17504c173.98272 0.1024 345.46176-40.71936 345.46176-40.71936a107.1616 107.1616 0 0 1 107.10528 106.97728v705.9968A108.06784 108.06784 0 0 1 865.52064 972.8z m56.32-353.28V158.72c0-27.52-28.76416-56.32-56.32-56.32 0 0-169.87648 36.69504-343.04 36.69504-179.98848 0-363.52-36.69504-363.52-36.69504-27.55584 0-61.44 28.8-61.44 56.32l4.15744 573.91616 149.44256-137.3184a28.60032 28.60032 0 0 1 36.10112-2.10944l162.72896 117.76 234.53696-241.18784a28.57472 28.57472 0 0 1 20.43904-8.6528h0.05632a28.5952 28.5952 0 0 1 20.41856 8.576l196.43904 200.50432V619.52z m0 131.84a27.94496 27.94496 0 0 1-2.29888-1.91488l-214.48192-218.91072-231.3472 237.91104a28.59008 28.59008 0 0 1-37.25312 3.2256l-163.84-118.56384-169.30816 155.5712c-0.33792 0.31232-0.72704 0.512-1.0752 0.81408L102.64064 865.28c0 27.52 28.76416 56.32 56.32 56.32 0 0 173.24544-31.57504 348.16-31.57504 178.3296 0 358.4 31.57504 358.4 31.57504 27.55584 0 56.32-28.8 56.32-56.32v-113.92zM811.5712 773.12a28.50816 28.50816 0 0 1-20.41856-8.576l-10.496-10.71104a28.55936 28.55936 0 0 1 40.83712-39.936l10.496 10.70592A28.53888 28.53888 0 0 1 811.5712 773.12z m-84.80256-77.15328l-20.74112-21.1712-102.18496 105.088a28.55424 28.55424 0 0 1-40.99072-39.7568l122.60864-126.08a28.57984 28.57984 0 0 1 20.43392-8.65792h0.05632a28.58496 28.58496 0 0 1 20.41856 8.576l41.23136 42.0864a28.54912 28.54912 0 0 1-40.832 39.91552zM778.96192 163.84a40.51968 40.51968 0 1 1-40.47872 40.5248A40.33024 40.33024 0 0 1 778.96192 163.84z m0 54.03136a11.93472 11.93472 0 0 0 13.4912-13.50656 11.9296 11.9296 0 0 0-13.4912-13.51168 14.36672 14.36672 0 0 0-13.49632 13.51168 11.93472 11.93472 0 0 0 13.49632 13.50656zM613.85216 455.68c-44.9792 0-80.95744-27.01824-80.95744-76.544V271.07328c0-49.52576 40.47872-76.53888 80.95744-76.53888s76.46208 27.01312 76.46208 76.544v108.05248c0 49.53088-35.98336 76.54912-76.46208 76.54912z m31.50848-184.60672c0-22.528-13.49632-36.0192-31.488-36.0192s-31.488 13.50656-31.488 36.0192v108.0576c0 22.528 13.49632 36.0192 31.488 36.0192s31.488-13.50656 31.488-36.0192V271.07328zM429.44512 455.68c-44.9792 0-80.96256-31.51872-80.96256-81.0496 0-22.528 8.99584-45.02528 22.49216-67.53792l53.97504-112.5632H478.9248L424.94976 302.592c4.49536-4.5056 13.4912-4.5056 17.99168-4.5056 35.98336 0 67.46624 27.01824 67.46624 76.544S474.4192 455.68 429.44512 455.68z m0-117.0688c-22.49216 0-35.98336 13.51168-31.488 36.0192 0 22.528 13.4912 36.0192 31.488 36.0192s31.48288-13.50656 31.48288-36.0192-13.4912-36.0192-31.48288-36.0192z m-103.424 40.5248C326.00064 428.66176 290.03264 455.68 245.03808 455.68c-40.47872 0-80.95744-22.528-80.95744-76.54912h44.9792c0 22.528 17.99168 31.51872 35.97824 31.51872 22.49216 0 35.98336-13.50656 35.98336-36.0192s-13.4912-36.0192-35.98336-36.0192h-8.99584V298.0864h13.4912c22.49216 0 31.488-13.50656 31.488-31.5136 0-22.528-13.4912-31.51872-31.488-31.51872a30.76096 30.76096 0 0 0-31.48288 31.51872h-44.97408c0-45.02528 31.48288-72.0384 76.45696-72.0384s76.46208 27.01312 76.46208 72.0384c0 27.01824-13.49632 45.02528-31.48288 54.03136 17.99168 9.00096 31.488 27.008 31.488 58.52672z" p-id="2122" fill="#ffffff"></path></svg>

          </div>
        </div>
      </div>

    </div>
    <!--        <div style="position: absolute;width: 6%;height: 8%;z-index: 9999;background: rgba(3, 19, 44, 1);"></div>-->
    <iframe class="hangpai--iframe"
            :src="currentURL"></iframe>
  </div>
</template>

<script>
import wufang from '../assets/images/shijing/吴房村.jpg'
import tangwan from '../assets/images/shijing/塘湾村.jpg'
import xiangyang from '../assets/images/shijing/向阳村.jpg'
import yuanyi from '../assets/images/shijing/园艺村.jpg'
import shuiku from '../assets/images/shijing/水库村.jpg'
import lianhu from '../assets/images/shijing/莲湖村.jpg'
import zhaoqiao from '../assets/images/shijing/赵桥村.jpg'
import gexin from '../assets/images/shijing/革新村.jpg'
import huangqiao from '../assets/images/shijing/黄桥村.jpg'

export default {
  name: 'HangPai',
  data () {
    const villages = [
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
    ]

    return {
      showCard: false,
      currentURL: villages[0].url,
      villages
    }
  },
  mounted () {
  },
  methods: {
    changeIframe (url) {
      if (url.length === 0) return
      this.currentURL = url
      this.showModal()
    },
    clicked () {
      console.log('clicked')
      this.$router.push('/beautiful')
    },
    showModal () {
      this.showCard = !this.showCard
      if (this.showCard) {
        this.$refs.card.style.transform = 'scale(1,1)'
      } else {
        this.$refs.card.style.transform = 'scale(0,0)'
      }
    }
  }
}
</script>

<style scoped>
  .hangpai--container, .hangpai--container * {
    color: white;
    box-sizing: border-box;
  }

  .hangpai--container {

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 4.5rem;
    position: fixed;
    background: url("../assets/images/bg.png");
  }

  .hangpai--iframe {
    position: relative;
    margin: 0;
    padding: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .xuanxiangka {
    position: absolute;
    z-index: 10000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
  }

  .svg--container {
    flex-shrink: 1;
    flex-grow: 0;
    width: 10vw;
    height: 3vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 2px 2px 10px black;
    border-bottom-right-radius: 0.8vw;
    background: #1b2a49;
  }

  .svg--container span {
    font-size: 0.8vw;
  }

  .svg--container :hover {
    cursor: pointer;
  }

  .svg--container svg {
    width: 1vw;
  }

  .xuanxiangka--card {
    position: relative;
    margin-top: 1vw;
    margin-left: 1vw;
    width: 15vw;
    height: 15vw;
    padding: 0.4vw;
    padding-bottom: 0;
    background: rgba(3, 19, 44, 0.6);
    border-radius: 0.3vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    transition: transform 0.4s ease;
    transform-origin: top;
    transform: scale(0, 0);
  }

  .xuanxiangka--image {
    box-sizing: border-box;
    flex: 1 1 30%;
    padding: 20px;

    max-height: 30%;
    position: relative;
    overflow: hidden;
  }

  .xuanxiangka--image:hover {
    cursor: pointer;
  }

  .xuangxiangka--text {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 25%;
    font-size: 0.5vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(3, 19, 44, 0.5);
  }

  .img--container img {
    position: absolute;
    left: 50%;
    top: 50%;
    max-height: 100%;
    transform: translate(-50%, -50%);
    opacity: 0.7;

  }

  .img--container {
    position: absolute;
    top: 10px;
    left: 10px;
    right: 10px;
    bottom: 10px;
    overflow: hidden;

  }
</style>
