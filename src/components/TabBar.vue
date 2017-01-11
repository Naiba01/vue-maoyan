<template>
  <div class="tab-bar">
    <div class="tab" v-for="tab in tabs">
      <i class="icon iconfont" :class="tab.iconOff"></i>
      <div>{{tab.text}}</div>
    </div>
  </div>
</template>

<style lang="scss">
body {
  background-color:#ffffff;
}

</style>

<script>
const tabs = [
  {
    text: '电影',
    iconOff: 'icon-film-off',
    iconOn: 'icon-film-on'
  }
]

export default {
  name: 'tab-bar',
  data () {
    return {
      tabs
    }
  }
}

</script>
