<template>
  <div class="page-has-tabs">
    <div class="content-container">电影院</div>
    <tab-bar currentTab="cinema"></tab-bar>
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
  }
}
</script>
