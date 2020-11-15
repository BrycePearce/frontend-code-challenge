<template>
  <div class="favorite">
    <button
      @click="toggleFavorite"
      class="btn-favorite"
      type="button"
      aria-label="favorite"
      :aria-pressed="`${isFavorite}`"
    >
      <svg
        :class="{ 'fill-red': isFavorite }"
        xmlns="http://www.w3.org/2000/svg"
        height="24"
        viewBox="0 0 24 24"
        width="24"
      >
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        />
      </svg>
    </button>
  </div>
</template>

<script>
import * as api from "@/api/api";

export default {
  name: "Favorite",
  props: {
    id: String,
    state: Boolean,
  },
  data() {
    return {
      isFavorite: this.state,
    };
  },
  methods: {
    async toggleFavorite() {
      const mutation = this.isFavorite
        ? "unFavoritePokemon"
        : "favoritePokemon";

      const updateQuery = `mutation {${mutation}(id: "${this.id}") {isFavorite}}`;
      const { data } = await api.getPokemonData(updateQuery);
      if (data) {
        // fill the heart container
        this.isFavorite = data[mutation].isFavorite;

        // dispatch the filter to update results everywhere
        this.$store.dispatch(
          "setPokemonList",
          this.$store.state.searchPreference
        );
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";
.favorite {
  cursor: pointer;
  .btn-favorite {
    all: unset;
    height: 100%;
  }
  align-self: center;
  fill: none;
  stroke: red;
  stroke-width: 2px;
  border: none;

  .fill-red {
    fill: red;
  }
}
</style>
