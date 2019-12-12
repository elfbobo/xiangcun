<template>
    <div class="table--content--container">
        <chart-title>{{ title }}</chart-title>
        <table v-if="currentArray.length > 0">
            <tr>
                <td>任务名称</td>
                <td v-for="(d,i) in districts" :key="i">{{ d }}</td>
            </tr>
            <tr v-for="(item,i) in currentArray" :key="i">
                <td><span>{{ item.order }}</span>{{ item.name }}</td>
                <td v-for="(c,j) in item.value" :key="''+item.name+j">
                    <img :src="transferIcon(c)" alt="" style="width: 0.5vw"/>
                </td>
            </tr>
            <tr v-for="i in (20-currentArray.length)" :key="'spacer'+i" style="background: transparent">
                <td></td>
            </tr>
        </table>
        <div v-if="dataArray" class="table-page--container">
            <div
                    class="table-page--content"
                    :class="{'table-page--active': currentPage === p}"
                    v-for="p in pages"
                    :key="'page'+p"
                    @click="onChangePage(p)"
            >
                {{ p }}
            </div>
        </div>
    </div>

</template>

<script>
    import gou from '../../assets/images/icons/gou.png'
    import quan from '../../assets/images/icons/quan.png'
    import sanjiao from '../../assets/images/icons/sanjiao.png'
    import ChartTitle from "../ChartTitle";

    export default {
        name: "TableContent",
        components: {ChartTitle},
        props: {
            title: {
                type: String,
                default: '推进情况'
            },
            districts: {
                type: [Boolean, Array],
                default: () => ([])
            },
            strict: Boolean,
            dataArray: {
                type: [Boolean, Array],
                default: false
            }
        },
        data: () => ({
            currentArray: [],
            processedArray: [],
            currentPage: 1
        }),
        computed: {
            pages() {
                return Math.ceil(this.processedArray.length / 20) || 1
            }
        },
        mounted() {
            this.$nextTick(() => {
                if (!this.dataArray) return
                if (this.strict) {
                    this.processedArray = this.processArray(this.dataArray)
                } else {
                    this.processedArray = this.dataArray
                }
                this.currentArray = this.processedArray.slice(0, 20)
            })
        },
        methods: {
            transferIcon(num = 0) {
                switch (num) {
                    case 1:
                        return quan
                    case 2:
                        return gou
                    case 3:
                        return sanjiao
                    default:
                        return
                }
            },
            hasPositive(arr = []) {
                if (arr.length === 0) return false
                return arr.reduce((prev, next) => prev + next, 0) > 0
            },
            processArray(arr = []) {
                return arr.reduce((prev, next) => {
                    if (this.hasPositive(next.value)) prev.push(next)
                    return prev
                }, [])
            },
            onChangePage(p) {
                if (!p) return
                this.currentPage = p
                this.currentArray = this.processedArray.slice((p - 1) * 20, (p - 1) * 20 + 20)
            }
        }
    }
</script>

<style scoped>
    .table--content--container {
        display: flex;
        flex-grow: 1;
        height: 100%;
        position: relative;
        flex-direction: column;
    }

    .table--content--container table {
        position: relative;
        flex: 1 0 auto;
        margin: 0.8vw;
        margin-bottom: 0;
        font-size: 0.4vw;
        border: 1px solid rgba(4, 244, 251, 0.4);
        -webkit-border-horizontal-spacing: 0;
        -webkit-border-vertical-spacing: 0.18vw;

    }

    .table--content--container table tr td:first-child {
        width: 8vw;
    }

    .table--content--container table tr td {
        height: 0.8vw;
    }

    .table--content--container table tr {
        text-align: center;
    }

    .table--content--container table tr td:first-child {
        text-align: start;
    }

    .table--content--container table tr td:first-child span {
        background: rgba(4, 244, 251, 0.4);
        margin-right: 10%;
        display: inline-block;
        text-align: center;
        vertical-align: middle;
        width: 7%;
        border-radius: 50%;
    }

    .table--content--container table tr td:first-child::before {
        text-align: start;
        content: '';
        margin-left: 10%;
        background: rgba(4, 244, 251, 0.2);

    }

    .table--content--container table tr:first-child td:first-child {
        text-align: center;
    }

    .table--content--container table tr:first-child td:first-child::before {
        text-align: center;
        content: '';
        margin: 0;
    }

    .table--content--container table tr:nth-child(odd) {
        background: transparent;
    }

    .table--content--container table tr:nth-child(even) {
        background: rgba(4, 244, 251, 0.2);
    }

    .table-page--container {
        display: flex;
        padding: 0.1vw auto;
        margin-top: auto;
        flex: 0 1 auto;
        height: 1.2vw;
        width: 100%;
        justify-content: center;
        align-self: flex-end;
        margin-bottom: 1vw;
    }

    .table-page--content {
        flex: 0 1 auto;
        line-height: 1;
        font-size: 0.6vw;
        vertical-align: middle;
        color: rgba(4, 244, 251, 0.5);
        align-self: center;
        margin: 0 0.5vw;
        padding: 0.2vw 1vw;
        border: 0.5px solid rgba(4, 244, 251, 0.5);
    }

    .table-page--content:hover {
        cursor: pointer;
    }

    .table-page--active {
        border: 0.5px solid rgba(4, 244, 251, 1);
        color: rgba(4, 244, 251, 1);
        background: rgba(4, 244, 251, 0.2);
    }
</style>
