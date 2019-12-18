<template>
    <div class="router--container column">
        <div class="router--col column">
            <mian-ji ref="line1" smooth :line-width="0" left="3%" :title="title1"></mian-ji>
        </div>
        <div class="router--col column">
            <mian-ji ref="line2" smooth :line-width="0" left="3%" :title="title2"
                     start-color="rgba(251,185,25,1)"></mian-ji>
        </div>
    </div>
</template>
<script>
import axios from '../utils/axiosRequest'
import MianJi from '../components/SheNongQu/MianJi'
import { mapGetters } from 'vuex'
export default {
  components: { MianJi },
  mounted () {
    this.sendRequest('line1', { begin: `${this.currentYear}-01-01`, end: `${this.currentYear}-${this.currentMonth}-${this.currentDay}` })
    this.sendRequest('line2', { month: this.currentMonth })
  },
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth',
      currentDay: 'dataDetail/currentDay',
      districtNames: 'dataDetail/districtNames'
    }),
    title1 () {
      return `${this.currentYear}年1月至${this.currentMonth}月77项相关委办局重点任务推进情况`
    },
    title2 () {
      return `${this.currentMonth}月77项相关委办局重点任务推进情况`
    }

  },
  methods: {
    sendRequest (refName = '', params = {}) {
      axios({
        method: 'get',
        url: params.month ? this.$store.state.dataDetail.urls.cydw.current : this.$store.state.dataDetail.urls.cydw.overall,
        params: params
      }).then(({ status, data }) => {
        if (status === 200) {
          if (!this.$refs[refName]) return
          const processed = data.reduce((prev, next) => {
              const v = parseFloat(next.p)
            return prev.concat({
              name: next.subcompanyname,
              value: v || 0
            })
          }, [])
          this.$refs[refName].setOptionData(processed)
        }
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
