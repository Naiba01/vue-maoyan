<template>
  <div class="page-has-tabs">
    <div class="content-container">发现</div>
    <tab-bar currentTab="discover"></tab-bar>
  </div>
</template>

<style lang="less" scoped>

</style>

<script>
import TabBar from 'components/TabBar'

export default {
  name: 'discover-page',
  components: {
    TabBar
  }
}
</script>
