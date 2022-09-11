const mutations = {
  VIEW_DEPARTURE: (state, payload) => {
    state.query_set = payload;
  },
  VIEW_SEARCHED_DEPARTURE: (state, payload) => {
    state.searched_query_set_departure = payload;
  },
};

export default mutations;
