<template>
  <div class="hot-film">
    <div class="fake-input-bar">
      <fake-input placeText="找影视剧、影人、影院"></fake-input>
    </div>
    热映
    <film-card v-for="item in films" :film="item"></film-card>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/_variables';

.hot-film {
  max-height: calc(~"100% - 51px");
  overflow-y: scroll;
}
.fake-input-bar {
  background-color: @default-red;
  padding: 0.194rem 0.243rem;
}
</style>

<script>
import { mapState, mapActions } from 'vuex';
import FakeInput from 'components/FakeInput';
import FilmCard from 'components/FilmCard';

export default {
  name: 'hot-film',
  data() {
    return {

    }
  },
  components: {
    FilmCard,
    FakeInput
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
    // 没有电影才加载
    if (!this.films.length) {
      this.addHotFilms();
    }
  }
};
</script>
