<template>
    <div class="chart-mixins" ref="chartMixins"></div>
</template>
<script>
    import echarts from 'echarts/lib/echarts'

    export default {
        name: "ChartMixins",
        props: {
            width: {
                type: [Boolean, String],
                default: false
            },
            height: {
                type: [Boolean, String],
                default: false
            },
            options: {
                type: Object,
                default: () => ({})
            }
        },
        data: () => ({
            chart: null,
        }),
        methods: {
            setChart() {
                if (!this.chart) {
                    this.chart = echarts.init(this.$refs.chartMixins, null, {renderer: 'canvas'})
                }
                this.chart.setOption(this.options)
            }
        }
    }
</script>
<style scoped>
    .chart-mixins {
        position: absolute;
       width: 100%;
        height: 100%;
    }
</style>

