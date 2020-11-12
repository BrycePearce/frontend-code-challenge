import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonList: []
  },
  mutations: {
    setPokemonList(state, pokemon) {
      state.pokemonList = pokemon;
    }
  },
  actions: {
    setPokemonList({
      commit
    }, pokemonList) {
      // de-reference
      const payload = [...pokemonList.pokemons.edges];
      commit("setPokemonList", payload);
    }
  }
});