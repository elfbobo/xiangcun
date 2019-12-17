<template>
    <div class="dialog-box" ref='dialogBox' :class='{fadeIn:isShow,fadeOut:!isShow,fullScreen:isFull,globalScreen:!isFull}'>
        <div class="dialog-pannel">
            <div class="dialog-title">
                <h3 v-show='title!==""'>我是标题</h3>
                <div class="dialog-close" v-show='closeShow' @click="closeDialog"></div>
            </div>
            <div class="dialog-body">
                <slot></slot>
            </div>
        </div>
    </div>

</template>

<script>
    export default{
        props:{
            isShow:{
                type:Boolean,
                default:false
            },
            isFull:{
                type:Boolean,
                default:true
            },
            startAnimate:{
                type:Boolean,
                default:false
            },
            autoClose:{
                type:Boolean,
                default:false
            },
            closeShow:{
                type:Boolean,
                default:true
            },
            title:{
                type:String,
                default:''
            },
            duration: {
                type: Number,
                default: 6000
            }
        },
        data() {
            return {
                globalStyle:{}
            }
        },
        watch:{
            autoClose(newVal,oldVal){
                if(newVal==true){
                    setTimeout(()=>{
                        this.$emit('close');
                    },this.duration)
                }else{
                    return
                }
            },
            isShow(newVal,oldVal){
                if(newVal){
                    return newVal
                }
            }
        },
        mounted(){
            if(this.autoClose){
                setTimeout(()=>{
                     this.$emit('close');
                },this.duration)
            }
        },
        methods: {
            // init(globalPos){
            //     if(!this.isFull && globalPos){
            //         this.globalStyle=globalPos
            //     }
            // },
            closeDialog(){
                if(this.closeShow){
                    this.$emit('close');
                }
            }
        },
    }
</script>

<style scoped>
    .dialog-box{position: absolute;z-index:999;overflow: hidden;}
    /* .fullScreen{top:0;bottom:0;left:0;right:0;transform:scale(0);} */
    .fullScreen{top:0;bottom:0;left:4rem;right:0;transform:scale(0);height: 4.5rem;}
    /* .globalScreen{top:0%;left:4%;right:4%;bottom:4%;transform:scale(1);background: rgba(26,36,71,.5);opacity:0;} */
    .globalScreen{left:4rem;height: 4.28rem;overflow:hidden;width:12rem;transform:scale(1);opacity:0;top:0;}
    .dialog-pannel{background: rgba(26,36,71,.5);position: absolute;left:4%;bottom:4%;top:0;right:4%;overflow: hidden}
    .fullScreen .dialog-pannel{left:0;right:0;top:0;bottom:0;}
    .dialog-box.fullScreen.fadeIn{animation: dialogScaleShow .6s forwards;}
    .dialog-box.fullScreen.fadeOut{animation: dialogScaleHide .7s forwards;}
    .dialog-box.globalScreen.fadeIn{animation: dialogCenterShow .6s forwards;}
    .dialog-box.globalScreen.fadeOut{animation: dialogCenterHide .6s forwards;transform-origin: 0 0;}
    .dialog-box.globalScreen.fadeIn .dialog-pannel{animation: dialogTopMove .6s forwards;}
    .dialog-box.globalScreen.fadeOut .dialog-pannel{animation: dialogTopBack .6s forwards;transform-origin: 0 0;}
    .dialog-title h3{font-size: .2rem;color:#fff;font-weight: lighter;}
    .dialog-close{width:80px;height: 80px;position: absolute;top:-40px;right:-40px;background:rgba(0, 0, 0, 0.3);cursor: pointer;z-index: 999;border-radius: 50%;}
    .dialog-close:after{position:absolute;content:' ';background:url(../../assets/images/close.png) no-repeat;background-size:14px 14px;width:16px;height: 16px;top:51px;left:17px;}
    @keyframes dialogScaleShow {
        0%{transform:scale(0);}
        100%{transform:scale(1);}
    }
    @keyframes dialogScaleHide {
        0%{transform:scale(1);}
        100%{transform:scale(0);}
    }
    @keyframes dialogCenterShow {
        0%{top:0%;opacity:0;}
        100%{top:0%;opacity:1;}
    }
    @keyframes dialogCenterHide {
        0%{top:0%;opacity:1;}
        100%{top:0%;opacity:0;}
    }
    @keyframes dialogTopMove {
        0%{top:0%;bottom:4%}
        100%{top:4%;bottom:2%}
    }
    @keyframes dialogTopBack {
        0%{top:4%;bottom:2%}
        100%{top:0%;bottom:4%}
    }
</style>
