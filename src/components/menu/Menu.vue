<template>
    <div class="left-menu">
        <div class="menu-top">
            <div class="menu-title">目标管理</div>
            <div class="menu-top-list">
                <div class="link-list">
                    <div class="top-link-item">
                        <router-link to='/' class="link-num" active-class="active-class" exact>77</router-link>
                        <div class="link-item-title">
                            <span class="link-item-year">2019</span>
                            <span class="link-item-desc">重点任务(项)</span>
                        </div>
                    </div>
                    <div class="top-link-item">
                        <router-link to='/cydw' class="link-num" active-class="active-class">26</router-link>
                        <div class="link-item-title">
                            <span class="link-item-split"></span>
                            <span class="link-item-desc">成员单位(个)</span>
                        </div>
                    </div>
                    <div class="top-link-item">
                        <router-link to='/snq' class="link-num" active-class="active-class">9</router-link>
                        <div class="link-item-title">
                            <router-link to='/snqmx' class="link-item-year" active-class="active-class">明细</router-link>
                            <span class="link-item-desc">涉农区(个)</span>
                        </div>
                    </div>
                </div>
                <div class="task-box">
                    <div class="task-box-pannel">
                        <div class="task-line">
                            <span class="task-label">执行中任务</span>
                            <span class="task-num">1155</span>
                        </div>
                        <div class="task-line">
                            <span class="task-label">督办任务</span>
                            <span class="task-num">5962</span>
                        </div>
                        <div class="task-line">
                            <span class="task-label">办结任务</span>
                            <span class="task-num">4780</span>
                        </div>
                    </div>
                    <div class="task-box-pannel task-box-bottom">
                        <div class="task-line task-delay-line">
                            <span class="task-label">逾期任务</span>
                            <span class="task-num">27</span>
                        </div>
                        <div class="task-line task-delay-line">
                            <span class="task-label">延期任务</span>
                            <span class="task-num">0</span>
                        </div>
                        <div class="task-pie-list">
                            <task-pie-chart ref='taskChart1' class="task-chart-one"></task-pie-chart>
                            <task-pie-chart ref='taskChart2'></task-pie-chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu-bottom">
            <div class="menu-title">三园工程</div>
            <div class="bottom-link-list">
                <div class="bottom-link-line">
                    <router-link to="/beautiful" class="sy-link-item" active-class="active-class">
                        <div class="sy-item-line">
                            <div class="sy-title sy-b-title">
                                <span class="sy-title-name">美丽家园</span>
                            </div>
                            <div class="sy-total">
                                <div class="sy-total-line">
                                    <em>857 <i>个</i></em>
                                    <span>环境整治村</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>85 <i>个</i></em>
                                    <span>美丽乡村示范村</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>37 <i>个</i></em>
                                    <span>乡村振兴示范村</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/green" class="sy-link-item" active-class="active-class">
                        <div class="sy-item-line">
                            <div class="sy-title sy-g-title">
                                <span class="sy-title-name">绿色田园</span>
                            </div>
                            <div class="sy-total">
                                <div class="sy-total-line">
                                    <em>137.65 <i>万亩</i></em>
                                    <span>三区划定总面积</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>100 <i>万亩</i><b>≈</b></em>
                                    <span>绿色认证产量</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>20 <i>%</i><b class="b-mark">≈</b></em>
                                    <span>绿色认证率</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                    <router-link to="/happiness" class="sy-link-item" active-class="active-class">
                        <div class="sy-item-line">
                            <div class="sy-title sy-h-title">
                                <span class="sy-title-name">幸福乐园</span>
                            </div>
                            <div class="sy-total">
                                <div class="sy-total-line">
                                    <em>253.58 <i>万人</i></em>
                                    <span>乡村人口</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>30375 <i>元</i></em>
                                    <span>人均可支配收入</span>
                                </div>
                                <div class="sy-total-line">
                                    <em>50 <i>亿元</i><b class="b-mark">+</b></em>
                                    <span>全市筹措帮扶资金</span>
                                </div>
                            </div>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import TaskPieChart from '../pie/TaskPieChart'
export default {
  name: 'MenuContent',
  mounted () {
    this.$nextTick(() => {
      this.getTaskChart()
    })
  },
  components: {
    TaskPieChart
  },
  methods: {
    getTaskChart () {
      const colorOne = ['#04f4fb', '#ffffff']
      const taskDataOne = {
        value: 80.17,
        title: '督办办结率'
      }
      const colorTwo = ['#fbb919', '#ffffff']
      const taskDataTwo = {
        value: 0.45,
        title: '督办预期率'
      }
      this.$refs.taskChart1.init(colorOne, taskDataOne)
      this.$refs.taskChart2.init(colorTwo, taskDataTwo)
    }
  }
}
</script>

<style scoped>

</style>
