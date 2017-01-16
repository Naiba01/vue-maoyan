<template>
  <div class="page-has-tabs">
    <div class="content-container">电影院</div>
    <tab-bar></tab-bar>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
import TabBar from 'components/TabBar'

export default {
  name: 'cinema-page',
  components: {
    TabBar
  },
  afterRouteEnter() {
    this.$store.dispatch.updateCurrentTab('cinema');
  }
}
</script>
