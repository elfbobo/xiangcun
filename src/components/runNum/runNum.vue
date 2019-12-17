<template>
    <span class="progress-num" ref='progressNum'></span>
</template>

<script>
    export default {
        data() {
            return {
                originalData:0,//初始值
                loops:0,//总更新次数
                increment:0,//每次累加的值
                loopCount:0,
                startNum:0,
                timer:null,
                fromNum:0,
                toNum:0
            }
        },
        computed:{
        },
        watch:{
        },
        mounted(){
            this.$nextTick(()=>{

            })
        },
        methods: {
            init(fromNum,toNum){
                this.changNum(fromNum,toNum)
                this.startNum=fromNum;
                this.loopCount=0;
            },
            changNum(fromNum,toNum){
                clearTimeout(this.timer);
                 this.loops = 15;
                this.increment  = (toNum - fromNum) / this.loops;
                this.startNum=fromNum
                this.updateTimer(toNum)
            },
            updateTimer(endNum) {
                this.originalData=endNum;
                this.startNum +=this.increment;
                this.loopCount++;
                var str
                if(this.startNum.toString().split('.').length>2){
                    return
                }else{
                    if(endNum.toString().indexOf('.')>=0){
                        str=this.startNum.toFixed(2);
                    }else{
                        str=this.startNum.toFixed(0)
                    }
                }

                var sizeNum=str.length;
                //运算到此时的小数点前的字符长度
                var sizeNumBefore=sizeNum-0-1;
                if(!this.$refs.progressNum){
                    return
                }
                //判断 此时的小数点前的字符串长度是否>=需要的字符串小数点前的长度
                if(sizeNumBefore>=0)  {
                    this.$refs.progressNum.innerHTML=str;
                } else{
                    var newStr = Array(0-sizeNumBefore + 1).join('0') + str;
                    this.$refs.progressNum.innerHTML=newStr;
                }

                if (this.loopCount >= this.loops) {
                    clearTimeout(this.timer);
                    this.$refs.progressNum.innerHTML=this.originalData;
                    this.startNum = this.originalData;
                }else{
                    this.timer=setTimeout(()=>{
                        this.updateTimer(endNum)
                    },100)
                }
            },

        },
    }
</script>

<style>

</style>
