<template>
  <div>
   热映
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
import * as Api from 'api';
export default {
  name: 'hot-film',
  data() {
    return {

    }
  },
  created() {
    Api.getFilmList('hot', 0, 8).then(data => {
      console.log('---热映电影---', data.data);
    });
  }
};
</script>
