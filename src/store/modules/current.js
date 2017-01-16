export default {
  state: {
    tab: 'film',
    nav: 'hot'
  },
  mutations: {
    updateCurrentTab(state, tabType) {
      state.tab = tabType;
    }
  },
  actions: {
    updateCurrentTab({ dispatch, commit }, tabType) {
      commit('updateCurrentTab', tabType);
    }
  },
  getters: {

  }
};
