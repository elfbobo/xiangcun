<template>
    <div class="table--container">
        <div class="table--content">
            <table-content :title="title1" :districts="districts"></table-content>
        </div>
        <div class="table--content">
            <table-content :title="title2" :districts="districts"></table-content>
        </div>
    </div>
</template>

<script>
    import TableContent from "./TableContent";
    export default {
        name: "TableForm",
        components: {TableContent},
        data: () => ({
            districts: ['浦东新区','闵行区','嘉定区','宝山区','奉贤区','松江区','金山区','青浦区','崇明区','委办局'],
            title1: '2019年1月至11月77项重点任务推进情况',
            title2: '11月77项重点任务推进情况'
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
        flex: 1 1 auto;
        margin: 20px;
    }
</style>
