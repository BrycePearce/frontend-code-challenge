<template>
  <div id="app">
    <div class="search-header">
      <template v-if="isHomepage">
        <div class="filter">
          <button
            @click="toggleFavoriteFilter(false)"
            :class="{ 'filter-active': !isFavoriteFilterActive }"
          >
            All
          </button>
          <button
            @click="toggleFavoriteFilter(true)"
            :class="{ 'filter-active': isFavoriteFilterActive }"
          >
            Favorites
          </button>
        </div>
        <SearchOptions @update-display="updateDisplay"></SearchOptions>
      </template>
      <!-- Back Button -->
      <router-link v-else to="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
          />
        </svg>
      </router-link>
    </div>
    <!-- Body -->
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path" />
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
  data() {
    return {
      isHomepage: this.$route.name === "ViewAll",
    };
  },
  watch: {
    $route(to) {
      const isLoadingAboutPage = to.name === "About";
      if (isLoadingAboutPage) {
        this.isHomepage = false;
      } else {
        this.isHomepage = true;
      }
    },
  },
  mounted() {
    this.initializePokemonData();
  },
  computed: {
    isFavoriteFilterActive() {
      return this.$store.state.searchPreference.favorite;
    },
  },
  methods: {
    async initializePokemonData() {
      // initialize pokemon list
      const { text, type, favorite } = this.$store.state.searchPreference;
      this.$store.dispatch("setPokemonList", { text, type, favorite });

      // initialize pokemon types
      const pokemonTypesQuery = "query { pokemonTypes }";
      const { data } = await api.getPokemonData(pokemonTypesQuery);
      this.$store.dispatch("setPokemonTypes", data.pokemonTypes);
    },
    toggleFavoriteFilter(updatedValue) {
      this.$store.dispatch("setSearchPreferences", {
        modifiedKey: "favorite",
        updatedValue,
      });
      this.updateDisplay();
    },
    updateDisplay(limit) {
      let preferences = this.$store.state.searchPreference;
      if (limit) {
        preferences["limit"] = limit;
      }
      this.$store.dispatch("setPokemonList", preferences);
    },
    clearFilterPreferences() {
      // when the user is done searching, clear the filters so they can search again
      this.$store.dispatch();
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

// Header

.search-header {
  box-shadow: 0 2px 3px rgba(68, 66, 66, 0.5);
  padding: 1rem;
}

.filter {
  display: flex;
  border: 1px solid $base-green;
  margin-bottom: 1rem;
  cursor: pointer;

  button {
    all: unset;
    flex-grow: 1;
    text-align: center;
    font-size: large;
    border: $base-green;
    color: $base-green;
    padding: $interactable-size;
  }

  .filter-active {
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
