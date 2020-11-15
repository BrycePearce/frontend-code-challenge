import Vue from "vue";
import Vuex from "vuex";

import * as api from "@/api/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemonList: [],
    pokemonTypes: [],
    searchPreference: {
      text: "",
      type: "",
      view: "grid",
      favorite: false
    }
  },
  mutations: {
    setPokemonList(state, payload) {
      state.pokemonList = payload;
    },
    setPokemonTypes(state, payload) {
      state.pokemonTypes = payload;
    },
    setSearchPreferences(state, payload) {
      state.searchPreference[payload.modifiedKey] = payload.updatedValue;
    }
  },
  actions: {
    async setPokemonList({
      commit,
      getters
    }, {
      text,
      type,
      favorite,
      limit = 151
    }) {
      const filterQuery = `query { pokemons(query: { limit: ${limit}, offset: 0, search: "${text}", filter: { type: "${
        type
      }", isFavorite: ${favorite} } }) { edges { name, types, isFavorite, id, image } } }`;
      const {
        data
      } = await api.getPokemonData(filterQuery);


      commit("setPokemonList", data.pokemons.edges);
    },
    setPokemonTypes({
      commit
    }, types) {
      commit("setPokemonTypes", types);
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