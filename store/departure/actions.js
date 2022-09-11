const actions = {
  async addDeparture({ commit }, departure) {
    const response = await this.$axios.$post(
      "/departure/",
      departure
    );
    response.departure = departure;
    commit('ADD_DEPARTURE', departure)
  },
  async editDeparture({ commit }, departure) {
    const response = await this.$axios.$put(
      `/departure/${departure.id}/`,
      departure
    );
  },
  async viewDeparture({ commit }, customer) {
    const response = await this.$axios.$get(
      `/departure/`
    );
    commit('VIEW_DEPARTURE', response)
  },
  async searchTripDeparture({ commit }, location) {
    const response = await this.$axios.$get(
      `/departure/?search=${location}`
    );
    commit('VIEW_SEARCHED_DEPARTURE', response)

  },
  async deleteDeparture({ commit }, id) {
    const response = await this.$axios.$delete(
      `/departure/${id}/`
    );

  },
};

export default actions;
