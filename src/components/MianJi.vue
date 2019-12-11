<template>
    <div class="mianji--container">
        <chart-title>
            {{title}}
        </chart-title>
        <div style="position: relative;flex: 1 1 auto;">
            <chart-mixins
                    ref="mianji"
                    :options="options"
            >
            </chart-mixins>
        </div>

    </div>
</template>

<script>
    import echarts from 'echarts/lib/echarts'
    import 'echarts/lib/component/legend'
    import 'echarts/lib/component/tooltip'
    import 'echarts/lib/component/axis'
    import 'echarts/lib/chart/line'
    import 'echarts/lib/component/grid'
    import ChartTitle from "./ChartTitle";
    import ChartMixins from "./ChartMixins";

    export default {
        name: "MianJi",
        components: {ChartMixins, ChartTitle},
        props: {
            title: {
                type: String,
                default: '推进情况'
            },
            startColor: {
                type: String,
                default: 'rgba(4,244,251,1)'
            },
            target: {
                type: [Boolean, Number],
                default: false
            }
        },
        data: () => ({
            options: {
                xAxis: {
                    type: 'category',
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(4,244,251,0.3)'
                        }
                    },
                    boundaryGap: false,

                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 20
                        }
                    },
                    data: ['宝山', '浦东', '嘉定', '崇明', '奉贤', '松江', '青浦', '闵行', '金山']
                },
                yAxis: {
                    type: 'value',
                    splitNumber: 10,

                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(4,244,251,0.3)'
                        }
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff',
                            fontSize: 20
                        },
                        formatter: '{value} %'
                    },

                },
                tooltip: {
                    show: true,
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line'
                    },
                    textStyle: {
                        fontSize: '15px',
                    },
                    backgroundColor: 'rgba(4,244,251,0.25)',
                    renderMode: 'html',
                    formatter: function (params) {
                        const param = params[0]
                        return `<span style="padding: 10px;font-size: 25px;">${param.value}%</span>`
                    }
                },
                series: [{
                    type: 'line',
                    data: [100, 100, 100, 100, 100, 100, 100, 100, 100],
                    areaStyle: {
                        color: '#04f4fb'
                    },
                    lineStyle: {
                        color: '#04f4fb',
                    },
                    itemStyle: {
                        color: '#04f4fb',
                        opacity: 0
                    },
                    emphasis: {
                        itemStyle: {
                            color: '#ffffff',
                            opacity: 100
                        }
                    }
                }]
            }
        }),
        mounted() {
            this.options.series[0].areaStyle.color = this.setGradientColor(this.startColor, 'rgba(0,0,0,0)')
            this.options.series[0].itemStyle.color = this.startColor
            this.options.series[0].lineStyle.color = this.startColor
            let temp = this.startColor.split(',')
            temp[temp.length - 1] = '0.25)'
            this.options.tooltip.backgroundColor = temp.join(',')
            this.$refs.mianji.setChart()
        },
        methods: {
            setGradientColor(start, end) {
                return new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: start
                    },
                    {
                        offset: 1,
                        color: end
                    }
                ])
            },
            setOptionData(dataArray = [], target) {
                if (dataArray.length === 0) {
                    return
                }

                const {names, values} = dataArray.reduce((prev, next) => {
                    prev.names.push(next.name)
                    prev.values.push(next.value)
                    return prev
                }, {names: [], values: []})

                this.options.series[0].data = values
                this.options.xAxis.data = names
                if (target) {
                    this.options.series.push({
                        type: 'line',
                        connectNulls: true,
                        itemStyle: {
                            opacity: 100
                        },

                        lineStyle: {
                            type: 'dotted',
                            color: this.startColor
                        },
                        data: [{
                            value: target,
                            itemStyle: {
                                opacity: 0
                            }
                        }, null, null, null, null, null, null, null, target],
                        label: {
                            show: true,
                            fontSize: '20px',
                            color: this.startColor,
                            formatter: '{c} %',
                            position: 'bottom'
                        },
                    })
                }
                this.$refs.mianji.setChart()
            }

        },
    }
</script>

<style scoped>
    .mianji--container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 100%;
        height: 100%;
        margin-right: 30px;
        position: relative;
    }
</style>
