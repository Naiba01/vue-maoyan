<template>
  <div class="tab-bar">
    <router-link
      class="tab"
      :class="currentTab === tab.type ? 'tab-on' : 'tab-off'"
      :to="{name: tab.type}"
      v-for="tab in tabs"
    >
      <i class="icon iconfont" :class="currentTab === tab.type ? tab.iconOn : tab.iconOff"></i>
      <div>{{tab.text}}</div>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.tab-bar {
  flex: 0;
  padding: 0.073rem 0 0 0;
  border-top: 1px solid @grey-de;
  background-color: @grey-f5;
}
.tab {
  display: inline-block;
  width: 25%;
  font-size: 0.291rem;
  .iconfont {
    font-size: 0.777rem;
  }
  &.tab-off {
    color: @grey-6;
  }
  &.tab-on {
    color: @default-red;
  }
}

</style>

<script>
const tabs = [
  {
    type: 'film',
    text: '电影',
    iconOff: 'icon-film-off',
    iconOn: 'icon-film-on'
  },
  {
    type: 'cinema',
    text: '影院',
    iconOff: 'icon-cinema-off',
    iconOn: 'icon-cinema-on'
  },
  {
    type: 'discover',
    text: '发现',
    iconOff: 'icon-discover-off',
    iconOn: 'icon-discover-on'
  },
  {
    type: 'mine',
    text: '我的',
    iconOff: 'icon-mine-off',
    iconOn: 'icon-mine-on'
  }
]

export default {
  name: 'tab-bar',
  props: ['currentTab'],
  data () {
    return {
      tabs
    }
  }
}

</script>
