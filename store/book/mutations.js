const mutations = {
    VIEW_RETURN: (state, payload) => {
        state.query_set = payload;
    },
    VIEW_SEARCHED_RETURN: (state, payload) => {
        state.searched_query_set_return = payload;
    },
};

export default mutations;
