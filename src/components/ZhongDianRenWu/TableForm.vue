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
import axios from '../../utils/axiosRequest'
import TableContent from './TableContent'
import { mapGetters } from 'vuex'

export default {
  name: 'TableForm',
  components: { TableContent },
  data: () => ({
    // districts: ['浦东新区', '闵行区', '嘉定区', '宝山区', '奉贤区', '松江区', '金山区', '青浦区', '崇明区', '委办局'],
    dataArr1: [],
    dataArr2: []
  }),
  created () {
    this.sendRequest().then(data => {
      this.dataArr1 = this.normalizeData(data)
    }).catch(err => {
      console.log(err)
    })
    this.sendRequest({ month: this.currentMonth }).then(data => {
      this.dataArr2 = this.normalizeData(data)
    }).catch(err => {
      console.log(err)
    })
  },
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth',
      districtNames: 'dataDetail/zdrw'
    }),
    title1 () {
      return `${this.currentYear}年1月至${this.currentMonth}月77项重点任务推进情况`
    },
    title2 () {
      return `${this.currentMonth}月77项重点任务推进情况`
    },
    districts () {
      return this.districtNames.reduce((prev, next) => {
        return prev.concat(next.name)
      }, [])
    },
    aliases () {
      return this.districtNames.reduce((prev, next) => {
        return prev.concat(next.alias)
      }, [])
    }
  },
  methods: {
    normalizeData (obj = []) {
      return obj.reduce((prev, next) => {
        const [order, name] = next.name.split('-')
        const value = this.aliases.reduce((a, na) => {
          const v = next[na]
          return a.concat(v === null ? 0 : parseInt(v))
        }, [])
        prev.push({ name, order, value })
        return prev
      }, [])
    },
    sendRequest (params = {}) {
      return new Promise((resolve, reject) => {
        axios({
          method: 'get',
          url: params.month ? this.$store.state.dataDetail.urls.table.current : this.$store.state.dataDetail.urls.table.overall,
          params: params
        }).then(({ status, data }) => {
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
