<template>
  <div>
    热映
    <div v-for="item in films">{{item.id}}</div>
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
import { mapState, mapActions } from 'vuex';

export default {
  name: 'hot-film',
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      films: state => state.film.hotFilms
    })
  },
  methods: {
    ...mapActions([
      'addHotFilms'
    ])
  },
  mounted() {
    this.addHotFilms();
  }
};
</script>
