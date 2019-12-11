<template>
    <div id="app">
        <!--    <header>-->
        <!--      <span class="header&#45;&#45;title">{{ title }}</span>-->
        <!--    </header>-->
        <tuijing-container v-if="true"></tuijing-container>
        <she-nong-qu v-if="false"></she-nong-qu>
<!--        <router-view />-->
    </div>
</template>

<style lang="less">
    @import "assets/stylesheets/main.less";

</style>
<script>
    // import Layout from "./components/Layout";
    import TuijingContainer from "./components/TuijingContainer";
    import SheNongQu from "./components/SheNongQu";

    export default {
        components: {TuijingContainer, SheNongQu},
        data: () => ({
            title: '上海乡村振兴目标管理'
        })
    }
</script>
