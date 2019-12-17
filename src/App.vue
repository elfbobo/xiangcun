<template>
    <div id="app">
        <div class="wrap">
            <div class="header">
                <div class="logo"
                     v-if="$route.path==='/' || $route.path==='/cydw' || $route.path==='/snq' || $route.path==='/snqmx'">
                    <a href="https://www.baidu.com"><img src="@/assets/images/logo-1.png" alt=""></a></div>
                <div class="b-logo logo-sy" v-if="$route.path==='/beautiful'"><a href="/" class="l-m"><img
                        src="@/assets/images/b-logo-main.png" alt=""></a><img src="@/assets/images/logo-split.png"
                                                                              alt="" class="l-s"><a
                        href="http://192.168.26.147" class="l-b"><img src="@/assets/images/b-logo-sub.png" alt=""></a>
                </div>
                <div class="g-logo logo-sy" v-if="$route.path==='/green'"><a href="/" class="l-m"><img
                        src="@/assets/images/g-logo-main.png" alt=""></a><img src="@/assets/images/logo-split.png"
                                                                              alt="" class="l-s"><a
                        href="http://192.168.26.147" class="l-b"><img src="@/assets/images/g-logo-sub.png" alt=""></a>
                </div>
                <div class="h-logo logo-sy" v-if="$route.path==='/happiness'"><a href="/" class="l-m"><img
                        src="@/assets/images/h-logo-main.png" alt=""></a><img src="@/assets/images/logo-split.png"
                                                                              alt="" class="l-s"><a
                        href="http://192.168.26.147" class="l-b"><img src="@/assets/images/h-logo-sub.png" alt=""></a>
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
import MenuContent from './components/menu/Menu'

export default {
  components: { MenuContent },
  data: () => ({
    nowTime: '',
    timerId: undefined
  }),
  created () {
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
  destroyed () {
    clearInterval(this.timerId)
  }
}
</script>
