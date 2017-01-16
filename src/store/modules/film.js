import { getFilmList } from 'api';
import types from '../mutation-types';

const state = {
  hotFilms: []
};

const mutations = {
  [types.ADD_HOT_FILMS](state, films) {
    films.forEach(film => {
      state.hotFilms.push(film);
    });
  },
  [types.UPDATE_HOT_FILMS_NEXT](state, hasNext) {
    state.hasMoreHot = hasNext;
  }
};

const actions = {
  async addHotFilms({ commit }) {
    try {
      const data = await getFilmList('hot', 0, 8);
      console.log('---获取热映电影----', data);
      const d = data.data;
      commit(types.ADD_HOT_FILMS, d.movies);
      if (d.hasNext) {
        commit(types.UPDATE_HOT_FILMS_NEXT, true);
      } else {
        commit(types.UPDATE_HOT_FILMS_NEXT, false);
      }
    } catch (e) {
      console.log('---获取热映电影出错----', e);
    }
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
