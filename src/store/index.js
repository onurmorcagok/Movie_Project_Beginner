import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "movieApp",
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchMovies: [],
    favorites: [],
  },
  mutations: {
    SET_MOVIES(state, movies) {
      state.searchMovies = movies;
    },
    SET_FAVORITE(state, movie) {
      state.favorites.push(movie);
    },
    REMOVE_FAVORITE(state, movie) {
      const index = state.favorites.findIndex(
        (item) => item.imdbID === movie.imdbID
      );
      state.favorites.splice(index, 1);
    },
  },
  actions: {
    searchMovie({ commit }, searchText) {
      const axios = require("axios");
      axios
        .get(
          "http://www.omdbapi.com/?i=tt3896198&apikey=d1be01a0&s=" + searchText
        )
        .then((response) => {
          if (response.data.totalResults) {
            commit("SET_MOVIES", response.data.Search);
          } else {
            window.vueInstance.$bvToast.toast(response.data.Error, {
              title: "Error",
              audoHideDelay: 2000,
            });
          }
        });
    },
  },
  getters: {
    getFavorites: (state) => state.favorites,
  },
  plugins: [vuexLocal.plugin],
});
