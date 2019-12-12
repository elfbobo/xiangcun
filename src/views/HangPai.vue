<template>
    <div class="hangpai--container">
        <div class="xuanxiangka">
            <div class="svg--container" @click="showModal">
                <svg t="1576052696483" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1873" width="200" height="200">
                    <path d="M916.48 124.16l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 143.64672 940.51328 124.16 916.48 124.16z"
                          p-id="1874" fill="#ffffff"></path>
                    <path d="M916.48 349.44l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 368.92672 940.51328 349.44 916.48 349.44z"
                          p-id="1875" fill="#ffffff"></path>
                    <path d="M916.48 574.72l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 594.20672 940.51328 574.72 916.48 574.72z"
                          p-id="1876" fill="#ffffff"></path>
                    <path d="M916.48 812.8l-583.68 0c-24.03328 0-43.52 19.48672-43.52 43.52 0 24.03328 19.48672 43.52 43.52 43.52l583.68 0c24.03328 0 43.52-19.48672 43.52-43.52C960 832.28672 940.51328 812.8 916.48 812.8z"
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
                    </div>
                </div>
            </div>

        </div>
        <div style="position: absolute;width: 10vw;height: 10vh;z-index: 9999;background: transparent"></div>
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
        name: "HangPai",
        data() {
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
        mounted() {
        },
        methods: {
            changeIframe(url) {
                if (url.length === 0) return
                this.currentURL = url
                this.showModal()
            },
            showModal() {
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
        width: 100vw;
        height: 100vh;
        position: absolute;
        background: url("../assets/images/bg.png");
    }

    .hangpai--iframe {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
    }

    .xuanxiangka {
        position: absolute;
        z-index: 10000;
        top: 1vh;
        left: 2vw;
        display: flex;
        flex-direction: column;
    }

    .svg--container {
        flex-shrink: 1;
        flex-grow: 0;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgba(3, 19, 44, 0.8);
    }

    .svg--container :hover {
        cursor: pointer;
    }

    .svg--container svg {
        width: 30px;
        height: 30px;
    }


    .xuanxiangka--card {
        position: relative;
        margin-top: 2vh;
        width: 60vh;
        height: 60vh;
        padding: 20px;
        padding-bottom: 0;
        background: rgba(3, 19, 44, 0.4);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        transition: transform 0.4s ease;
        transform-origin: top left;
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
        font-size: 25px;
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
