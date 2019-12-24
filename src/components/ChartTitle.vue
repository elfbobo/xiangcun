<template>
    <div class="special-title--container">
        <span class="special-title">
            {{ currentYear }}年{{ !jiezhi && !noSelect ? `1月至${currentMonth}月` : '' }}<date-select v-if="!noSelect && jiezhi" :overall="jiezhi" @onChosenValue="onChosenMonth"></date-select>
            <slot></slot>
        </span>
        <span class="special-subtitle">
            {{ subtitle }}
        </span>
        <div class="special-actions">

        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ElSelect from './select/elSelect'
import ElOption from './select/elOption'
import DateSelect from './DateSelect'
export default {
  name: 'ChartTitle',
  components: { DateSelect },
  props: {
    subtitle: {
      type: String,
      default: ''
    },
    jiezhi: {
      type: Boolean,
      default: false
    },
      noSelect: {
        type: Boolean,
          default: false
      }
  },
  data: () => ({
    yearCheck: 2019,
    monthCheck: 1,
    yearRange: [2016, 2017, 2018, 2019]
  }),
  computed: {
    ...mapGetters({
      currentYear: 'dataDetail/currentYear',
      currentMonth: 'dataDetail/currentMonth'
    })
  },
  methods: {
    onChosenMonth (month) {
      this.$emit('onChosenMonth', month)
    },
    yearSelectChange () {

    }
  }
}
</script>

<style scoped>
    .special-title--container {
        width: 100%;
        flex: 0 1 auto;
        display: flex;
        line-height: 1;
    }

    .special-title--container, .special-title--container * {
        box-sizing: border-box;
    }
    .special-actions {
        margin-right: auto;
    }
    .special-title {
        color: white;
        font-size: 0.1167rem;
        margin-left: 0.4vw;

    }
    .special-title::before {
        content: '..';
        background: #04f4fb;
        color: #04f4fb;
        margin-right: 0.4vw;

    }
    .special-subtitle {
        color: gray;
        font-size: .1rem;

    }
</style>
