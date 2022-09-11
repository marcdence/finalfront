const actions = {
    async addBook({ commit }, items) {
      const response = await this.$axios.$post(
        "/booking/",
        items
      );
    },
    async editReturn({ commit }, items) {
      const response = await this.$axios.$put(
        `/return/${items.id}/`,
        items
      );
    },
    async viewBookUser({ commit }, items) {
        const response = await this.$axios.$get(
          `/user-book/`
        );
        commit('VIEW_RETURN', response)
      },
    async updateBookStatus({ commit }, items,status) {
        const response = await this.$axios.$put(
          `/booking/${items.id}/`,
          {
            'status':items.status
          }
        );
      },
    async viewBook({ commit }, customer) {
      const response = await this.$axios.$get(
        `/booking/`
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
  