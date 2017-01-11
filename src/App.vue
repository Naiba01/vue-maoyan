<template>
  <div id="app">
    <div class="page"></div>
    <tab-bar></tab-bar>
  </div>
</template>

<style lang="less">
@import 'assets/styles/style';

.page {
  flex: 1;
}
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
