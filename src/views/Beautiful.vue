<template>
    <div class="beautiful-wrap">
        <div class="chart-main clearfix">
            <div class="chart-left">
                <div class="chart-left-title">美丽乡村、乡村振兴示范村奖励 <div class="inner-year">(2019)</div></div>
                <div class="reward-chart">
                    <h4><label>合计</label>4.6<span>亿元</span></h4>
                    <div class="chart-unit">(千万元)</div>
                    <bar-chart-output ref="rewardCharts" :classNameP='rewardCss'></bar-chart-output>
                </div>
                <div class="chart-left-title">
                    市政基础设施
                </div>
                <div class="basic-facility">
                    <div class="year-plane event-title">
                        <ul>
                            <li><span class="year-plane-label">新改建道路</span><span class="year-plane-data"><em>60</em>公里</span></li>
                            <li><span class="year-plane-label">提升改建桥梁</span><span class="year-plane-data"><em>79</em>座</span></li>
                            <li><span class="year-plane-label">整理架空线</span><span class="year-plane-data"><em>50</em>公里</span></li>
                        </ul>
                    </div>
                    <div class="public-service-line">
                        <span class="basic-icon"></span>
                        <div class="public-service-info">
                            <label for="shenghuolaji">新改建生活垃圾处理设施</label>
                            <div id="shenghuolaji" class="public-service-total"><span><em>48</em>座</span></div>
                        </div>
                    </div>
                    <div class="basic-sewage">
                        <div class="sewage-label">
                            生活污水处理率
                        </div>
                        <div class="basic-sewage-chart">
                            <progress-chart ref="basicSewage" :classNameP='basicRange'></progress-chart>
                        </div>
                    </div>
                </div>
                <div class="chart-left-title">
                    农村相对集中居住
                </div>
                <div class="live-centralize">
                    <div class="live-centralize-left live-centralize-line">
                        <label for="shenonghushu">涉及农户数</label>
                        <div id="shenonghushu" class="live-centralize-count"><em>270</em>户</div>
                    </div>
                    <div class="live-centralize-right live-centralize-line">
                        <label for="juzhudianmianji">居住点面积</label>
                        <div id="juzhudianmianji" class="live-centralize-count"><em>17</em>公顷</div>
                    </div>
                    <div class="centralize-center">
                        <div class="center-circle">
                            <span class="center-circle-icon"><img src="@/assets/images/icon-country.png" alt=""></span>
                            <div class="live-centralize-count"><em>3</em>个</div>
                        </div>
                        <div class="center-label">建成平移集中居住点</div>
                    </div>
                </div>
            </div>
            <div class="chart-middle">
                <div class="village-show">
                    <div class="village-map-data clearfix">
                        <div class="village-box-data">
                            <div class="village-title">
                                <div class="select-map clearfix">
                                    <el-select v-model='rangeCheck' ref='selectCheck'  @change='selectChange'>
                                        <el-option  v-for="item in elOptionData" :label='item.label' :value='item.value' :key='item.value'></el-option>
                                    </el-select>
                                </div>
                                <div class="view-photo" @click="viewPhoto"><img src="@/assets/images/view-img.png" alt=""></div>
                            </div>
                            <div class="map-chart-tab clearfix">
                                <div class="map-chart-title">
                                    <div class="map-chart-line">
                                        <ul>
                                            <li v-for="(item,index) in currentMapData.mapTableData" :key=index :class="{active:index==0}">
                                                <span class="chart-v-icon"><img :src="require('@/assets/images/b-c-icon'+(index+1)+'.png')" alt=""></span>
                                                <div class="chart-v-data">
                                                    <div class="chart-v-no">{{item.nr}}<i class="chart-v-unit">{{item.unit}}</i></div>
                                                    <div class="chart-v-label">{{item.xm}}</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="map-chart" ref="mapChart"></div>
                            </div>
                        </div>
                        <div class="village-altered">
                            <div class="village-alltered-list swiper-village-container">
                                <ul class="swiper-wrapper">
                                    <li class="swiper-slide"><img :src="flyimg" alt=""></li>
                                    <li class="swiper-slide"><img :src="mapRangeSrc" alt=""></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chart-right">
                <div class="chart-left-title">生态环境建设</div>
                <div class="construction-list clearfix">
                    <div class="construction-left construction-line">
                        <div class="construction-icon"><img src="@/assets/images/river.png" alt=""></div>
                        <div class="construction-info">
                            <label for="hedaozhengzhi">河道整治</label>
                            <div id="hedaozhengzhi" class="live-centralize-count"><em>62</em>公里</div>
                        </div>
                    </div>
                    <div class="construction-right construction-line">
                        <div class="construction-info">
                            <label for="lvhuazaolin">绿化造林</label>
                            <div id="lvhuazaolin" class="live-centralize-count"><em>21</em>万平方米</div>
                        </div>
                        <div class="construction-icon construction-right-icon"><img src="@/assets/images/forest.png" alt=""></div>
                    </div>
                </div>
                <div class="chart-left-title">新产业新业态建设</div>
                <div class="new-construction-list">
                    <ul>
                        <li>
                            <label for="xiuxiannongye">建成休闲农业乡村旅游景点</label>
                            <span id="xiuxiannongye">28 <i>个</i></span>
                        </li>
                        <li>
                            <label for="shichangzhuti">引入市场主体</label>
                            <span id="shichangzhuti">60 <i>家</i></span>
                        </li>
                        <li>
                            <label for="panhuo">盘活农宅建成餐饮、民宿</label>
                            <span id="panhuo">73 <i>个</i></span>
                        </li>
                        <li>
                            <label for="lvyou">建成旅游服务中心</label>
                            <span id="lvyou">6150 <i>平方米</i></span>
                        </li>
                        <li>
                            <label for="qiyezongbu">盘活闲置用房建成文化创意、企业总部等</label>
                            <span id="qiyezongbu">71 <i>个</i></span>
                        </li>
                    </ul>
                </div>
                <div class="chart-left-title">
                    公共服务设施
                </div>
                <div class="public-service">
                    <div class="public-service-line p-s-item clearfix">
                        <span class="public-service-icon"></span>
                        <div class="public-service-info">
                            <label for="gongong">新改建村公共服务用房</label>
                            <div id="gongong" class="public-service-total"><span><em>3</em>万平方米</span><span><em>67</em>个</span></div>
                        </div>
                    </div>
                    <div class="public-service-chart clearfix">
                        <div class="public-service-left">
                            <guage-chart  ref="publicServiceLeft"></guage-chart>
                        </div>
                        <div class="public-service-right">
                            <guage-chart  ref="publicServiceRight"></guage-chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog-guide ref="guideDialog"></el-dialog-guide>
        <el-dialog-view ref="viewDialog"></el-dialog-view>
    </div>
</template>

<script>
import ElDialogGuide from '@/components/dialog/zdialogGuide'
import ElDialogView from '@/components/dialog/zdialogView'
import GuageChart from '@/components/gaugeCharts/gaugeChart'
import RunNum from '@/components/runNum/runNum'
import ElSelect from '@/components/select/elSelect'
import ElOption from '@/components/select/elOption'
import BarChartOutput from '@/components/barCharts/barChart'
import ProgressChart from '@/components/progressCharts/progressChart'
require('echarts/map/js/province/shanghai.js')
export default {
  data () {
    return {
      mapTable: [],
      mapSHData: [],
      mapChartEL: null,
      mapIndex: 0,
      rangeCheck: '赵桥村—浦东新区大团镇',
      publicServiceLeftChart: null,
      basicRange: 'basic-range',
      rewardCss: 'reward-css',
      rewardAttr: {},
      currentMapData: {},
      mapTimer: null,
      mapRangeSrc: '',
      flyimg: '',
      srcUrl: [],
      files: [],
      contrastUrl: [],
      selectIndex: 0,
      elOptionData: [],
      changeIndex: 0
    }
  },
  components: {
    ElDialogGuide,
    ElDialogView,
    GuageChart,
    ProgressChart,
    // RunNum,
    BarChartOutput,
    ElSelect,
    ElOption
  },
  mounted () {
    this.$nextTick(() => {
      this.rewardChart()
      this.basicSewageChart()
      this.publicServiceChart()
      this.chartMap()
    })
  },
  methods: {
    publicServiceChart () {
      this.$refs.publicServiceLeft.init([{ name: '智能安防', value: 100 }])
      this.$refs.publicServiceRight.init([{ name: '阳光村务', value: 100 }])
    },
    rewardChart () {
      var dataList = {
        legend: ['金额'],
        series: [
          ['7', '4.2', '2.6', '2.6', '6', '3.6', '6.8', '5.4', '8.2']
        ],
        xaxis: ['浦东', '宝山', '闵行', '嘉定', '金山', '松江', '青浦', '奉贤', '崇明']
      }
      this.$set(this.rewardAttr, 'pageList', {
        colorList: ['#32f3ff', '#5295db'],
        tooltip: { show: true },
        unit: '千万元',
        xUnit: '',
        legend: {
          show: false,
          itemGap: 50,
          itemWidth: 14,
          itemHeight: 5,
          yPos: '7%',
          fontSize: '8%',
          xPos: 'center'
        },
        grid: {
          yOne: '28%',
          yTwo: '15%',
          gridXOne: '11%',
          gridXTwo: '1%'
        },
        yAxis: { min: 0, splitNum: 2 },
        series: {
          barMaxWidth: 10
        }
      })
      this.$refs.rewardCharts.init(this.rewardAttr, dataList)
    },
    basicSewageChart () {
      var dataListOne = {
        series: {
          data: [[100]]
        },
        seriesEnd: {
          data: [[100]]
        }
      }
      this.$refs.basicSewage.init(dataListOne)
    },
    viewPhoto () {
      this.$refs.viewDialog.init(this.currentMapData, this.contrastUrl, 2, 0)
    },
    selectChange (obj) {
      this.chartMap(obj)
    },
    getData () {
      if (this.currentMapData) {
        var urlId = this.currentMapData.id
        var files = require.context('@/assets/images', true, /.(png|jpg)$/).keys()
        var viewBefore = files.filter((item) => {
          return item.indexOf(urlId + '/before') >= 0
        })
        var arrUrl = []
        for (var i = 0; i < viewBefore.length; i++) {
          arrUrl.push({
            before: urlId + '/before/' + urlId + '-before-' + (i + 1) + '.jpg',
            after: urlId + '/after/' + urlId + '-after-' + (i + 1) + '.jpg'
          })
        }
        this.contrastUrl = arrUrl
      }
    },
    chartMap (numVal) {
      var mapData = []
      this.mapChartEL = this.$echarts.init(this.$refs.mapChart)
      var dataList = {
        '赵桥村': {
          id: 'zqc',
          name: '赵桥村',
          area: '浦东新区',
          town: '大团镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '2.97',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '1675',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '3751',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '43.11',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '67.93',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '48.04',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '赵桥村，水蜜桃主产区。随着乡村振兴战略的实施以及浦东新区美丽庭院和家门口服务体系的建设，围绕“环境清洁、摆放有序、布置协调、合理种植、田园农趣”五个重点打造内容，清理垃圾、捐献积余建筑材料、打造文化墙……融入当地的乡土风情，来营造各具特色的农趣庭院。自2017年5月以来，浦东新区着力推进打造15分钟基本公共服务圈全覆盖，推动各类服务资源下沉到村居，赵桥村的“四站一室”（党建服务站、市民事项受理服务站、文化服务站、联勤联动站、村卫生室）建设齐全，真正实现了公共服务便利化、公共管理精细化、公共安全现代化。',
          iframeUrl: 'https://720yun.com/t/4avkn9fbz17?scene_id=29690392',
          videoShow: true
        },
        '塘湾村': {
          id: 'twc',
          name: '塘湾村',
          area: '宝山区',
          town: '罗泾镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '1.56',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '378',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1283',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '38.79',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '47.6',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '18.06',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '塘湾村瞄准“大生态”资源禀赋，以“大健康”为产业发展方向，借助“大智慧”手段，进一步激活乡村资源价值，打造了全国第一个母婴康养村。森林覆盖率约占村域总面积的40%；产出了曾获上海市金奖的“宝农34”大米；一座座欧式风情的农家洋房，与乡间景色融为一体；20余条村级河道纵横交错，展现了独特的江南水乡风韵。在践行乡村振兴的道路上，配合康养主题，村里引入以萱草为主题的母亲花文化园，萤火虫复育与科普基地等项目，全面建设“养生塘、生态湾、智慧村”。',
          iframeUrl: '',
          videoShow: true
        },
        '革新村': {
          id: 'gxc',
          name: '革新村',
          area: '闵行区',
          town: '浦江镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '2.27',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '608',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '2437',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '62.05',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '56.82',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '10.21',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '革新村通过“归并”走上了振兴路。整个革新村232户村民，分散在17个自然农居点板块中，平均每个农居点板块仅13户。目前，保留区域84户全部完成风貌提升；平移集中居住签约户占比90%，124幢已结构封顶，计划于年底实现装修入住；24户进城镇集中居住方案已初步锁定，即刻启动签约。通过“四个统一”的风貌管控原则，很好地保留了江南水乡的韵味，村民配套设施也很完备。停车场、健身点一应俱全，互助式养老中心、垃圾厢房改造、天然气入户、架空线梳理等工程也即将完工。',
          iframeUrl: '',
          videoShow: false
        },

        '向阳村': {
          id: 'xyc',
          name: '向阳村',
          area: '嘉定区',
          town: '安亭镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '2.12',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '291',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1267',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '91.56',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '37.23',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '27.47',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '向阳村，“智慧村庄”。2016年，嘉定区安亭镇向阳村与中国电信合作，启动了“智慧村庄”建设。目前成为全市首个千兆宽带入户村。“AI向阳”包括了管理后台、监控大屏、电子沙盘、电子引导屏、触摸屏和AI向阳公众号六大板块。“AI向阳”项目运用物联网、大数据等技术，实现全村的Wi-Fi覆盖、路灯控制、安防监控、空气监测、人群感知等智能应用。管理后台整合了向阳村基础的人口、房屋等民生数据、各个物联网设备数据和公众号数据，这些数据和信息最终通过监控大屏、电子沙盘、触摸屏、公众号、电子屏等实现实时推送，与村民游客进行互动，实现了智慧村庄的精细化管理，提升了村庄治理的信息化和智能化水平。向阳村还投入了一批60个智慧景观路灯。',
          iframeUrl: '',
          videoShow: false
        },
        '水库村': {
          id: 'skc',
          name: '水库村',
          area: '金山区',
          town: '漕泾镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '3.66',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '532',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1763',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '222.4',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '36.41',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '20.77',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '水库村，“乡村小威尼斯“。水库村因地制宜，始终围绕丰富的水资源做深“水文章”，从农民集中居住、基础设施建设、公共服务改造、生态环境优化等多个方面实施。依托大自然赋予的禀赋，打造以品牌农产品种植为主的北部‘溪渠田园’、以生活休闲服务为主的中部‘滩漾百岛’和以原生文化滋养为主的南部‘荷塘聚落’三个主题片区。已建成的“藕遇公园”，将原有藕塘改造为湿地体验、田园观光、特色花海、水上娱乐等区域。在“藕遇公园”旁建造国学书院、文创商店和多功能厅等，开设河边学堂，教授草编、芦苇手工艺品制作、太子螺蛳烹制等，让传统风俗实现活态传承。',
          iframeUrl: 'https://720yun.com/t/2evknlpls8e?scene_id=28657187',
          videoShow: true
        },
        '黄桥村': {
          id: 'hqc',
          name: '黄桥村',
          area: '松江区',
          town: '泖港镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '3.29',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '580',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '2136',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '127.89',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '74.52',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '16.45',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '黄桥村，生态“叶”茂，家园宜居。全国33个区县农村宅基地改革示范点之一，本市唯一一个乡村振兴示范村创建和农村宅基地改革“双试点”。探索以整村宅基平移的方式，实现农民相对集中居住，推进农村宅基地改革。位于村西南的 “乡村联排别墅”一家一户一院落，新江南田园建筑依水而居。这些房屋将会被颁发本市首批“不动产证”，村民生活将一跃进入“高配版”。除了电力、排水、通信等市政配套外，这片区域也是松江浦南地区首个接通天然气管线的居住区，集中设有日间照料站、幸福老人村、村民大食堂等高品质乡村空间，家中还将接入智慧养老、智慧医疗等远程互联服务。黄桥村已在推进改革探索中，形成了一系列有效机制，包括：确立了拥有宅基地资格权村民的分户标准，确认了针对不具有宅基地资格权但村内有住宅的村民的“有偿退出”机制，完善了农户参与平移的补贴机制；创新确立了村民建房审批分配的全流程，以及建房施工安全监管的全流程，同时，还创新了住房贷款机制，首次引入地区银行为村民建房提供房屋贷款，解决村民资金难题。',
          iframeUrl: '',
          videoShow: false
        },
        '莲湖村': {
          id: 'lhc',
          name: '莲湖村',
          area: '青浦区',
          town: '金泽镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '4.25',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '678',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1748',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '145.11',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '44.11',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '21.65',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '莲湖村，上海唯一一个“长在公园里的村庄”。拥有沿湖60%堤岸风景线，成为青西郊野公园核心范围内唯一的原生村落。莲湖村依托郊野公园生态底版，依托农业产业，以农村生活垃圾污水治理、农村厕所革命和村容村貌提升为重点，有机更新生态环境、村容村貌，加快建设美丽宜居村庄。全村改造民房400多栋，打造了村民会所等公共服务点位16处。以郊野公园为中心，莲湖村配套打造“千亩荷塘”景色，集郊野公园、千亩荷塘景色，蛙稻米、红柚等特色产业的“美丽乡村+生态社区+特色产业”田园综合体初见规模。',
          iframeUrl: '',
          videoShow: false
        },
        '吴房村': {
          id: 'wfc',
          name: '吴房村',
          area: '奉贤区',
          town: '青村镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '1.99',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '481',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1343',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '77.37',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '45.53',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '19.68',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '十里桃花源，一个吴房村。村民将承包地、林地和宅基地流转到村集体，进行整体规划建设。一年后，吴房村俨然成为市郊乡村振兴的“网红”打卡地，桃源美景吸引一批又一批访客纷至沓来。明确发展定位和主导产业，与市场主体进行有效对接，是吴房村探索的产业振兴之路。作为上海市属国有资本运营平台，上海国盛集团旗下盛石资本管理公司带动社会资本，共同成立上海思尔腾科技服务有限公司，负责吴房村的建设运营，形成“产业+基金+基地+智库”的组合运作，尝试从金融端及产业端形成从乡村振兴到产城乡一体化的新模式。',
          iframeUrl: 'https://720yun.com/t/zzlraaj55rim4gmwfr?pano_id=OlQAxQPLmO8qqYMB',
          videoShow: true
        },

        '园艺村': {
          id: 'yyc',
          name: '园艺村',
          area: '崇明区',
          town: '港沿镇',
          mapTableData: [{
            xh: '1',
            xm: '村域面积',
            nr: '3.1',
            unit: '平方公里',
            unitSup: ''
          }, {
            xh: '2',
            xm: '农户数',
            nr: '800',
            unit: '户',
            unitSup: ''
          }, {
            xh: '3',
            xm: '户籍人口',
            nr: '1783',
            unit: '人',
            unitSup: ''
          }, {
            xh: '4',
            xm: '耕地面积',
            nr: '214.25',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '5',
            xm: '建设用地面积',
            nr: '32.42',
            unit: '公顷',
            unitSup: ''
          }, {
            xh: '6',
            xm: '宅基地面积',
            nr: '30.53',
            unit: '公顷',
            unitSup: ''
          }],
          mapDesc: '园艺村，远近闻名的“瓜子黄杨之乡”。全村800户村民中，有675户种植黄杨，种植规模达到1000多亩，全村造型黄杨2018年销售收入达4000万元。在推进乡村振兴示范村创建过程中，园艺村优化生产经营，变“单打独斗”为“抱团协作”，推进黄杨产业组织化、规模化发展。组建黄杨协会，搭建黄杨交易线上线下平台。线下，组织种植户参展盆景、园林展销会，对接全国各大苗木交易平台，及时掌握造型黄杨市场变化方向和趋势；线上，搭建交易平台，启用“最美园艺黄杨”微信公众号，开展技术交流、盆景展示、专业销售。',
          iframeUrl: '',
          videoShow: false
        }
      }
      var resMap = {
        '同心村': [121.351586, 30.998207],
        '赵家村': [121.266981, 31.251328],
        '连民村': [121.691289, 31.09618],
        '界浜村': [121.655763, 31.118799],
        '长达村': [121.577846, 31.033658],
        '大河村': [121.848482, 31.027397],
        '公平村': [121.829546, 30.940752],
        '联一村': [121.313025, 31.486563],
        '海星村': [121.360405, 31.486771],
        '天平村': [121.376039, 31.444424],
        '聚源桥村': [121.392011, 31.444949],
        '新强村': [121.533639, 30.983278],
        '浦秀村': [121.405056, 30.986978],
        '杨王村': [121.511235, 30.900397],
        '沈陆村': [121.452785, 30.887356],
        '关港村': [121.478727, 30.997074],
        '南杨村': [121.05883, 30.950884],
        '东夏村': [121.141173, 30.979456],
        '新义村': [121.035215, 30.858416],
        '待泾村': [121.130606, 30.888831],
        '和平村': [121.226776, 30.847555],
        '山塘村': [121.171909, 30.78206],
        '张马村': [121.098909, 31.039163],
        '东庄村': [121.066161, 30.980317],
        '徐姚村': [121.15804, 31.239126],
        '北双村': [121.417988, 31.681493],
        '新安村': [121.334766, 31.768163],
        '永乐村': [121.393291, 31.75482]
      }

      var villageData = {
        '赵桥村': [121.735401, 31.000881],
        '塘湾村': [121.322535, 31.490199],
        '革新村': [121.561899, 31.084164],
        '向阳村': [121.143647, 31.310443],
        '水库村': [121.402419, 30.83097],
        '黄桥村': [121.170601, 30.951563],
        '莲湖村': [121.00913, 31.064943],
        '吴房村': [121.541501, 30.898686],
        '园艺村': [121.728949, 31.577753]
      }
      var shDatas = [
        { name: '同心村', value: 86 },
        { name: '赵家村', value: 86 },
        { name: '连民村', value: 86 },
        { name: '界浜村', value: 86 },
        { name: '长达村', value: 86 },
        { name: '大河村', value: 86 },
        { name: '公平村', value: 86 },
        { name: '联一村', value: 86 },
        { name: '海星村', value: 86 },
        { name: '天平村', value: 86 },
        { name: '聚源桥村', value: 86 },
        { name: '新强村', value: 86 },
        { name: '浦秀村', value: 86 },
        { name: '杨王村', value: 86 },
        { name: '沈陆村', value: 86 },
        { name: '关港村', value: 86 },
        { name: '南杨村', value: 86 },
        { name: '东夏村', value: 86 },
        { name: '新义村', value: 86 },
        { name: '待泾村', value: 86 },
        { name: '和平村', value: 86 },
        { name: '山塘村', value: 86 },
        { name: '张马村', value: 86 },
        { name: '东庄村', value: 86 },
        { name: '徐姚村', value: 86 },
        { name: '北双村', value: 86 },
        { name: '新安村', value: 86 },
        { name: '永乐村', value: 86 },
        { name: '赵桥村', value: 86 },
        { name: '塘湾村', value: 86 },
        { name: '革新村', value: 86 },
        { name: '向阳村', value: 86 },
        { name: '水库村', value: 86 },
        { name: '黄桥村', value: 86 },
        { name: '莲湖村', value: 86 },
        { name: '吴房村', value: 86 },
        { name: '园艺村', value: 86 }
      ]

      var convertData = function (data, obj) {
        var res = []
        for (var i = 0; i < data.length; i++) {
          var geoCoord = obj[data[i].name]
          if (geoCoord) {
            res.push({
              name: data[i].name,
              value: geoCoord.concat(data[i].value)
            })
          }
        }
        return res
      }
      var villageMark = convertData(shDatas, resMap)
      var villageExample = convertData(shDatas, villageData)
      this.elOptionData = villageExample.map((item, index) => {
        return {
          value: index,
          label: dataList[item.name].name + '—' + dataList[item.name].area + dataList[item.name].town
        }
      })

      var num = numVal || 0
      this.currentMapData = dataList[villageExample[num].name]
      this.rangeCheck = this.elOptionData[num].label
      this.mapRangeSrc = require('@/assets/images/' + this.currentMapData.id + '-range.png')
      this.flyimg = require('@/assets/images/' + this.currentMapData.id + '/' + this.currentMapData.id + '_y.jpg')
      this.getData()
      var checkedData = []

      var option = {
        tooltip: {
          show: false,
          trigger: 'item',
          formatter: function (a) {
            return a[2]
          }
        },
        legend: {
          show: true,
          textStyle: {
            color: '#fff'
          },
          itemGap: 20,
          bottom: '2%',
          right: '0%',
          data: ['第一批9个', '第二批28个(在建中)']
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
                color: 'rgba(26, 133,209, 0)' // 100% 处的颜色
              }],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(57, 118, 161, 1)',
            shadowOffsetX: -2,
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
            name: '第二批28个(在建中)',
            type: 'scatter',
            coordinateSystem: 'geo',
            symbolSize: 8,
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
                color: '#04f4fb',
                shadowBlur: 0
              }
            },
            data: villageMark
          },
          {
            name: '第一批9个',
            type: 'scatter',
            coordinateSystem: 'geo',
            // rippleEffect:{
            //     period: 4,
            //     scale: 2,
            // },
            symbolSize: 15,
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

            },
            data: villageExample.filter((item, index) => index !== num)
          },
          {
            name: '当前村',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            rippleEffect: {
              period: 15,
              scale: 10,
              brushType: 'stroke'
            },
            symbolSize: 20,
            showEffectOn: 'render',
            hoverAnimation: true,
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                color: '#ffffff',
                show: true,
                fontSize: '15%'
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
            zlevel: 1,
            data: [villageExample[num]]
          }

        ]
      }
      this.mapChartEL.setOption(option)
      this.mapChartEL.on('legendselectchanged', (params) => {
        if (!params.selected['第一批9个']) {
          this.$router.push('/hangpai')
        }
      })
    }
  }
}
</script>
