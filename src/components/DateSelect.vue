<template>
  <div @click.stop="toggleOptions">{{ current.month }}月
    <ul v-show="showOption">
      <li :class="{'disable-click': currentMonth < c}" v-for="(c,i) in monthsArr" :key="i" @click="onChosenMonth(c)">{{ c }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'DateSelect',
  props: {
    overall: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    showOption: false,
    current: {
      month: 0
    },
    monthsArr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  }),
  computed: {
    ...mapGetters({ currentMonth: 'dataDetail/currentMonth' })
  },
  mounted () {
    this.current.month = this.currentMonth
    if (!this.overall) {
      this.monthsArr = this.monthsArr.reduce((previousValue, currentValue) => {
        if (currentValue <= this.currentMonth) previousValue.push(currentValue)
        return previousValue
      }, [])
    }
  },
  methods: {
    toggleOptions () {
      this.showOption = !this.showOption
    },
    onChosenMonth (month) {
      this.current.month = month
      this.$emit('onChosenValue', month)
    }
  }
}
</script>

<style lang="less" scoped>
  div{
    display: inline-block;
    position: relative;
    z-index: 1000;
    ul{
      position: absolute;
      border:1px solid #278da6;
      background: #061f3e;
      top: .15rem;
      left: 0;
      right: 0;
      padding: 0;
      text-align: center;
      li {
        padding: .03rem 0;
        font-size: .08rem;
        &:hover {
          background: #2e6da4;
          cursor: pointer;
        }
      }
    }
    &:hover {
      cursor: pointer;
    }

    @iconWidth: 0.08rem;

    &::after {
      line-height: 1;
      margin: 0 .01rem;
      content: '';
      display: inline-block;
      width: @iconWidth;
      height: @iconWidth;
      background: url("../assets/images/arrow1.png") no-repeat center center;
    }
  }
  .disable-click {
    pointer-events: none;
    color: #8c8c8c;

    &:hover{
      cursor: none;
    }
  }


</style>
