<template>
  <div>
    照片
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
export default {
  name: 'find-film',
  data () {
    return {

    }
  },
  beforeRouteLeave (to, from, next) {
    console.log(to)
    next()
  }
}
</script>
