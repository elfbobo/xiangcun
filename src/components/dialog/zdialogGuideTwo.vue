<template>
    <div>
        <dialog-base :title='title'
        :isShow='isShowDialog'
        @close='cancelPop'
        :autoClose='autoCloseData'
        :closeShow='closeShowData'
        >
        <video src="../../../static/guide.mp4" type="video/mp4" autoplay width="100%" loop muted="muted" height="100%" >
        </video>
        </dialog-base>
    </div>
</template>

<script>
    import DialogBase from '@/components/dialog/zdialogbase'
    export default {
        data() {
            return {
                title: '',
                isShowDialog:false,
                closeShowData:true,
                autoCloseData:false
            }
        },
        components:{
            DialogBase
        },
        methods: {
            init(closeShow,autoClose) {
                this.closeShowData=closeShow;
                this.autoCloseData=autoClose;
                this.isShowDialog=true;  
            },
            cancelPop(){
                this.isShowDialog=false;
            }
        },
    }
</script>

<style scoped>

</style>