const actions = {
    async addReturn({ commit }, items) {
      const response = await this.$axios.$post(
        "/return/",
        items
      );
    },
    async editReturn({ commit }, items) {
      const response = await this.$axios.$put(
        `/return/${items.id}/`,
        items
      );
    },
    async viewReturn({ commit }, customer) {
      const response = await this.$axios.$get(
        `/return/`
      );
      commit('VIEW_RETURN', response)
  
    },
    async searchTripReturn({ commit }, location) {
        const response = await this.$axios.$get(
          `/return/?search=${location}`
        );
        commit('VIEW_SEARCHED_RETURN', response)
    
      },
    async deleteReturn({ commit }, id) {
      const response = await this.$axios.$delete(
        `/return/${id}/`
      );
  
    },
  };
  
  export default actions;
  