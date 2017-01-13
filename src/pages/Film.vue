<template>
  <div class="page-has-tabs">
    <div class="content-container">
      <div class="film-header">
        <div class="nav-bar">
          <city-select-btn></city-select-btn>
          <switch-nav-bar></switch-nav-bar>
        </div>
        <div class="fake-input-bar">
          <fake-input placeText="找影视剧、影人、影院"></fake-input>
        </div>
      </div>
      <router-view></router-view>
    </div>
    <tab-bar currentTab="film"></tab-bar>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.film-header {
  display: flex;
  flex-direction: column;
  background-color: @default-red;
}
.nav-bar,.fake-input-bar {
  padding: 0.194rem 0.243rem;
}
.nav-bar {
  position: relative;
}
</style>

<script>
import TabBar from 'components/TabBar'
import FakeInput from 'components/FakeInput'
import CitySelectBtn from 'components/CitySelectBtn'
import SwitchNavBar from 'components/SwitchNavBar'

export default {
  name: 'film-page',
  components: {
    TabBar,
    FakeInput,
    CitySelectBtn,
    SwitchNavBar
  }
}
</script>
