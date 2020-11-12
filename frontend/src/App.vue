<template>
  <div id="app">
    <div class="header">
      <nav>
        <router-link to="/">All</router-link>
        <router-link to="/about">Favorites</router-link>
      </nav>
      <SearchOptions></SearchOptions>
    </div>

    <!-- Body -->
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
import SearchOptions from "@/components/SearchOptions.vue";

// Api
import * as api from "./api/api";

export default {
  name: "home",
  components: {
    SearchOptions,
  },
  mounted() {
    this.setPokemonDataStore();
  },
  methods: {
    async setPokemonDataStore() {
      const basicPokemonDataQuery =
        "query { pokemons(query: { limit: -1, offset: 0 }) { edges { name, types, isFavorite, id, image } } }";

      const { data } = await api.getPokemonData(basicPokemonDataQuery);
      this.$store.dispatch("setPokemonList", data);
    },
  },
};
</script>

<style lang="scss">
@import "./assets/_variables.scss";

body {
  /* Fallback fonts. Uses the first found */
  font-family: "Segoe UI", "Open Sans", "Helvetica Neue", sans-serif;
}

.header {
  box-shadow: 0 2px 3px rgba(68, 66, 66, 0.5);
  padding: 1rem;
}

// Header
nav {
  display: flex;
  border: 1px solid $base-green;
  margin-bottom: 1rem;
  cursor: pointer;

  a {
    all: unset;
    flex-grow: 1;
    text-align: center;
    font-size: large;
    border: $base-green;
    color: $base-green;
    padding: $interactable-size;
  }

  .router-link-exact-active {
    background: $base-green;
    color: white;
  }
}

// Router Transitions
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s linear;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
