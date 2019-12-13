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
    import MianJi from "../components/SheNongQu/MianJi";
    export default {
        components: {MianJi},
        data: () => ({
            title1: '2019年1月至11月77项相关委办局重点任务推进情况',
            title2: '11月77项相关委办局重点任务推进情况'
        }),
        mounted() {

            this.sendRequest('line1')
            this.sendRequest('line2')
        },
        methods: {
            sendRequest(refName = '',params = {}) {
                this.$http({
                    method: 'get',
                    url: '/cydw',
                    params: params
                }).then(({status,data}) => {
                    if (status === 200) {
                        if (!this.$refs[refName]) return
                        this.$refs[refName].setOptionData(data)
                    }
                }).catch(err => {
                    console.log(err)
                })
            }
        }
    }
</script>
