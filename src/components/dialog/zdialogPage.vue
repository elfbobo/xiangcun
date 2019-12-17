<template>
    <div >
        <transition>
            <dialog-base :title='title'
            :isShow='isShowDialog'
            v-show='isShowDialog'
            @close='cancelPop'
            :isFull=true
            :autoClose=autoCloseData
            >
            <div class="frame-body">
                <iframe :src="src" width='100%' name="popInnerPage" height="100%"  scrolling="no" frameborder="0"></iframe>
                <!-- <img :src="src" width='100%' alt=""> -->
            </div>
            </dialog-base>
        </transition>
    </div>
</template>

<script>
import DialogBase from '@/components/dialog/zdialogbase'
export default {
  props: {
  },
  data () {
    return {
      title: '',
      isShowDialog: false,
      src: '',
      autoCloseData: false
    }
  },
  components: {
    DialogBase
  },
  methods: {
    init (url) {
      this.isShowDialog = true
      this.src = ''
      this.src = url
    },
    cancelPop () {
      this.isShowDialog = false
    }
  }
}
</script>

<style scoped>
  .frame-body{background:#fff;width:100%;height: 100%;position: absolute;left:0;top:0;bottom:0;right:0;}
</style>
