<template>
    <div class="green-wrap">
        <div class="chart-main clearfix">
            <div class="chart-left">
                <div class="chart-left-title event-title" @click="showPopGrain">
                    三区划定
                </div>
                <div class="year-plane event-title">
                    <ul>
                        <li @click="showPopGrain"><span class="year-plane-label">粮食生产功能区</span><span
                                class="year-plane-data"><em>{{planData.lsgn}}</em>万亩</span></li>
                        <li @click="showPopGrain"><span class="year-plane-label">蔬菜生产保护区</span><span
                                class="year-plane-data"><em>{{planData.scbh}}</em>万亩</span></li>
                        <li @click="showPopGrain"><span class="year-plane-label">特色农产品优势区</span><span
                                class="year-plane-data"><em>{{planData.tsys}}</em>万亩</span></li>
                    </ul>
                </div>
                <div class="chart-left-title fish-space-title event-title" @click="showPopGrain">
                    养殖水域滩涂规划
                </div>
                <div class="fishery event-title clearfix" @click="showPopGrain">
                    <span class="year-plane-data"><em>{{planData.yy}}</em>万亩</span>
                </div>
                <div class="chart-left-title">
                    农业生产现状用地
                </div>
                <div class="chart-land-box">
                    <div class="output-unit">
                        <div class="chart-unit">(万亩)</div>
                    </div>
                    <div ref="chartLand" class="chart-land-con"></div>
                    <div class="mark-lint">注：上海农业地理信息公共服务系统应用项目成果。</div>
                </div>
                <div class="chart-left-title farm-title">
                    高标准农田
                </div>
                <div class="chart-highfarm-box">
                    <div class="highfarm-total clearfix"><span>合计</span> <em>164.68</em> <i>万亩</i></div>
                    <div class="chart-highfarm-con" ref="chartHighFarm"></div>
                    <div class="mark-lint">注：上海农业地理信息公共服务系统应用项目成果。</div>
                </div>
            </div>
            <div class="chart-middle">
                <div class="middle-map-chart clearfix">
                    <div class="linkage">
                        <div class="select-map clearfix">
                            <el-select v-model='rangeCheck' @change='selectChange'>
                                <el-option v-for="item in elOption" :label='item.label' :value='item.value'
                                           :key='item.value'></el-option>
                            </el-select>
                        </div>
                        <div class="map-chart-tab">
                            <div class="map-chart-title">
                                <div class="map-chart-line">
                                    <ul>
                                        <li :class="{active:mapIndex==index}" @click='changeMap(index)'
                                            v-for="(item,index) in mapTable" :key=index>
                                            <span class="chart-v-icon"><img
                                                    :src="require('@/assets/images/g-c-icon'+(index+1)+'.png')" alt=""></span>
                                            <div class="chart-v-data">
                                                <div class="chart-v-no">{{item.nr}}<i
                                                        class="chart-v-unit">{{item.unit}}</i></div>
                                                <div class="chart-v-label">{{item.xm}}</div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="map-chart" ref="mapChart"></div>
                    </div>
                </div>
                <div class="chart-left-title chart-middle-title event-title" @click="showCertifiedPage">
                    绿色认证率
                </div>
                <div class="probability">
                    <div class="output-unit">
                        <div class="chart-unit">(%)</div>
                    </div>
                    <bar-chart ref="probabyChart" :classNameP='chartProbabyClass'></bar-chart>
                </div>
            </div>
            <div class="chart-right">
                <div class="chart-left-title event-title" @click="showCertifiedPage">
                    绿色认证趋势
                </div>
                <div class="attestation-chart">
                    <div class="output-unit">
                        <div class="chart-unit">（%）</div>
                    </div>
                    <line-chart-dobble ref='attestGetData' :width='attestWidth'
                                       :height='attestHeight'></line-chart-dobble>
                </div>
                <div class="chart-left-title space-title event-title" @click="showCertifiedPage">
                    绿色认证经营主体
                    <div class="inner-year">(2019.6)</div>
                </div>
                <div class="certified-list" @click="showCertifiedPage">
                    <div class="certified-line">
                        <div class="certified certified-green ">
                            <div class="certified-desc">
                                <span class="certified-count"><em>{{certified.lsrzqy}}</em>家</span>
                                <span class="certified-label">绿色认证企业</span>
                            </div>
                        </div>
                        <div class="certified certified-other">
                            <div class="certified-desc">
                                <span class="certified-count"><em>{{certified.ltqy}}</em>家</span>
                                <span class="certified-label">龙头企业<i>(农业生产)</i></span>
                            </div>
                        </div>
                        <div class="repeat-range"><em>{{certified.qzlsrzdltqy}}</em>家</div>
                    </div>
                    <div class="certified-line">
                        <div class="certified certified-green ">
                            <div class="certified-desc">
                                <span class="certified-count"><em>{{certified.lsrzhzs}}</em>家</span>
                                <span class="certified-label">绿色认证合作社</span>
                            </div>
                        </div>
                        <div class="certified certified-other">
                            <div class="certified-desc">
                                <span class="certified-count"><em>{{certified.sfhzs}}</em>家</span>
                                <span class="certified-label">示范合作社<i>(农业生产)</i></span>
                            </div>
                        </div>
                        <div class="repeat-range"><em>{{certified.qzlsrzdsfhzs}}</em>家</div>
                    </div>
                </div>
                <div class="chart-left-title space-three">
                    两品一标
                    <div class="inner-year">(2019.6)</div>
                </div>
                <div class="threeToOne-chart clearfix">
                    <div class="funnelL">
                        <ul>
                            <li v-for='(item,index) in funnelLabel' :key='index'>{{item}}</li>
                        </ul>
                    </div>
                    <div class="funnelImg"></div>
                    <div class="funnelVal">
                        <ul>
                            <li v-for='(item,index) in funnelValue' :key="index">{{item}}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog-guide ref="guideDialog"></el-dialog-guide>
        <el-dialog-page ref="pageDialog"></el-dialog-page>
        <dialog-grain ref='gnPopUp'></dialog-grain>
    </div>
</template>

<script>
    import ElSelect from '@/components/select/elSelect'
    import ElOption from '@/components/select/elOption'
    import LineChart from '@/components/lineCharts/lineChart'
    import LineChartDobble from '@/components/lineCharts/lineChartDobble'
    import BarChart from '@/components/barCharts/barChart'
    import ProgressChart from '@/components/progressCharts/progressChart'
    import RunNum from '@/components/runNum/runNum'
    import ElDialogGuide from '@/components/dialog/zdialogGuide'
    import ElDialogPage from '@/components/dialog/zdialogPage'
    import DialogGrain from '@/components/dialog/zdialogGrain'

    require('echarts/map/js/province/shanghai.js')
    export default {
        data() {
            return {
                rangeCheck: '崇明区',
                attestationAttr: {},
                attData: {
                    xAxisData: [],
                    seriesData: [],
                    legendData: []
                },
                certified: {
                    lsrzhzs: 0,
                    lsrzqy: 0,
                    ltqy: 0,
                    qzlsrzdltqy: 0,
                    qzlsrzdsfhzs: 0,
                    sfhzs: 0
                },
                attxAxisData: [],
                attestWidth: '2.5rem',
                attestHeight: '.829rem',
                probabyAttr: {},
                probabyData: {},
                mapTable: [],
                mapSHData: [],
                mapChartEL: null,
                mapIndex: 0,
                selectIndex: 8,
                chartProbabyClass: 'chartProbaby',
                progressChart: 'progressChart',
                numReduceOne: 0,
                numReduceTwo: 0,
                funnelLabel: [],
                funnelValue: [],
                elOption: [],
                timer: null,
                rankingData: [],
                planData: {
                    lsgn: 0, tsys: 0, scbh: 0, yy: 0, zmj: 0
                },
                greenTimer: null,
                landChart: null,
                landChartData: [],
                progressTimer: null,
                proNumData: {
                    rzcl: 0,
                    rzl: 0
                }
            }
        },
        components: {
            ElSelect,
            ElOption,
            // LineChart,
            BarChart,
            // ProgressChart,
            // RunNum,
            ElDialogGuide,
            ElDialogPage,
            DialogGrain,
            LineChartDobble
        },
        mounted() {
            this.$nextTick(() => {
                this.threeToOneChart()
                this.chartMap(this.mapIndex, this.selectIndex)
                this.probabilityChart()
                this.planThree()
                this.mainBodyGreen()
                this.attestationChart()
                this.certifyChart()
                this.chartLandView()
                this.chartHighFarmView()
            })
        },
        computed: {
            getCertifyUrl() {
                return this.$store.state.CertifiedUrl
            }
        },
        methods: {
            changeRouter() {
                clearInterval(this.progressTimer)
                clearInterval(this.greenTimer)
            },
            guideShow() {
                var closeShow = true
                var autoClose = false
                var autoPlay = true
                var isShow = true
                this.$refs.guideDialog.init(closeShow, autoClose, autoPlay, isShow)
            },
            chartHighFarmView() {
                var colorArray = [
                    {
                        top: '#63f5fb',
                        bottom: 'rgba(11,42,84,.3)'
                    }]
                this.highFarmChart = this.$echarts.init(this.$refs.chartHighFarm)
                var dataList = {
                    legend: ['农田'],
                    series: [
                        ['18.39', '1.27', '2.43', '7.16', '21.03', '13.53', '18.26', '20.28', '62.33']
                    ],
                    xaxis: ['浦东', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明']
                }
                var option = {
                    tooltip: {
                        show: false
                    },
                    toolbox: {
                        show: false
                    },
                    legend: {
                        show: false
                    },
                    grid: {
                        left: '6%',
                        top: '0%',
                        right: '0',
                        bottom: '0',
                        containLabel: true
                    },
                    xAxis: {
                        show: false,
                        type: 'value',
                        interval: 1,
                        axisTick: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            color: 'rgb(170,170,170)',
                            formatter: '{value}',
                            textStyle: {
                                color: '#ddd'
                            }
                        },
                        splitLine: {
                            show: false
                        }
                    },
                    yAxis: {
                        show: true,
                        type: 'category',
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        inverse: true,
                        axisLabel: {
                            show: true,
                            textStyle: {
                                color: '#fff',
                                fontSize: '8%'
                            }
                        },
                        data: dataList.xaxis
                    },
                    series: [
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color: function (params) {
                                        return {
                                            type: 'linear',
                                            colorStops: [{
                                                offset: 0,
                                                color: colorArray[0].bottom
                                            }, {
                                                offset: 1,
                                                color: colorArray[0].top
                                            }]
                                        }
                                    }
                                }
                            },
                            label: {
                                normal: {
                                    show: true,
                                    position: 'right',
                                    fontSize: '8%',
                                    formatter: function (params) {
                                        if (params.value === '' || params.value == null || params.value <= 0) {
                                            return '暂无数据'
                                        } else {
                                            return params.value
                                        }
                                    },
                                    color: '#fff'
                                }
                            },
                            barWidth: 5,
                            data: dataList.series[0]
                        }, {
                            name: '白框',
                            type: 'bar',
                            barGap: '-100%',
                            data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                            barWidth: 5,
                            itemStyle: {
                                normal: {
                                    color: 'rgba(53,241,255,.07)',
                                    barBorderRadius: 0
                                }
                            },
                            z: 1
                        }

                    ]
                }
                this.highFarmChart.setOption(option)
            },
            chartLandView() {
                this.landChart = this.$echarts.init(this.$refs.chartLand)
                // this.$http({
                //     url:this.$http.adornUrl('/sygc/xfly/ncczjmkzpsrfb'),
                //     methods:'get',
                //     params:this.$http.adornParams()
                // }).then(({data})=>{
                var dataList = {
                    legend: ['粮田', '菜田', '经作田', '果园', '养殖', '林地', '零星'],
                    series: [
                        [24.82, 1.02, 1.73, 8.61, 21.44, 18.25, 13.30, 17.92, 43.71],
                        [5.68, 0.97, 1.59, 2.71, 3.10, 2.18, 7.27, 9.66, 16.71],
                        [1.81, 0.09, 0.06, 0.07, 0.83, 1.14, 2.97, 1.01, 0.34],
                        [9.88, 0.23, 0.01, 1.13, 2.19, 0.62, 1.03, 3.17, 7.39],
                        [4.35, 0.10, 0.10, 0.28, 1.90, 0.67, 3.46, 5.20, 8.55],
                        [10.70, 1.97, 3.43, 5.50, 10.89, 12.02, 13.23, 11.21, 35.52],
                        [2.35, 0.64, 2.09, 2.10, 7.00, 2.24, 0.98, 1.64, 6.11]
                    ],
                    xaxis: ['浦东', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明']
                }
                dataList.series = dataList.series.map((item, index) => {
                    item = item.map((childItem, childIndex) => {
                        return {
                            name: dataList.xaxis[childIndex],
                            value: childItem
                        }
                    })
                    // var arrZero=item.filter(zeroItem=>zeroItem.value=="")

                    // item=item.filter(filterItem=>filterItem.value!="")
                    // this.sortArr(item)
                    // arrZero.forEach(forItem=>{
                    //     forItem.value=0
                    //     item.push(forItem)
                    // })

                    return item
                })

                for (var i = 0; i < dataList.series.length; i++) {
                    this.landChartData.push({
                        'category': 'year',
                        'date': dataList.legend[i],
                        'data': dataList.series[i]
                    })
                }
                var option = {
                    baseOption: {
                        animationDurationUpdate: 1000,
                        animationEasingUpdate: 'quinticInOut',
                        timeline: {
                            show: true,
                            axisType: 'category',
                            autoPlay: true,
                            playInterval: 4000,
                            left: '5%',
                            right: '5%',
                            top: '10%',
                            padding: 6,
                            label: {
                                show: true,
                                interval: 0,
                                textStyle: {
                                    color: 'rgba(53,241,255,1)',
                                    fontSize: '8%'
                                }
                            },
                            emphasis: {
                                checkpointStyle: {
                                    color: 'rgba(53,241,255,1)'
                                }
                            },
                            lineStyle: {
                                color: '#ccc',
                                show: false
                            },
                            symbol: 'none',
                            symbolOffset: [0, '690%'],
                            checkpointStyle: {
                                symbol: 'rect',
                                symbolSize: [30, 3],
                                color: 'rgba(53,241,255,1)',
                                show: true,
                                borderWidth: 0
                            },
                            controlStyle: {
                                show: false
                            },
                            data: this.landChartData.map(function (ele) {
                                return ele.date
                            })
                        },
                        title: [{
                            show: false

                        }],
                        grid: {
                            left: '4%',
                            top: '33%',
                            right: '4%',
                            bottom: '7%',
                            containLabel: true
                        },
                        xAxis: {},
                        yAxis: {},
                        series: [
                            {
                                id: 'bar',
                                type: 'bar',
                                barWidth: '8',
                                tooltip: {
                                    show: false
                                },
                                label: {
                                    normal: {
                                        show: true,
                                        position: 'right',
                                        textStyle: {}
                                    }
                                },
                                data: []
                            }

                        ]
                    },
                    options: []
                }
                for (let i = 0; i < this.landChartData.length; i++) {
                    option.options.push({
                        tooltip: {
                            show: true
                        },
                        xAxis: {
                            show: true,
                            type: 'category',
                            interval: 1,
                            axisTick: {
                                show: false
                            },
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '8%'
                                }
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(23,76,110,.2)'
                                }
                            },
                            axisLine: {
                                show: false
                            },
                            data: dataList.xaxis
                        },
                        yAxis: {
                            show: true,
                            type: 'value',
                            boundaryGap: [0.2, 0.2],
                            offset: 0,
                            min: 0,
                            splitNumber: 3,
                            axisTick: {
                                show: false
                            },
                            axisLine: {
                                show: false
                            },
                            splitLine: {
                                show: true,
                                lineStyle: {
                                    color: 'rgba(23,76,110,.2)'
                                }
                            },
                            inverse: false,
                            axisLabel: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: '8%'
                                }
                            },

                            data: this.landChartData[i].data.map(function (ele) {
                                return ele.name
                            })
                        },
                        series: [
                            {
                                id: 'bar',
                                itemStyle: {
                                    normal: {
                                        barBorderRadius: 20,
                                        color: '#04f4fb',
                                        label: {
                                            show: false,
                                            position: 'top',
                                            formatter: '{c}万亩',
                                            fontSize: '8%'
                                        }
                                    }
                                },
                                label: {
                                    normal: {
                                        color: '#fff'
                                    }
                                },
                                barWidth: 10,
                                data: this.landChartData[i].data
                            }
                        ]
                    })
                }
                this.landChart.setOption(option)
                // })
            },
            attestationChart() {
                this.$set(this.attestationAttr, 'pageList', {
                    legend: {show: false},
                    unit: '%',
                    xUnit: '年',
                    grid: {xPos: '7.5%', yPos: '18%', xPosR: '7%', yPosB: '17%'},
                    yAxis: {min: 0, max: 15},
                    series: {symbol: true, symbolMark: false}
                })
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/njlsrzl'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code === 0) {
                        var dataList = data.data.page
                        dataList.xaxis.push('2020', '2022')
                        this.$refs.attestGetData.init(this.attestationAttr, dataList)
                        this.$refs.attestGetData.openServerMatter(this.getCertifyUrl)
                    }
                })
            },
            showPopGrain() {
                this.$refs.gnPopUp.init(0)
            },
            mainBodyGreen() {
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/lsrzjjzt'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code === 0) {
                        var dataList = data.data.page.list
                        this.rankingData = dataList.kv
                    }
                })
            },
            yearChart() {
                var dataListOne = {
                    series: {
                        data: [[20]]
                    },
                    seriesEnd: {
                        data: [[50]]
                    }
                }
                this.numReduceOne = dataListOne.series.data[0][0]
                this.$refs.runNumOne.init(0, this.numReduceOne)
                this.$refs.progressChartOne.init(dataListOne)
                var dataListTwo = {
                    series: {
                        data: [[30]]
                    },
                    seriesEnd: {
                        data: [[50]]
                    }
                }

                this.numReduceTwo = dataListTwo.series.data[0][0]
                this.$refs.runNumTwo.init(0, this.numReduceTwo)
                this.$refs.progressChartTwo.init(dataListTwo)
                // this.progressTimer=setInterval(()=>{
                //   if(!this.$refs.runNumOne){
                //     return
                //   }
                //   this.$refs.runNumOne.init(0,this.numReduceOne)
                //   if(!this.$refs.runNumTwo){
                //     return
                //   }
                //   this.$refs.runNumTwo.init(0,this.numReduceTwo)
                //  },6000)
            },
            certifyChart() {
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/lsrzxxnyrzzt'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code == 0) {
                        var dataList = data.data.page.list
                        this.certified = {
                            lsrzhzs: dataList.lsrzhzs,
                            lsrzqy: dataList.lsrzqy,
                            ltqy: dataList.ltqy,
                            qzlsrzdltqy: dataList.qzlsrzdltqy,
                            qzlsrzdsfhzs: dataList.qzlsrzdsfhzs,
                            sfhzs: dataList.sfhzs
                        }
                    }
                })
            },
            threeToOneChart() {
                this.funnelLabel = []
                this.funnelValue = []
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/spyb'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code == 0) {
                        var dataList = data.data.page.list
                        dataList.length = 3
                        dataList.forEach((item) => {
                            this.funnelLabel.push(item.name)
                            this.funnelValue.push(item.value)
                        })
                    }
                })
            },
            planThree() {
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/sqhdhyy'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code == 0) {
                        var dataList = data.data.page.list

                        this.planData = {
                            lsgn: dataList.lsgn,
                            scbh: dataList.scbh,
                            tsys: dataList.tsys,
                            yy: dataList.yy
                        }
                        this.planData.zmj = parseFloat(dataList.lsgn) + parseFloat(dataList.scbh) + parseFloat(dataList.tsys)
                        // this.$refs.proNumZmj.init(0, this.planData.zmj)
                    }
                })
            },
            chartMap(index, sIndex) {
                var resMap = {}
                var mapData = []
                this.mapChartEL = this.$echarts.init(this.$refs.mapChart)
                var convertData = function (data) {
                    var res = []
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = resMap[data[i].name]
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            })
                        }
                    }
                    return res
                }
                var option = {
                    tooltip: {
                        show: false,
                        trigger: 'item',
                        formatter: function (a) {
                            return a[2]
                        }
                    },
                    legend: {
                        show: false,
                        data: ['数据名称', 'checkedOne']
                    },
                    geo: {
                        show: true,
                        markPoint: {
                            symbol: 'none',
                            symbolSize: 0
                        },
                        roam: false,
                        left: 0,
                        right: '15%',
                        top: 5,
                        map: '上海',
                        label: {
                            show: false,
                            color: '#CCC'
                        },
                        itemStyle: {
                            borderColor: '#35f1ff',
                            borderWidth: 1,
                            areaColor: {
                                type: 'radial',
                                x: 0.5,
                                y: 0.6,
                                r: 1,
                                colorStops: [{
                                    offset: 0,
                                    color: 'rgba(10, 140, 196, 0)' // 0% 处的颜色
                                }, {
                                    offset: 1,
                                    color: 'rgba(26, 133,209, 0)'
                                    // color: 'rgba(26, 133,209, .6)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(57, 118, 161, 1)',
                            shadowOffsetX: -1,
                            shadowOffsetY: 3,
                            shadowBlur: 0
                        },
                        emphasis: {
                            label: {
                                show: false
                            },
                            itemStyle: {
                                areaColor: {
                                    type: 'radial',
                                    x: 0.5,
                                    y: 0.5,
                                    r: 0.5,
                                    colorStops: [{
                                        offset: 0,
                                        color: 'rgba(10, 140, 196, 0)'
                                    }, {
                                        offset: 1,
                                        color: 'rgba(10, 140, 196, .4)' // 100% 处的颜色
                                    }],
                                    globalCoord: false // 缺省为 false
                                },
                                show: false
                            }
                        }
                    },
                    series: [
                        {
                            name: '数据名称',
                            type: 'scatter',
                            coordinateSystem: 'geo',
                            // rippleEffect:{
                            //     period: 4,
                            //     scale: 2,
                            // },
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    show: false
                                },
                                emphasis: {
                                    show: false
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.5,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(233,192,21,0)' // 0% 处的颜色
                                        }, {
                                            offset: 1, color: 'rgba(233,192,21,1)' // 100% 处的颜色
                                        }],
                                        globalCoord: true // 缺省为 false
                                    },
                                    shadowBlur: 0,
                                    shadowColor: '#0a578c'
                                }
                            }
                        },
                        {
                            name: 'checkedOne',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            rippleEffect: {
                                period: 15,
                                scale: 10,
                                brushType: 'stroke'
                            },
                            symbolSize: function (val) {
                                return val[2] / 20
                            },
                            showEffectOn: 'render',
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    color: '#ffffff',
                                    show: true
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: {
                                        type: 'radial',
                                        x: 0.5,
                                        y: 0.5,
                                        r: 0.5,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(219,98,69,0)'
                                        }, {
                                            offset: 1, color: 'rgba(219,98,69,1)' // 100% 处的颜色
                                        }],
                                        globalCoord: true
                                    },
                                    shadowBlur: 0,
                                    shadowColor: '#25fffb'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                }
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/hxdqzbfb'),
                    method: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    var dataList = data.data.page
                    this.elOption = dataList.legend.map((item, index) => {
                        return {value: index, label: item}
                    })
                    this.mapSHData = dataList.series.map((item, index) => {
                        item = item.map((childItem, childIndex) => {
                            return {
                                name: dataList.legend[childIndex],
                                value: childItem
                            }
                        })
                        return item
                    })
                    var arrTable = []
                    for (var i = 0; i < dataList.legend.length; i++) {
                        arrTable.push([])
                        for (var j = 0; j < dataList.series.length; j++) {
                            arrTable[i].push({
                                xh: this.formatNum(j + 1),
                                xm: dataList.xaxis[j],
                                nr: dataList.series[j][i]
                            })
                        }
                    }
                    this.mapTable = arrTable[sIndex]
                }).then(() => {
                    this.$http({
                        url: this.$http.adornUrl('/sygc/json/shanghai.json'),
                        methods: 'get',
                        params: this.$http.adornParams()
                    }).then(({data}) => {
                        data.features.forEach(item => {
                            resMap[item.properties.name] = item.properties.cp
                        })
                        var effectSData = [convertData(this.mapSHData[index])[sIndex]]
                        var scatterData = convertData(this.mapSHData[index]).filter((item, findex) => findex !== sIndex)
                        var selectVal = convertData(this.mapSHData[index])[sIndex].value[2]
                        var minNum = 0
                        var minNumArr = convertData(this.mapSHData[index]).filter(item => item.value[2] !== '—')
                        minNumArr = minNumArr.map(item => item.value[2])

                        minNum = Math.min(...minNumArr)
                        this.mapChartEL.setOption({
                            series: [{
                                data: scatterData,
                                symbolSize: function (val) {
                                    if (val[2] === '—') {
                                        return 0
                                    } else {
                                        val[2] = Math.abs(val[2] / minNum) <= 1.56 ? val[2] * 1.5 : val[2]
                                        return Math.abs(val[2] / minNum * 8) > 20 ? 20 : Math.abs(val[2] / minNum * 8)
                                    }
                                }
                            }, {
                                type: 'effectScatter',
                                data: effectSData,
                                rippleEffect: {
                                    period: 5,
                                    scale: 8,
                                    brushType: 'stroke'
                                },
                                symbolSize: function (val) {
                                    if (val[2] === '—') {
                                        return 1
                                    } else {
                                        val[2] = val[2] / minNum <= 1.56 ? val[2] * 1.5 : val[2]
                                        return Math.abs(val[2] / minNum * 8) > 35 ? 35 : Math.abs(val[2] / minNum * 8)
                                    }
                                },
                                showEffectOn: 'render'
                            }]
                        })
                    })
                    this.mapChartEL.setOption(option)
                })
            },
            selectChange(value) {
                if (this.rangeCheck != value) {
                    this.mapIndex = 0
                    this.selectIndex = value
                    this.mapChartEL.clear()
                    this.chartMap(this.mapIndex, this.selectIndex)
                } else {

                }
            },
            changeMap(index) {
                this.mapIndex = index
                this.mapChartEL.clear()
                this.chartMap(this.mapIndex, this.selectIndex)
            },
            formatNum(num) {
                if (num <= 0) {
                    return '0' + num
                } else {
                    return num
                }
            },
            showCertifiedPage() {
                // console.log(this.getCertifyUrl);

                this.$refs.pageDialog.init(this.getCertifyUrl)
            },
            probabilityChart() {
                this.$set(this.probabyAttr, 'pageList', {
                    colorList: ['#04f4fb', '#15a4f6', '#3dfb72', '#fbb919'],
                    tooltip: {show: true},
                    unit: '%',
                    xUnit: '',
                    yAxis: {min: 0, splitNum: 4},
                    legend: {yPos: '5%', show: true, fontSize: '8%'},
                    series: {barMaxWidth: 8},
                    grid: {
                        gridXOne: '4%',
                        yOne: '16%',
                        yTwo: 25,
                        gridXTwo: '1%'
                    }
                })
                this.$http({
                    url: this.$http.adornUrl('/sygc/getdata/lsrzl'),
                    methods: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    if (data.data && data.data.code == 0) {
                        var dataList = data.data.page
                        dataList.legend = dataList.legend.map(item => parseInt(item).toString())
                        this.$refs.probabyChart.init(this.probabyAttr, dataList)
                        this.$refs.probabyChart.openSubsidies(this.getCertifyUrl)
                    }
                })
            }
        }
    }
</script>
