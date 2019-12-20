<template>
    <div class="special-title--container">
        <span class="special-title">
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
import ElSelect from './select/elSelect'
import ElOption from './select/elOption'
export default {
  name: 'ChartTitle',
  components: { },
  props: {
    subtitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    yearCheck: 2019,
    monthCheck: 1,
    yearRange: [2016, 2017, 2018, 2019]
  }),
  methods: {
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
