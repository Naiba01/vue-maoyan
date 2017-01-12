<template>
  <div class="page-has-tabs">
    <div class="content-container">
      <div class="film-header">
        <div>
          <city-select-btn></city-select-btn>
        </div>
        <div class="fake-input-bar">
          <fake-input placeText="找影视剧、影人、影院"></fake-input>
        </div>
      </div>
    </div>
    <tab-bar currentTab="film"></tab-bar>
  </div>
</template>

<style lang="less" scoped>
@import "../assets/styles/_variables";

.film-header {
  padding: 0.194rem 0.243rem;
  background-color: @default-red;
}
.fake-input-bar {

}
</style>

<script>
import TabBar from 'components/TabBar'
import FakeInput from 'components/FakeInput'
import CitySelectBtn from 'components/CitySelectBtn'

export default {
  name: 'film-page',
  components: {
    TabBar,
    FakeInput,
    CitySelectBtn
  }
}
</script>
