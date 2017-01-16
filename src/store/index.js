import Vue from 'vue';
import Vuex from 'vuex';
import current from './modules/current';
import film from './modules/film';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    current,
    film
  },
  strict: false
});

export default store;
