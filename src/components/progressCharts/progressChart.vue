<template>
    <div class="pr">
        <div ref="progressChart" :class="classNameP"></div>
        <div class="start-num">0%</div>
        <div class="end-num">100<i>%</i></div>
        <div class="public-mark pr-public-mark"></div>
        <!-- <el-dialog-page ref="pageDialog"></el-dialog-page> -->
    </div>
</template>

<script>
    // import ElDialogPage from '@/components/dialog/zdialogPage'
    export default {
        props:['classNameP'],
        data() {
            return {
                chartData:{
                    progressElChart:null,
                    seriesData:[],
                    seriesEndData:[]
                }
            }
        },
        computed:{
            getCertifyUrl(){
                return this.$store.state.CertifiedUrl
            }
        },
        components:{
            // ElDialogPage
        },
        watch:{
            chartData:{
                handler(newVal,oldVal){
                    if(!this.progressElChart){
                        return
                    }
                    if(newVal){
                        this.progressCharts(newVal)
                    }
                },
                deep:true
            }
        },
        beforeDestroy() {
            if (!this.progressElChart) {
            return
            }
            this.progressElChart.dispose()
            this.progressElChart = null
        },
        methods:{
            init(data){
                this.chartData={
                    seriesData:JSON.parse(JSON.stringify(data.series.data)),
                    seriesEndData:JSON.parse(JSON.stringify(data.seriesEnd.data))
                }                
                 this.progressCharts(this.chartData);
            },
            progressCharts(optData){
                this.progressElChart=this.$echarts.init(this.$refs.progressChart);
                var option = {
                    grid: {
                        bottom: '0',
                        left: '0',
                        right: '.5%',
                        top:'50%',
                        containLabel: false
                    },
                    yAxis: [{
                        type: 'category',
                        show:'false',
                        axisTick:{
                            show:true,
                            lineStyle:{
                                color:'#fff',
                                width:1
                            }
                        },
                        axisLine:{
                            show:false
                        }
                    }],
                    xAxis: [{
                        show:true,
                        type: 'value',
                        position:'top',
                        axisLabel: {
                            show: true,
                            color:'rgba(255,255,255,0)'
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick:{
                            show:true,
                            lineStyle:{
                                color:'#fff',
                                width:1
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    }],
                    series: []
                    };
                    for(var i=0;i<optData.seriesData.length;i++){
                        option.series[i]={
                            type: 'bar',
                            barWidth: 8,
                            data: optData.seriesData[i],
                            label: {
                                normal: {
                                    show: false,
                                    position:'top',
                                    offset:[100,4],
                                    formatter: function(params){
                                       return params.value+'%' 
                                    },
                                    color: '#35F1FF',
                                    fontSize: '17%',
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#35F1FF',
                                    barBorderRadius:0
                                }
                            }
                        }
                    }
                     option.series.push({
                        type: "bar",
                        barWidth: 8,
                        xAxisIndex: 0,
                        data: optData.seriesEndData,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)",
                            }
                        },
                        zlevel: -1
                     })
                this.progressElChart.setOption(option)
                var _this=this;
                this.progressElChart.getZr().on('click',function(){
                    _this.$refs.pageDialog.init(_this.getCertifyUrl);
                })
                // setInterval(()=>{
                //     if(!this.progressElChart){return}
                //     this.progressElChart.clear();
                //     this.progressElChart.setOption(option);
                // },12000)
            }
        }
    }
</script>

<style scoped>

</style>