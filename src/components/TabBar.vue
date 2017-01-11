<template>
  <div class="tab-bar">
    <div class="tab" v-for="tab in tabs">
      <i class="icon iconfont" :class="tab.iconOff"></i>
      <div>{{tab.text}}</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.tab-bar {
  display: flex;
  flex: 0;
  height: 60px;
  background-color:#ffffff;
}
.tab {
  flex: 1;
}

</style>

<script>
const tabs = [
  {
    text: '电影',
    iconOff: 'icon-film-off',
    iconOn: 'icon-film-on'
  },
  {
    text: '影院',
    iconOff: 'icon-cinema-off',
    iconOn: 'icon-cinema-on'
  },
  {
    text: '发现',
    iconOff: 'icon-discover-off',
    iconOn: 'icon-discover-on'
  },
  {
    text: '我的',
    iconOff: 'icon-mine-off',
    iconOn: 'icon-mine-on'
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
