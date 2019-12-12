<template>
    <div class="router--container column">
        <div class="router--col column">
            <mian-ji ref="line1" smooth :line-width="0" left="3%" :title="title1"></mian-ji>
        </div>
        <div class="router--col column">
            <mian-ji ref="line2" smooth :line-width="0" left="3%" :title="title2" start-color="rgba(251,185,25,1)"></mian-ji>
        </div>
    </div>
</template>
<script>
    const dataArray = [
        {name: '市发展改革委', value: 100},
        {name: '市规划资源局', value: 67},
        {name: '市交通委', value: 78},
        {name: '市政委', value: 99},
        {name: '市绿化市容局', value: 77},
        {name: '市民政局', value: 65},
        {name: '市农业农村委', value: 45},
        {name: '市人力资源社会保障局', value: 98},
        {name: '市水务局', value: 100},
        {name: '市司法局', value: 88},
        {name: '市委宣传部', value: 88},
        {name: '市委政法委', value: 77},
        {name: '市卫生健康委', value: 66},
        {name: '市文化旅游局', value: 55},
        {name: '市住房城乡建设管理委', value: 77},
        {name: '市委组织部', value: 100},
    ]
    import MianJi from "../components/SheNongQu/MianJi";
    export default {
        components: {MianJi},
        data: () => ({
            title1: '2019年1月至11月77项相关委办局重点任务推进情况',
            title2: '11月77项相关委办局重点任务推进情况'
        }),
        mounted() {
            this.$refs.line1.setOptionData(dataArray)
            this.$refs.line2.setOptionData(dataArray)
        }
    }
</script>
