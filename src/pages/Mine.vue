<template>
  <div class="page-has-tabs">
    <div class="content-container">我的</div>
    <tab-bar currentTab="mine"></tab-bar>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
import TabBar from 'components/TabBar'

export default {
  name: 'mine-page',
  components: {
    TabBar
  }
}
</script>
