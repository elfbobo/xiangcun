<template>
    <div id="app">
        <div class="wrap">
            <div class="header">
                <div class="logo">
                    <router-link to="/"><img src="@/assets/images/logo-1.png" alt=""></router-link>
                </div>
                <div class="time">{{ nowTime }}</div>
            </div>
            <div class="main">
                <menu-content></menu-content>
                <router-view/>
            </div>
        </div>
    </div>
</template>
<script>
    import MenuContent from "./components/menu/Menu";
    export default {
        components: {MenuContent},
        data: () => ({
            nowTime: '',
            timerId: undefined
        }),
        created() {
            this.getDate()
            this.timerId = setInterval(() => {
                this.getDate()
            }, 1000)
        },
        methods: {
            getDate () {
                let dateNow = new Date()
                this.nowTime = this.forMatterNum(dateNow.getFullYear()) + '/' + this.forMatterNum(dateNow.getMonth() + 1) + '/' + this.forMatterNum(dateNow.getDate()) + ' ' + this.forMatterNum(dateNow.getHours()) + ':' + this.forMatterNum(dateNow.getMinutes()) + ':' + this.forMatterNum(dateNow.getSeconds())
            },
            forMatterNum (num) {
                return num <= 9 ? '0' + num : num
            }

        },
        destroyed() {
            clearInterval(this.timerId)
        }
    }
</script>
