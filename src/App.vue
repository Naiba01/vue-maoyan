<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import 'assets/styles/style';
</style>

<script>
import TabBar from 'components/TabBar'

export default {
  name: 'app',
  data () {
    return {

    }
  },
  components: {
    TabBar
  }
}
</script>
