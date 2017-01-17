<template>
  <div class="film-card">
    <img :src="film.img" />
    <div></div>
    <div>{{film.preSale ? '预售' : '购票'}}</div>
  </div>
</template>

<style lang="less" scoped>
@import '../assets/styles/_variables';

.film-card {
  display: flex;
  padding: 5px 8px;
  border-bottom: 1px solid @grey-de;
  &:last-child {
    border-bottom: 0;
  }
}
</style>

<script>
export default {
  name: 'film-card',
  props: ['film'],
  data() {
    return {

    }
  },
  components: {

  },
  mounted() {
    console.log('------电影------', this.film);
  }
}
</script>
