<template>
  <div>
    <router-link type="button" class="city-select-btn" tag="button" to="/city-select">
      深圳
      <i class="icon iconfont icon-drop-down"></i>
    </router-link>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";
.city-select-btn {
  float: left;
  height: 0.777rem;
  border: none;
  font-size: 0.34rem;
  color: white;
  background-color: transparent;
  outline: none;
}
.icon-drop-down {
  font-size: 0.291rem;
}
</style>

<script>
export default {
  name: 'city-select-btn',
  data () {
    return {

    }
  }
}

</script>
