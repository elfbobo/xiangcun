<template>
    <div class="task-pie-line">
        <div class="task-pie-chart" ref="taskPieChart"></div>
        <div class="task-pie-data">
            <span class="task-pie-num">{{value}}<i>%</i></span>
            <span class="task-pie-label">{{title}}</span>
        </div>
    </div>
</template>

<script>
    import 'echarts/lib/chart/pie'
    export default {
        name: "TaskPieChart",
        data () {
            return {
                pieChart: null,
                title: '',
                value: 0
            }
        },
        methods: {
            init (attr, value) {
                this.title = value.title
                this.value = value.value
                this.taskChart(attr, value)
            },
            taskChart (attr, value) {
                this.pieChart = this.$echarts.init(this.$refs.taskPieChart)
                const option = {
                    series: [{
                        type: 'pie',
                        radius: ['10', '22'],
                        center: ['50%', '50%'],
                        color: attr,
                        itemStyle: {
                            normal: {
                                borderWidth: 3,
                                borderColor: '#091c39'
                            }
                        },
                        data: [
                            {
                                value: value.value,
                                name: value.title
                            },
                            {
                                value: 100 - value.value,
                                name: ''
                            }
                        ],
                        labelLine: {
                            normal: {
                                show: false,
                                length: 50,
                                length2: 50,
                                lineStyle: {
                                    color: '#CCCCCC',
                                    width: 2
                                }
                            }
                        },
                        label: {
                            show: false
                        }
                    }]
                }
                this.pieChart.setOption(option)
            }
        }
    }
</script>

<style scoped>

</style>
