<template>
    <div class="happiness-wrap">
        <div class="chart-main clearfix">
            <div class="chart-left">
                <div class="chart-left-title">
                    全国农村人均可支配收入
                </div>
                <div class="allRevenue">
                    <div class="allRevenue-chart" ref="allRevenueCharts">
                    </div>
                    <div class="mark-lint">注：部分数据来源互联网。</div>
                </div>
                <div class="chart-left-title revenue-title">
                    农村人均可支配收入 <div class="inner-year">(2017)</div>
                </div>
                <div class="revenue">
                    <div class="revenue-chart"  ref="revenueChart"></div>
                </div>
                <div class="chart-left-title event-title  allRevenue-title">
                    农村综合帮扶工作&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<div class="inner-year">(2018-2022)</div>
                </div>
                <div class="outputValue">
                    <div class="assist-box">
                        <div class="assist-table">
                            <table>
                                <thead>
                                <tr>
                                    <th><span class="assist-icon-o"></span>认定标准<i>(村集体组织)</i></th>
                                    <th>本轮</th>
                                    <th>上一轮</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>人均可支配收入低于</td>
                                    <td>800元</td>
                                    <td>400元</td>
                                </tr>
                                <tr>
                                    <td>经营性资产人均低于</td>
                                    <td>10000元</td>
                                    <td class="tdspace">/</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="assist-table">
                            <table>
                                <thead>
                                <tr>
                                    <th><span class="assist-icon-t"></span>帮扶力度</th>
                                    <th>本轮</th>
                                    <th>上一轮</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>市级财政帮扶资金</td>
                                    <td>20亿元</td>
                                    <td>10亿元</td>
                                </tr>
                                <tr>
                                    <td>帮扶方中的中心城区</td>
                                    <td>7个区</td>
                                    <td>4个区</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

            </div>
            <div class="chart-middle">
                <div class="middle-map-chart clearfix">
                    <div class="linkage">
                        <div class="select-map clearfix">
                            <el-select v-model='happnessCheck' @change='selectChange'>
                                <el-option  v-for="item in elOption" :label='item.label' :value='item.value' :key='item.value'></el-option>
                            </el-select>
                        </div>
                        <div class="map-chart-tab">
                            <div class="map-chart-title">
                                <div class="map-chart-line">
                                    <ul>
                                        <li  :class="{active:mapIndex==index}" @click='changeMap(index)' v-for="(item,index) in mapTable" :key=index>
                                            <span class="chart-v-icon"><img :src="require('@/assets/images/h-c-icon'+(index+1)+'.png')" alt=""></span>
                                            <div class="chart-v-data">
                                                <div class="chart-v-no">{{item.nr}}<i class="chart-v-unit">{{item.unit}}</i></div>
                                                <div class="chart-v-label">{{item.xm}}</div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="mapChart-line-lint">
                                        注：数据截止到2017年底
                                    </div>
                                </div>
                            </div>
                            <div class="map-chart" ref="mapChart"></div>
                        </div>
                    </div>
                </div>
                <div class="chart-middle-bar-line clearfix">
                    <div class="chart-middle-bar">
                        <div class="chart-left-title chart-middle-title event-title" @click="openTrendPage(getSubsides)">
                            涉农补贴金额
                        </div>
                        <div class="amountMoney">
                            <div class="output-unit"><div class="chart-unit">(亿元)</div></div>
                            <bar-chart-output :classNameP='amountCss' ref='amountMoneyChart'></bar-chart-output>
                        </div>
                    </div>
                    <div class="chart-middle-line">
                        <div class="chart-left-title chart-middle-title event-title" @click="openTrendPage(getSubObj)">
                            涉农补贴对象
                        </div>
                        <div class="object-chart">
                            <div class="output-unit">
                                <div class="chart-unit chart-left-unit">农户</div>
                                <div class="chart-unit chart-right-unit">经营主体</div>
                            </div>
                            <mu-line-chart ref="objectChart" :width='objWidth' :height='objHeight'></mu-line-chart>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart-right">
                <div class="chart-left-title event-title" @click="openTrendPage(serverMatter)">
                    行政审批服务事项
                </div>
                <div class="serverNo">
                    <div class="output-unit"><div class="chart-unit">(项)</div></div>
                    <line-chart ref="serverNoChart" :width='serverWidth' :height='serverHeight'></line-chart>
                </div>
                <div class="chart-left-title server-people-title event-title" @click="openTrendPage(serverMatter)">
                    行政审批服务人次
                </div>
                <div class="peopleServer">
                    <div class="output-unit">
                        <div class="chart-unit chart-left-unit">法人(家)</div>
                        <div class="chart-unit chart-right-unit">个人(个)</div>
                    </div>
                    <mu-line-chart ref="peopleServerChart" :width='serverWidth' :height='pServerHeight'></mu-line-chart>
                </div>
                <div class="chart-left-title server-trend-title event-title" @click="openTrendPage(getTrendUrl)">
                    益农便民服务趋势 <div class="inner-year">(2018)</div>
                </div>
                <div class="server-trend">
                    <div class="server-trend-total">
                        <div class="s-tt-con">
                            <label for="leijifuwu">累计服务</label>
                            <h4 id="leijifuwu">{{trendTotal}}<span>次</span></h4>
                        </div>
                    </div>
                    <div class="output-unit">
                        <div class="chart-unit">(人次)</div>
                    </div>
                    <div class="output-unit"><div class="trend-unit">(月份)</div></div>
                    <div class="attestation" ref="attestationChart" style="width:2.5rem;height:1.05rem;"></div>
                </div>
            </div>
        </div>
        <el-dialog-guide ref="guideDialog"></el-dialog-guide>
        <el-dialog-page ref="trendDialog"></el-dialog-page>
        <dialog-chart ref='dialogChartPop'></dialog-chart>
    </div>
</template>
<script>
    require("echarts/map/js/province/shanghai.js");
    import ElSelect from '@/components/select/elSelect'
    import ElOption from '@/components/select/elOption'
    import LineChart from '@/components/lineCharts/lineChart'
    import MuLineChart from '@/components/muLineChart/muLineChart'
    import BarChartOutput from '@/components/barCharts/barChart'
    import ElDialogGuide from '@/components/dialog/zdialogGuide'
    import ElDialogPage from '@/components/dialog/zdialogPage'
    import RunNum from '@/components/runNum/runNum'
    import DialogChart from '@/components/dialog/zdialogChart'
    export default {
        name: 'happinessHome',
        data () {
            return {
                happnessCheck:'崇明区',
                curIndex:0,
                elOption:[],
                outputData:{},
                showTestTwo:false,
                outputAttr:{},
                revenueYear:[],
                outputChartClass:'outputChart',
                amountCss:'amountChart',
                amountMoneyAttr:{},
                objectData:{},
                objectAttr:{},
                objWidth:'2.6rem',
                objHeight:'1.08rem',
                serverNoData:{},
                serverNoAttr:{},
                serverWidth:'2.5rem',
                allRevenueData:[],
                serverHeight:'.942rem',
                mapChartEL:null,
                pServerData:{},
                pServerAttr:{},
                mapTable:[],
                mapSHData:[],
                allRevenueChart:null,
                pServerHeight:'1.092rem',
                trendData:{},
                trendAttr:{},
                trendHeight:'1rem',
                trendTotal:0,
                timer:null,
                testNum:1,
                mapIndex:0,
                selectIndex:8,
                proNum:{
                    xcrk:0,
                    zpsr:0,
                    nycz:0
                },
                revenueCharts:null,
                totalTimer:null
            }
        },
        computed:{
            serverMatter(){
                return this.$store.state.serverMatterUrl
            },
            getTrendUrl(){
                return this.$store.state.trendUrl
            },
            getSubsides(){
                return this.$store.state.subsidiesUrl
            },
            getSubObj(){
                return this.$store.state.subObjUrl
            }
        },
        components:{
            ElSelect,
            ElOption,
            MuLineChart,
            LineChart,
            BarChartOutput,
            ElDialogGuide,
            ElDialogPage,
            // RunNum,
            DialogChart
        },
        mounted(){
            this.$nextTick(()=>{
                // this.happnessTotal();
                this.chartMap(this.mapIndex,this.selectIndex);
                this.revenueChart();
                this.amountMoneyChart();
                this.objectChart();
                this.serverNoChart();
                this.peopleServerChart();
                this.getYRdata()
                this.trendChart();
            })
        },
        methods:{
            showChartPop(){
                this.$refs.dialogChartPop.init()
            },
            routeChange(){
                clearInterval(this.totalTimer);
            },
            testTwo(){
                this.$refs.testDialogTwo.init();
            },
            guideShowAuto(){
                var closeShow=false;
                var autoClose=true;
                var autoPlay=false;
                this.$refs.guideDialog.init(closeShow,autoClose,autoPlay)
            },
            guideShow(){
                var closeShow=true;
                var autoClose=false
                var autoPlay=true;
                var isShow=true
                this.$refs.guideDialog.init(closeShow,autoClose,autoPlay,isShow)
            },
            chartMap(index,sIndex){
                var resMap={}
                var mapData=[]
                this.mapChartEL=this.$echarts.init(this.$refs.mapChart);
                var convertData = function (data) {
                    var res = [];
                    for (var i = 0; i < data.length; i++) {
                        var geoCoord = resMap[data[i].name];
                        if (geoCoord) {
                            res.push({
                                name: data[i].name,
                                value: geoCoord.concat(data[i].value)
                            });
                        }
                    }
                    return res;
                };
                var option = {
                    tooltip : {
                        show:false,
                        trigger: 'item',
                        formatter: function(a){
                            return a[2];
                        }
                    },
                    legend: {
                        show:false,
                        data:['数据名称','checkedOne']
                    },
                    geo:{
                        show:true,
                        markPoint:{
                            symbol:'none',
                            symbolSize: 0,
                        },
                        roam: false,
                        left:0,
                        right:'15%',
                        top:5,
                        map:'上海',
                        label: {
                            show:false,
                            color:'#CCC',
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
                                    color: 'rgba(26, 133,209, 0)' // 100% 处的颜色
                                }],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(57, 118, 161, 1)',
                            shadowOffsetX: -2,
                            shadowOffsetY: 3,
                            shadowBlur: 0
                        },
                        emphasis:{
                            label:{
                                show:false
                            },
                            itemStyle:{
                                areaColor:{
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
                                show:false
                            }
                        },
                    },
                    series : [
                        {
                            name:'数据名称',
                            type: "scatter",
                            coordinateSystem: "geo",
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
                            name:'checkedOne',
                            type: 'effectScatter',
                            coordinateSystem: 'geo',
                            rippleEffect: {
                                period:15,
                                scale: 10,
                                brushType: 'stroke'
                            },
                            symbolSize: function (val) {
                                return val[2] / 20;
                            },
                            showEffectOn: 'render',
                            hoverAnimation: true,
                            label: {
                                normal: {
                                    formatter: '{b}',
                                    position: 'right',
                                    color:'#ffffff',
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
                                        globalCoord: true // 缺省为 false
                                    },
                                    shadowBlur: 0,
                                    shadowColor: '#25fffb'
                                }
                            },
                            zlevel: 1
                        }
                    ]
                };
                this.$http({
                    url: this.$http.adornUrl('/sygc/xfly/hxzbdqfb'),
                    method: 'get',
                    params: this.$http.adornParams()
                }).then(({data}) => {
                    var dataList=data.data.page
                    this.elOption=dataList.xaxis.map((item,index)=>{
                        return {value:index,label:item}
                    })
                    this.mapSHData=dataList.series.map((item,index)=>{
                        item=item.map((childItem,childIndex)=>{
                            return {
                                name:dataList.xaxis[childIndex],
                                value:childItem
                            }
                        })
                        return item
                    })


                    var arrTable=[]
                    for(var i=0;i<dataList.xaxis.length;i++){
                        arrTable.push([])
                        for(var j=0;j<dataList.legend.length;j++){
                            arrTable[i].push({
                                xh:this.formatNum(j+1),
                                xm:dataList.legend[j],
                                nr:dataList.series[j][i],
                            })
                        }
                    }
                    this.mapTable=arrTable[sIndex]
                }).then(()=>{
                    this.$http({
                        url:this.$http.adornUrl('/sygc/json/shanghai.json'),
                        methods:'get',
                        params:this.$http.adornParams()
                    }).then(({data})=>{
                        data.features.forEach(item=>{
                            resMap[item.properties.name]=item.properties.cp
                        })
                        var effectSData=[convertData(this.mapSHData[index])[sIndex]]
                        var scatterData=convertData(this.mapSHData[index]).filter((item,findex)=>findex!=sIndex);
                        var selectVal=convertData(this.mapSHData[index])[sIndex].value[2]
                        var minNum=0;
                        var minNumArr=convertData(this.mapSHData[index]).filter(item=>item.value[2]!='—')
                        minNumArr=minNumArr.map(item=>item.value[2])
                        minNum=Math.min(...minNumArr);

                        this.mapChartEL.setOption({
                            series:[{
                                data:scatterData,
                                symbolSize: function (val) {
                                    if(val[2]=='—'){
                                        return 0
                                    }else{
                                        val[2]=val[2]/minNum<=1.56?val[2]*2:val[2];
                                        return Math.abs(val[2] / minNum *8)>20?20:Math.abs(val[2] / minNum *8)
                                    }
                                },
                            },{
                                type: 'effectScatter',
                                data:effectSData,
                                rippleEffect: {
                                    period:5,
                                    scale: 8,
                                    brushType: 'stroke'
                                },
                                symbolSize: function (val) {
                                    if(val[2]=='—'){
                                        return 1
                                    }else{
                                        val[2]=val[2]/minNum<=1.56?val[2]*2:val[2];
                                        return Math.abs(val[2] / minNum *8)>35?35:Math.abs(val[2] / minNum *8)
                                    }
                                },
                                showEffectOn: 'render',
                            }]
                        })
                    })

                    this.mapChartEL.setOption(option);
                })
            },
            selectChange(value){
                if(this.happnessCheck!=value){
                    this.mapIndex=0
                    this.selectIndex=value;
                    this.mapChartEL.dispose()
                    this.chartMap(this.mapIndex,this.selectIndex)
                }else{
                    return
                }
            },
            changeMap(index){
                this.mapIndex=index;
                this.mapChartEL.dispose()
                this.chartMap(this.mapIndex,this.selectIndex)
            },
            formatNum(num){
                if(num<=0){
                    return '0'+num
                }else{
                    return num
                }
            },
            happnessTotal(){
                this.$refs.proNumNycz.init(0,50)
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/dtzb'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page.series;
                        this.$refs.proNumXcrk.init(0,data.data.page.series[0][0])
                        this.$refs.proNumZpsr.init(0,data.data.page.series[1][0])

                        //    this.totalTimer=setInterval(()=>{
                        //        if(!this.$refs.proNumXcrk)return
                        //         this.$refs.proNumXcrk.init(0,data.data.page.series[0][0])
                        //         if(!this.$refs.proNumZpsr)return
                        //         this.$refs.proNumZpsr.init(0,data.data.page.series[1][0])
                        //         if(!this.$refs.proNumNycz)return
                        //         this.$refs.proNumNycz.init(0,data.data.page.series[2][0])
                        //    },6000)
                        this.proNum={
                            xcrk:data.data.page.series[0][0],
                            zpsr:data.data.page.series[1][0],
                            nycz:data.data.page.series[2][0]
                        }
                    }
                })
            },
            revenueChart(){
                this.revenueCharts=this.$echarts.init(this.$refs.revenueChart)
                var option = {
                    animationEasing:'quadraticOut',
                    animationDuration:'800',
                    color:'#02cfd2',
                    grid: {
                        top: '8%',
                        left: '12%',
                        right:'12%',
                        bottom: '9%',
                        containLabel: true
                    },
                    tooltip: {
                        show:false,
                        trigger: 'axis',
                        axisPointer: {
                            type: 'none'
                        }
                    },
                    legend:{
                        show:false
                    },
                    xAxis: [{
                        type: 'category',
                        show: true,
                        axisLabel: {
                            interval:0,
                            textStyle: {
                                color: '#ffffff'
                            },
                            fontSize:'8%'
                        },
                        boundaryGap: false,
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                    },
                    ],
                    yAxis: [{
                        show: false,
                        offset: 0,
                        splitLine: {
                            show: false,
                            lineStyle: {
                                color: "rgba(255,255,255,0.2)"
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        axisLine: {
                            show: false
                        },
                        axisLabel: {
                            show: false,
                            color: '#b6b5ab'
                        }
                    }],
                    animationEasingUpdate: 'quinticInOut',
                    series: []
                }
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/ncczjmkzpsr'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        option.xAxis[0].data=dataList.xaxis;
                        option.legend.data=dataList.legend;
                        option.series[0]={
                            name:dataList.legend,
                            data:dataList.series[0],
                            type: 'pictorialBar',
                            barCategoryGap: '25%',
                            symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                            itemStyle: {
                                normal: {
                                    borderWidth:1,
                                    borderColor:'#02cfd2',
                                    borderType:'solid',
                                    label: {
                                        show: true,
                                        position: 'top',
                                        fontSize:'8%',
                                        textStyle: {
                                            color: 'white'
                                        },
                                        formatter:function(params){
                                            return params.value+'元'
                                        }
                                    },
                                    color: function(params) {
                                        let colorList = [
                                            'rgba(2,231,232,0.3)','rgba(2,231,232,0.3)',
                                            'rgba(2,231,232,0.3)','rgba(2,231,232,0.3)'
                                        ];
                                        return colorList[params.dataIndex];
                                    }
                                },
                                emphasis: {
                                    opacity: 1
                                }
                            }
                        }
                        this.revenueCharts.setOption(option);

                    } })

            },
            allRevenueChartEv(){
                var colorArray = [
                    {
                        top: '#63f5fb',
                        bottom: 'rgba(11,42,84,.3)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }, {
                        top: '#5396d3',
                        bottom: 'rgba(83,150,211,.2)'
                    }
                ];
                this.allRevenueChart=this.$echarts.init(this.$refs.allRevenueCharts)
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/ncczjmkzpsrfb'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    var dataList=data.data.page.series.map((item,index)=>{
                        item=item.map((childItem,childIndex)=>{
                            return {
                                name:data.data.page.xaxis[childIndex],
                                value:childItem
                            }
                        })
                        var arrZero=item.filter(zeroItem=>zeroItem.value=="")

                        item=item.filter(filterItem=>filterItem.value!="")
                        this.sortArr(item)
                        arrZero.forEach(forItem=>{
                            forItem.value=0
                            item.push(forItem)
                        })
                        return item
                    })

                    dataList=dataList.reverse()
                    data.data.page.legend=data.data.page.legend.reverse()
                    for(var i=0;i<dataList.length;i++){
                        this.allRevenueData.push({
                            'category':'year',
                            'date':parseInt(data.data.page.legend[i]).toString(),
                            'data':dataList[i]
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
                                right: "5%",
                                top: '10%',
                                label: {
                                    show: true,
                                    interval: 0,
                                    textStyle: {
                                        color: 'rgba(53,241,255,1)',
                                        fontSize:'8%'
                                    }
                                },
                                emphasis: {
                                    checkpointStyle:{
                                        color: 'rgba(53,241,255,1)'
                                    }
                                },
                                lineStyle: {
                                    color: '#ccc',
                                    show: false
                                },
                                symbol: 'none',
                                symbolOffset:[0,'680%'],
                                checkpointStyle: {
                                    symbol: 'rect',
                                    symbolSize:[35,3],
                                    color: 'rgba(53,241,255,1)',
                                    show: true,
                                    borderWidth: 0
                                },
                                controlStyle: {
                                    show:false,
                                },
                                data: this.allRevenueData.map(function(ele) {
                                    return ele.date
                                })
                            },
                            title: [{
                                show:false,

                            }],
                            grid: {
                                left: '6%',
                                top: '20%',
                                right: '0',
                                bottom: '0',
                                containLabel: true
                            },
                            xAxis: {},
                            yAxis: {},
                            series: [

                                {
                                    id: 'bar',
                                    type: 'bar',
                                    barWidth: '5',
                                    tooltip: {
                                        show: false
                                    },
                                    label: {
                                        normal: {
                                            show: true,
                                            position: 'right',
                                            textStyle: {
                                            }
                                        }
                                    },
                                    data: []
                                },

                            ]
                        },
                        options: []
                    }

                    for (let i = 0; i < this.allRevenueData.length; i++) {
                        option.options.push({
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
                                show:true,
                                type: 'category',
                                axisTick: {
                                    show: false
                                },
                                axisLine:{
                                    show:false
                                },
                                inverse:true,
                                axisLabel: {
                                    show: true,
                                    textStyle: {
                                        color: '#fff',
                                        fontSize:'8%'
                                    }
                                },

                                data: this.allRevenueData[i].data.map(function(ele) {
                                    return ele.name
                                })
                            },
                            series: [
                                {
                                    id: 'bar',
                                    itemStyle: {
                                        normal: {
                                            color: function(params) {
                                                let num = colorArray.length;
                                                return {
                                                    type: 'linear',
                                                    colorStops: [{
                                                        offset: 0,
                                                        color: colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color: colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color: colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }, {
                                                        offset: 0,
                                                        color:colorArray[params.dataIndex % num].bottom
                                                    }, {
                                                        offset: 1,
                                                        color:colorArray[params.dataIndex % num].top
                                                    }],
                                                }
                                            },
                                            label: {
                                                show: true,
                                                position: 'top',
                                                formatter: '{c}%',
                                                fontSize:'8%'
                                            }
                                        }
                                    },
                                    label: {
                                        normal: {
                                            position: 'right',
                                            formatter:function(params){
                                                if(params.value=='' || params.value==null  || params.value<=0){
                                                    return '暂无数据'
                                                }else{
                                                    return  params.value+'元'
                                                }
                                            },
                                            color: '#fff'
                                        }
                                    },
                                    barWidth: 5,
                                    data: this.allRevenueData[i].data
                                },{
                                    name: '白框',
                                    type: 'bar',
                                    barGap: '-100%',
                                    data: [58000,58000,58000,58000,58000,58000,58000,58000],
                                    barWidth: 5,
                                    itemStyle: {
                                        normal: {
                                            color: 'rgba(53,241,255,.07)',
                                            barBorderRadius: 0,
                                        }
                                    },
                                    z: 1
                                }

                            ]
                        })
                    }
                    this.allRevenueChart.setOption(option)
                })
            },
            sortArr(arr){
                for(var i=1;i<arr.length;i++){
                    for(var j=i; j<arr.length; j++){
                        if(arr[i].value==""){arr[i].value=0}
                        if(arr[j].value==""){arr[j].value=0}
                        if (parseInt(arr[i].value) < parseInt(arr[j].value)) {
                            var max=arr[j];
                            arr[j]=arr[i];
                            arr[i]=max;
                        }
                    }
                }
                return arr
            },
            getYRdata(){
                this.allRevenueChartEv()
            },
            outputChart(){
                this.$set(this.outputAttr,'pageList',{
                    colorList:['#35f1ff','#5396d3','#cceff1','#ed7d31','#ffbe00'],
                    tooltip:{show:true},
                    unit:'亿元',
                    xUnit:'年',
                    legend:{
                        show:true,
                        itemGap: 18,
                        itemWidth: 8,
                        itemHeight: 8,
                        yPos:'bottom',
                    },
                    grid:{
                        yOne:'6%',
                        yTwo:42,
                        gridXOne:'17%',
                        gridXTwo:'6%',
                    },
                    yAxis:{min:0,splitNum:4},
                    series:{
                        barMaxWidth:5,
                    }
                })
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/lnnyzcz'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        console.log(dataList);

                        dataList.xaxis=dataList.xaxis.map(item=>parseInt(item))
                        this.$refs.outputChart.init(this.outputAttr,dataList);
                        this.$refs.outputChart.chartPopUp()
                    }
                })
            },
            amountMoneyChart(){
                this.$set(this.amountMoneyAttr,'pageList',{
                    colorList:['#04f4fb','#fbb919'],
                    tooltip:{show:true},
                    unit:'亿元',
                    xUnit:'年',
                    legend:{
                        show:true,
                        itemGap: 50,
                        itemWidth: 8,
                        itemHeight: 8,
                        yPos:'3%',
                        fontSize:'8%',
                        xPos:'center'
                    },
                    grid:{
                        yOne:'15%',
                        yTwo:'14%',
                        gridXOne:'8%',
                        gridXTwo:'1%',
                    },
                    yAxis:{min:0,splitNum:6},
                    series:{
                        barMaxWidth:8,
                    }
                })
                console.log(this.amountMoneyAttr);

                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/ndbtje'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        dataList.xaxis=dataList.xaxis.map(item=>parseInt(item));
                        this.$refs.amountMoneyChart.init(this.amountMoneyAttr,dataList);
                        this.$refs.amountMoneyChart.openSubsidies(this.getSubsides);
                    }
                })
            },
            objectChart(){
                this.$set(this.objectAttr,'pageList',{
                    colorList:['#04f4fb','#fbb919'],
                    unit:['户','个'],
                    xUnit:'年',
                    legend:{show:true,fontSize:'8%',},
                    grid:{xPos:'16%',yPos:'17%',xPosR:'12%',yPosB:'14%'},
                    yAxis:{minL:0,maxL:30000,splitNum:3,minR:0,maxR:5000},
                    series:{symbol:true,symbolMark:false}
                })
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/ndbtdx'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        dataList.xaxis=dataList.xaxis.map(item=>parseInt(item));
                        this.$refs.objectChart.init(this.objectAttr,dataList)
                        this.$refs.objectChart.openServerUser(this.getSubObj)
                    }
                })
            },
            serverNoChart(){
                this.$set(this.serverNoAttr,'pageList',{
                    legend:{show:false},
                    unit:'项',
                    xUnit:'年',
                    grid:{xPos:'10%',yPos:'15%',xPosR:'4%',yPosB:'14%'},
                    yAxis:{split:4,min:40},
                    series:{symbol:true,symbolMark:false}
                })
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/xzspfwsl'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        dataList.xaxis=data.data.page.xaxis.map(item=>parseInt(item))
                        dataList.series=data.data.page.series.map(item=>{
                            item=item.map(childItem=>{
                                if(childItem=="" || childItem==null){
                                    childItem=0
                                }
                                return childItem
                            })
                            return item

                        })
                        this.$refs.serverNoChart.init(this.serverNoAttr,dataList)
                        this.$refs.serverNoChart.openServerMatter(this.serverMatter)
                    }
                })
            },
            peopleServerChart(){
                this.$set(this.pServerAttr,'pageList',{
                    colorList:['#04cfda','#fbb919'],
                    unit:['家','个'],
                    xUnit:'年',
                    legend:{show:true},
                    grid:{xPos:'13%',yPos:'20%',xPosR:'14%',yPosB:'12%'},
                    yAxis:{splitNum:3},
                    series:{symbol:true,symbolMark:true}
                })
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/xzsbfwrs'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        dataList.xaxis=dataList.xaxis.map(item=>parseInt(item))
                        dataList.series=data.data.page.series.map(item=>{
                            item=item.map(childItem=>{
                                if(childItem=="" || childItem==null){
                                    childItem=0
                                }
                                return childItem
                            })
                            return item
                        })
                        this.$refs.peopleServerChart.init(this.pServerAttr,dataList);
                        this.$refs.peopleServerChart.openServerUser(this.serverMatter);
                    }
                })
            },
            trendChart(){
                var imgUrl=['image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAVlJREFUKBVNUbFOQkEQnD1RTAwYiTZEE40FVnZSSGigMjT6A7ZaYKKlCYWJsbTSQr9CGzqxIVgQPkAKiRWFGIgQiqfy1tmnT9hmbnbmbueygolKDzSnQEZ8pNShKUCtHpPH0EIOZAe65CluVbEXCiGK4C4qOKjGpCNnqq48QBWKbQjeneLGn8KzG2HDFxyyv8j+UyGGrCv3UQyMQIumTY5/kxF2DI1zQst080n6Qx+YM+8Eu4yR5/noPwJwxRgVX3HPvBUzd2lYiMaR+Ozjxc4T5t5MHOteH12ae4yIrom+hwSzdUJjgORBn8R8jtgw4cvDvihOeBwaZw350rH1fykabjqCS+Ya8dVTOCzPOqw5h5whP7lifdMDn93aGmgJPs6DFwRt5mtybIqzk9YThxKXcxEsxRr8aIFwTdOqcSuKr4RifV7Kf9xgXJmhJr+57gjXXZuT9lgBfgB7Fn8YCYOrVQAAAABJRU5ErkJggg==']
                this.attestation=this.$echarts.init(this.$refs.attestationChart);
                let options={
                    color:'#35eeff',
                    title: {
                        show:false,
                    },
                    tooltip:{
                        show:true,
                        trigger:'axis',
                        axisPointer:{
                            lineStyle:{
                                width:0
                            },
                            label:{
                                fontSize:'13%'
                            }
                        },
                        formatter:function(params){
                            let list = []
                            let listItem = ''
                            for (var i = 0; i < params.length; i++) {
                                list.push(
                                    '<i style="display: inline-block;width: 10px;height: 10px;background: ' +
                                    params[i].color +
                                    ';margin-right: 5px;border-radius: 50%;}"></i><span style="padding-right:10px;font-size:14px">' +
                                    params[i].seriesName +
                                    '</span>' +
                                    params[i].value+
                                    '人次'
                                )
                            }
                            listItem = list.join('<br>')
                            return '<div class="showBox"><span style="display:block;font-size:14px">'+params[0].axisValue+'月</span>' + listItem + '</div>'

                        }
                    },
                    legend:{
                        show:false,
                        data:[]
                    },
                    grid: {
                        top: '16%',
                        left: '17%',
                        right: '2%',
                        bottom: '18%',
                    },
                    xAxis: [{
                        type: 'category',
                        boundaryGap: false,
                        data: ['1', '2', '3', '4','5', '6', '7', '8','9', '10', '11', '12'],
                        axisLabel: {
                            color: '#ffffff',
                            fontSize:'8%',
                            interval:0
                        },
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false,
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                                color:'rgba(23,76,110,.2)'
                            }
                        }
                    }],
                    yAxis: [{
                        type: 'value',
                        position: 'left',
                        offset:0,
                        axisLabel:{
                            margin:13,
                            fontSize:'8%',
                            color:'#ffffff'
                        },
                        max : 150000,
                        min : 0,
                        splitNumber:3,
                        scale : true,
                        boundaryGap : [ 0.2, 0.2 ],
                        axisTick: {
                            show: false,
                            length: 5,
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                                color:'rgba(23,76,110,.2)'
                            }
                        },
                        axisLine: {
                            show:false,
                        }
                    }],
                    series: []
                }
                this.$http({
                    url:this.$http.adornUrl('/sygc/xfly/ynsfwqs'),
                    methods:'get',
                    params:this.$http.adornParams()
                }).then(({data})=>{
                    if(data.data && data.data.code==0){
                        var dataList=data.data.page
                        this.trendTotal=dataList.series[0][0];
                        options.xAxis[0].data=dataList.xaxis.filter((item,index)=>{return index>0});
                        options.xAxis[0].data=options.xAxis[0].data.map(item=>parseInt(item))
                        var seriesData=dataList.series[0].filter((item,index)=>{return index>0})
                        options.legend.data=dataList.legend;
                        options.series=[{
                            name:options.legend.data,
                            data:seriesData,
                            smooth: true,
                            type:'line',
                            showAllSymbol: false,
                            symbol:'none',
                            lineStyle: {
                                normal: {
                                    color: "#65F9FF", // 线条颜色
                                },
                            },
                            label: {
                                show: false,
                            },
                            areaStyle: {
                                normal: {
                                    color: {
                                        type: 'linear',
                                        x: 0,
                                        y: 0,
                                        x2: 0,
                                        y2: 1,
                                        colorStops: [{
                                            offset: 0, color: 'rgba(101,249,255,.5)'
                                        }, {
                                            offset: 1, color:'rgba(101,249,255,0)'
                                        }],
                                        global: false
                                    }
                                }
                            }
                        },
                            {
                                name:'最多服务人次',
                                symbol: imgUrl[0],
                                symbolSize: 8,
                                type:'line',
                                showAllSymbol: true,
                                lineStyle: {
                                    normal: {
                                        color: "rgba(0,0,0,0)", // 线条颜色
                                    },
                                },
                                label: {
                                    show: true,
                                    color:'#ffffff',
                                    fontSize:'8%',
                                    offset:[0,12],
                                    formatter:function(params){
                                        return params.value+'人次'
                                    }
                                },
                                tooltip:{
                                    show:false
                                },
                                data:this.findNum(seriesData,'max')
                            },{
                                name:'最少服务人次',
                                symbol: imgUrl[0],
                                symbolSize: 8,
                                type:'line',
                                showAllSymbol: true,
                                lineStyle: {
                                    normal: {
                                        color: "rgba(0,0,0,0)",
                                    },
                                },
                                label: {
                                    show: true,
                                    color:'#ffffff',
                                    fontSize:'8%',
                                    formatter:function(params){
                                        return params.value+'人次'

                                    }
                                },
                                tooltip:{
                                    show:false
                                },
                                data:this.findNum(seriesData,'min')
                            }
                        ]
                        this.attestation.setOption(options)
                        if(!this.attestation)return
                        var _this=this
                        this.attestation.getZr().on('click',function(){
                            _this.$refs.trendDialog.init(_this.getTrendUrl);
                        })
                        // setInterval(()=>{
                        //     if(!this.attestation){return}
                        //     this.attestation.clear()
                        //     this.attestation.setOption(options)
                        // },10000)
                    }
                })
            },
            openTrendPage(url){
                this.$refs.trendDialog.init(url);
            },
            findNum(arrNum,bOs){
                arrNum=arrNum.map(item=>parseInt(item))
                var singleNum
                if(bOs=='max'){
                    singleNum=Math.max(...arrNum);
                }else if(bOs=='min'){
                    singleNum=Math.min(...arrNum);
                }
                var indexOfNum=arrNum.indexOf(singleNum);
                var newNum=[]
                arrNum.forEach((item,index)=>{
                    if(index==indexOfNum){
                        newNum.push(singleNum)
                    }else{
                        newNum.push('')
                    }
                })
                return newNum
            }
        }
    }
</script>
