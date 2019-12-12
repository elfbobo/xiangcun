<template>
    <div class="table--container">
        <div class="table--content">
            <table-content :title="title1" :districts="districts" :data-array="dataArr1"></table-content>
        </div>
        <div class="table--content">
            <table-content :title="title2" :districts="districts" strict :data-array="dataArr2"></table-content>
        </div>
    </div>
</template>

<script>
    const dataArray = []

    function f(total = 77) {
        for (let i = 0; i < total; i++) {
            const temp = []
            const strict = Math.random() > 0.75
            for (let j = 0; j < 10; j++) {
                if (strict) {
                    temp.push(0)
                    continue
                }
                const rand = Math.random()
                if (rand < 0.25) {
                    temp.push(0)
                } else if (rand < 0.5) {
                    temp.push(1)
                } else if (rand < 0.75) {
                    temp.push(2)
                } else {
                    temp.push(3)
                }
            }
            dataArray.push({name: '乡镇农业专业规划编制', value: temp, order: i+1})
        }

    }
    f()
    import TableContent from "./TableContent";

    export default {
        name: "TableForm",
        components: {TableContent},
        data: () => ({
            districts: ['浦东新区', '闵行区', '嘉定区', '宝山区', '奉贤区', '松江区', '金山区', '青浦区', '崇明区', '委办局'],
            title1: '2019年1月至11月77项重点任务推进情况',
            title2: '11月77项重点任务推进情况',
            dataArr1: dataArray,
            dataArr2: dataArray
        })
    }
</script>

<style scoped>
    .table--container {
        display: flex;
        width: 100%;
        height: 100%;
        flex-direction: row;
    }

    .table--content {
        position: relative;
        flex: 1 1 auto;
        margin: 0.2vw;
    }
</style>
