import types from '../mutation-types';

const state = {
  nav: 'hot'
};

const mutations = {
  [types.UPDATE_CURRENT_FILM_NAV](state, navType) {
    console.log('-----current----', navType);
    state.nav = navType;
  }
};

const actions = {
  updateCurrentFilmNav({ commit }, navType) {
    commit(types.UPDATE_CURRENT_FILM_NAV, navType);
  }
};

const getters = {

};

export default {
  state,
  mutations,
  actions,
  getters
};
