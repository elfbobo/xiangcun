<template>
    <div class="table--container">
        <div class="table--content">
            <table-content :title="title1" :districts="districts" id="tb1" :arr="dataArr1"></table-content>
        </div>
        <div class="table--content">
            <table-content :title="title2" :districts="districts" id="tb2" strict :arr="dataArr2"></table-content>
        </div>
    </div>
</template>

<script>
    import TableContent from "./TableContent";

    export default {
        name: "TableForm",
        components: {TableContent},
        data: () => ({
            districts: ['浦东新区', '闵行区', '嘉定区', '宝山区', '奉贤区', '松江区', '金山区', '青浦区', '崇明区', '委办局'],
            title1: '2019年1月至11月77项重点任务推进情况',
            title2: '11月77项重点任务推进情况',
            dataArr1: [],
            dataArr2: []
        }),
        created() {
            Promise.all([this.sendRequest('overall'), this.sendRequest('last')]).then((arr) => {
                this.dataArr1 = arr[0]
                this.dataArr2 = arr[1]
            }).catch(err => {
                console.log(err)
            })


        },
        methods: {
            sendRequest(month = '',params = {}) {
                return new Promise((resolve, reject) => {
                    this.$http({
                        method: 'get',
                        url: `/zdrw/${month}`,
                        params: params
                    }).then(({status, data}) => {
                        if (status === 200) {
                            resolve(data)
                        }
                    }).catch(err => {
                        reject(new Error(err))
                    })
                })
            }
        }
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
