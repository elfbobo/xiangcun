<template>
    <div class="shenongqu--container">
        <div class="shenongqu--left">
            <div class="shenongqu--huan">
                <huan title="2019年1月至11月77项重点任务推进情况"></huan>
                <huan
                        :finished="0"
                        :processing="57"
                        :delayed="2"
                        title="11月77项重点任务推进情况"
                ></huan>
            </div>
            <div class="shenongqu--mianji">
                <mian-ji ref="mianji1" title="2019年1月至11月涉农区重点任务推进排名"></mian-ji>
                <mian-ji ref="mianji2" title="11月各涉农区重点任务推进排名" start-color="rgba(251,185,25,1)"></mian-ji>
            </div>
        </div>
        <div class="shenongqu--right">
            <tuijing-bar ref="bar1" title="2019年1月至11月重点任务推进情况"></tuijing-bar>
            <tuijing-bar ref="bar2" title="11月重点任务推进情况"></tuijing-bar>
        </div>
    </div>
</template>

<script>
    const dataArray = [
        {name: '奉贤', finished: 16, processing: 46, delayed: 0},
        {name: '浦东', finished: 16, processing: 42, delayed: 0},
        {name: '宝山', finished: 16, processing: 35, delayed: 0},
        {name: '崇明', finished: 17, processing: 42, delayed: 0},
        {name: '青浦', finished: 16, processing: 43, delayed: 1},
        {name: '嘉定', finished: 17, processing: 41, delayed: 1},
        {name: '松江', finished: 17, processing: 41, delayed: 1},
        {name: '闵行', finished: 16, processing: 39, delayed: 1},
        {name: '金山', finished: 16, processing: 44, delayed: 3}
    ]

    const mianjiArray = [
        {name: '奉贤', value: 99.99},
        {name: '浦东', value: 99.99},
        {name: '宝山', value: 99.99},
        {name: '崇明', value: 59.99},
        {name: '青浦', value: 69.99},
        {name: '嘉定', value: 99.99},
        {name: '松江', value: 79.99},
        {name: '闵行', value: 99.99},
        {name: '金山', value: 99.99}

    ]

    import Huan from "./Huan";
    import MianJi from "./MianJi";
    import TuijingBar from "./TuijingBar";

    export default {
        name: "SheNongQu",
        components: {TuijingBar, MianJi, Huan},
        mounted() {
            this.$refs.bar1.setOptionData(dataArray)
            this.$refs.bar2.setOptionData(dataArray)
            this.$refs.mianji1.setOptionData(mianjiArray)
            this.$refs.mianji2.setOptionData(mianjiArray, 60.99)

        }
    }
</script>

<style scoped>
    .shenongqu--container {
        display: flex;
        flex-direction: row;
        flex: 1 0 auto;
    }

    .shenongqu--left {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
    }
    .shenongqu--right {
        display: flex;
        width: 42%;
        flex-direction: column;
    }
    .shenongqu--huan {
        height: 50%;
        flex-grow: 1;
        display: flex;
    }

    .shenongqu--mianji {
        height: 50%;
        flex-grow: 1;
        display: flex;
    }

</style>
