<template>
    <div class="public-count">
        <div ref="publicServiceChart" class="public-service-count"></div>
        <div class="public-desc">
            <div class="p-s-value"><service-num ref="psValue"></service-num><i>%</i></div>
            <div class="p-s-title">{{dataValue.name}}</div>
        </div>
        <div class="public-mark"></div>
    </div>
</template>

<script>
 import ServiceNum from '@/components/runNum/runNum'
    export default {
        data() {
            return {
                publicServiceEl: null,
                dataValue:{},
            }
        },
        components: {
            ServiceNum,
        },
        mounted () {
            this.$nextTick(()=>{
               
                
            })
        },
        methods: {
           init(data){
               this.dataValue=data[0]
               this.publicServiceChart(data)
                 
                if(!!this.$refs.psValue&& !!this.dataValue){
                    this.$refs.psValue.init(0,this.dataValue.value)
                }
               
           },
           publicServiceChart(data){
                let echarts = require('echarts/lib/echarts')
                this.publicServiceEl=this.$echarts.init(this.$refs.publicServiceChart);
               var option = {
                    series: [{
                        name: '刻度',
                        type: 'gauge',
                        radius: '67.9%',
                        min:0,//最小刻度
                        max:100,//最大刻度
                        splitNumber: 8, //刻度数量
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                        show: true,
                        lineStyle: {
                            width: 1,
                            color: [[1,'rgba(0,0,0,0)']]
                        }
                        },//仪表盘轴线
                        axisLabel: {
                            show: false,
                        },//刻度标签。
                        axisTick: {
                            show: true,
                            splitNumber: 2,
                            lineStyle: {
                                width: 1,
                                color: 'rgba(53,241,255,.3)'
                            },
                            length: -3
                        },//刻度样式
                        splitLine: {
                            show: false
                        },//分隔线样式
                        detail: {
                            show: false
                        },
                        pointer: {
                            show: false
                        }
                    },
                    {
                        type: 'gauge',
                        radius: '97.9%',
                        center: ['50%', '50%'],
                        splitNumber: 0,
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 6,
                                color: [
                                    [
                                        data[0].value/100, new echarts.graphic.LinearGradient(
                                        0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#013436'
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(53,241,255,1)'
                                        }
                                        ]
                                        )
                                    ],
                                    [
                                    1, 'rgba(53,241,255,.1)'
                                    ]
                                ]
                            }
                        },
                        //分隔线样式。
                        splitLine: {
                            show: false,
                        },
                        axisLabel: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        pointer: {
                            show: false
                        },
                        title: {
                            show: false,
                            offsetCenter: [0, '-25%'], // x, y，单位px
                            textStyle: {
                            color: '#fff',
                            fontSize: '12%'
                            }
                        },
                        //仪表盘详情，用于显示数据。
                        detail: {
                            show: false,
                            offsetCenter: [0, '20%'],
                            color: '#35f1ff',
                            formatter: function(params) {
                                 return params+'%'
                            },
                            textStyle: {
                                 fontSize: '20%'
                            }
                        },
                        data:data
                    }
                    ]
                    };
                this.publicServiceEl.setOption(option)
            },
        },
    }
</script>

<style>

</style>