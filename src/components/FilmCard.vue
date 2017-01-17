<template>
  <div class="film-card">
    <img :src="film.img" width="100px" height="140px" />
    <div class="central">
      <div class="title-bar">
        {{getFilmTitle}}
        <div class="info-box both" v-if="film['3d'] && film.imax">
          <div class="d-box">3D</div>
          <div class="imax-box">IMAX</div>
        </div>
        <div class="info-box three-d" v-else-if="film['3d'] && !film.imax">3D</div>
      </div>
      <p v-if="film.preSale"><span>{{film.wish}}</span>人想看</p>
      <p v-else><span>观众{{film.sc}}</span></p>
      <p >{{film.scm}}</p>
      <p>{{film.showInfo}}</p>
    </div>
    <div class="operate-btn">
      <common-button
        mode="outline"
        size="small"
        :color="film.preSale ? 'blue' : 'red'"
      >
        {{film.preSale ? '预售' : '购票'}}
      </common-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/_variables';

.film-card {
  display: flex;
  padding: 16px 12px;
  border-bottom: 1px solid @grey-de;
  &:last-child {
    border-bottom: 0;
  }
}
.central {
  flex: 1;
  margin-left: 12px;
  text-align: left;
  .title-bar {
    font-size: 16px;
    font-weight: 700;
    line-height: 1.6;
    color: @grey-3;
  }
  .info-box {
    display: inline-block;
    margin-left: 5px;
    line-height: 1.4;
    font-size: 12px;
    font-weight: normal;
  }
  .d-box,.imax-box,.three-d {
    display: inline-block;
    padding: 0 4px;
  }
  .d-box {
    border: 1px solid @gloomy-blue;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: @gloomy-blue;
    color: white;
  }
  .imax-box {
    margin-left: -4px;
    border: 1px solid @gloomy-blue;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: white;
    color: @gloomy-blue;
  }
  .three-d {
    border: 1px solid @gloomy-blue;
    border-radius: 3px;
    background-color: @gloomy-blue;
    color: white;
  }
}
.operate-btn {
  display: flex;
  flex: 0;
  align-items: center;
}
</style>

<script>
import CommonButton from 'components/CommonButton';

export default {
  name: 'film-card',
  props: ['film'],
  data() {
    return {

    }
  },
  components: {
    CommonButton
  },
  computed: {
    getFilmTitle() {
      const name = this.film.nm;
      const subName = name.length > 6 ? name.substring(0, 6) + '...' : name;
      return subName;
    }
  }
}
</script>
