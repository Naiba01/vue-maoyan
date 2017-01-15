<template>
  <router-link type="button" class="fake-input-btn" tag="button" to="/discover">
    <i class="icon iconfont icon-search"></i>
    {{placeText}}
  </router-link>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.fake-input-btn {
  width: 100%;
  height: 0.777rem;
  border: 0;
  border-radius: 0.68rem;
  text-align: center;
  font-size: 0.34rem;
  background-color: white;
  color: @grey-9;
  outline: none;
}
.icon-search {
  position: relative;
  top: 0.024rem;
}
</style>

<script>
export default {
  name: 'fake-input',
  props: ['placeText'],
  data () {
    return {

    }
  }
};

</script>
