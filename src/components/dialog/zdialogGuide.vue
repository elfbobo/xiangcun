<template>
    <div>
        <transition>
            <dialog-base :title='title'
            :isShow='isShowDialog'
            v-show="isShowDialog"
            @close='cancelPop'
            :isFull=true
            :key='1'
            :autoClose='autoCloseData'
            :closeShow='closeShowData'
            >
            <div class="guide-box">
                <!-- <show-index-page ref="showIndexPage"></show-index-page> -->
            </div>
            </dialog-base>
        </transition>
    </div>
</template>

<script>
    import DialogBase from '@/components/dialog/zdialogbase'
    // import ShowIndexPage from '@/views/home'
    export default {
        data() {
            return {
                title: '',
                isShowDialog:false,
                closeShowData:true,
                autoCloseData:false,
                isShowInfo:false,
                isShowPop:false
            }
        },
        components:{
            DialogBase,
            // ShowIndexPage
        },
        methods: {
            init(closeShow,autoClose,autoPlay,shows) {
                this.closeShowData=closeShow;
                this.autoCloseData=autoClose;
                this.isShowDialog=shows;
                this.$refs.showIndexPage.$refs.videoElements.playVideo()

            },
            cancelPop(){
                this.isShowDialog=false;
                this.$refs.showIndexPage.$refs.videoElements.stopVideo()
            },
            showPop(){
                this.isShowPop=true;
                this.isShowInfo=true;
            },
            hidePop(){
                this.isShowInfo=false;
                setTimeout(()=>{
                    this.isShowPop=false;
                },600)

            }
        },
    }
</script>

<style scoped>
    .guide-pop-box{opacity:0;top:2rem;}
    .guide-pop-box.fadeIn{animation: dialogScaleShow .6s forwards;}
    .guide-pop-box.fadeOut{animation: dialogScaleHide .6s forwards;}
    @keyframes dialogScaleShow {
        0%{opacity:0;top:3.2rem;}
        100%{opacity:1;top:2.292rem;}
    }
    @keyframes dialogScaleHide {
        0%{opacity:1;top:2.292rem;}
        100%{opacity:0;top:3.2rem;}
    }
</style>
