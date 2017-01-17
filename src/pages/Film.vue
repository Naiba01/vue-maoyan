<template>
  <div class="page-has-tabs">
    <div class="content-container">
      <div class="film-header">
        <div class="nav-bar">
          <city-select-btn></city-select-btn>
          <switch-nav-bar></switch-nav-bar>
        </div>
      </div>
      <hot-film v-if="current.nav === 'hot'"></hot-film>
      <todo-film v-else-if="current.nav === 'todo'"></todo-film>
      <find-film v-else></find-film>
    </div>
    <tab-bar currentTab="film"></tab-bar>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";
.content-container {
  max-height: calc(~"100% - 1.437rem");
  overflow: hidden;
}
.film-header {
  display: flex;
  flex-direction: column;
  background-color: @default-red;
}
.nav-bar {
  padding: 0.194rem 0.243rem;
}
.nav-bar {
  position: relative;
}
</style>

<script>
import { mapState } from 'vuex';
import TabBar from 'components/TabBar';
import CitySelectBtn from 'components/CitySelectBtn';
import SwitchNavBar from 'components/SwitchNavBar';
import HotFilm from 'components/HotFilm';
import TodoFilm from 'components/TodoFilm';
import FindFilm from 'components/FindFilm';

export default {
  name: 'film-page',
  components: {
    TabBar,
    CitySelectBtn,
    SwitchNavBar,
    HotFilm,
    TodoFilm,
    FindFilm
  },
  computed: {
    ...mapState([
      'current'
    ])
  }
};
</script>
