<template>
    <div class="table--content--container">
        <chart-title>{{ title }}</chart-title>
        <table>
            <tr>
                <td></td>
                <td v-for="(d,i) in districts" :key="i">{{ d }}</td>
            </tr>
            <tr>
                <td>标题</td>
            </tr>
        </table>
    </div>

</template>

<script>
    import ChartTitle from "./ChartTitle";
    export default {
        name: "TableContent",
        components: {ChartTitle},
        props: {
            title: {
              type: String,
              default: '推进情况'
            },
            districts: {
                type: [Boolean,Array],
                default: () => ([])
            }
        },
        data: () => ({

        }),
        mounted() {

        },
        methods: {

        }
    }
</script>

<style scoped>
.table--content--container {
    display: flex;
    flex-direction: column;
}
    .table--content--container table {
        flex: 1 1 auto;
        margin: 30px;
        font-size: 20px;
        border: 1px solid #04f4fb;
    }
    .table--content--container table tr td:first-child {
        width: 15%;
    }
    .table--content--container table tr {
        text-align: center;
        margin: 10px 0;
    }

    .table--content--container table tr:nth-child(odd) {
        background: transparent;
    }
    .table--content--container table tr:nth-child(even) {
        background: rgba(4,244,251,0.2);
    }
</style>
