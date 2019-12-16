<template>
    <div class="tuijings">
        <ul class="tuijings--select__container">
            <li class="tuijings--select"
                :class="{'tuijings--active': selectedDistrict === district}"
                v-for="(district,i) in districts" :key="i"
                @click="selectDistrict(district)"
            >
                {{ district }}
            </li>
        </ul>
        <div style="display: flex;flex-direction: column;flex: 1 1 auto;position: relative">
            <tui-jing
                    title="2019年1月至11月77项相关委办局重点任务推进情况"
                    :selected-district="selectedDistrict"
                    month="overall"
            ></tui-jing>
            <tui-jing
                    title="11月77项相关委办局重点任务推进情况"
                    :selected-district="selectedDistrict"
                    start-color="#1f72a3"
                    end-color="#bb9528"
                    month="last"
            ></tui-jing>
        </div>

    </div>
</template>

<script>
    import TuiJing from "./TuiJing";

    export default {
        name: "TuijingContainer",
        components: {TuiJing},
        data() {
            const districts = ['浦东新区', '闵行区', '嘉定区', '宝山区', '奉贤区', '松江区', '金山区', '青浦区', '崇明区']
            return {
                selectedDistrict: districts[0],
                districts
            }
        },
        methods: {
            selectDistrict(district) {
                if (!district) {
                    return
                }
                this.selectedDistrict = district

            }
        }
    }
</script>

<style scoped>
    .tuijings {

        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    .tuijings--select__container {
        padding: 0;
        display: flex;
        flex-direction: row;
        flex-grow: 0;
    }

    .tuijings--select {
        margin: 0 0.4vw 0.9vw 0.4vw;
        padding: 0.3vw 1.8vw;
        background: rgba(4, 244, 251, 0.1);
        color: white;
        font-size: 0.6vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tuijings--select:nth-child(1) {
        margin-left: 0;
    }

    .tuijings--select:hover {
        cursor: pointer;
    }


    .tuijings--active {
        color: #04f4fb;
        padding: 0.2vw 1vw;
    }

    .tuijings--active::after,.tuijings--active::before {
        margin: 0 0.4vw;
        width: 0.08vw;
        height: 60%;
        content: '';
        background: #04f4fb;
    }
</style>
