<template>
    <div class="dialog-modal" :class="{fadeIn:isShow,fadeOut:!isShow}">
    </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  /* .dialog-modal{position: absolute;left:0;top:0;bottom:0;right:0;background:rgba(0,0,0,.92);opacity:0;z-index:998;} */
  .dialog-modal{position: absolute;left:4rem;top:0;height:4.5rem;width:12rem;background:rgba(0,0,0,.92);opacity:0;z-index:998;}
  .dialog-modal.fadeIn{animation: markShow .6s forwards;}
  .dialog-modal.fadeOut{animation: markHide .4s forwards;}
  @keyframes markShow {
    0%{opacity: 0}
    100%{opacity:1}
  }
  @keyframes markHide {
    0%{opacity: 1}
    100%{opacity:0}
  }
</style>
