import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonList: [],
    searchPreference: {
      text: "",
      type: "",
      view: "grid"
    }
  },
  mutations: {
    setPokemonList(state, payload) {
      state.pokemonList = payload;
    },
    setSearchPreferences(state, payload) {
      state.searchPreference[payload.modifiedKey] = payload.updatedValue;
    }
  },
  actions: {
    setPokemonList({
      commit
    }, pokemonList) {
      // de-reference
      const payload = [...pokemonList.pokemons.edges];
      commit("setPokemonList", payload);
    },
    setSearchPreferences({
      commit
    }, updatedPreference) {
      const {
        modifiedKey,
        updatedValue
      } = updatedPreference;

      commit("setSearchPreferences", {
        modifiedKey,
        updatedValue
      });
    }
  }
});