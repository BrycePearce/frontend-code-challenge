<template>
  <main v-if="filteredPokemonList.length > 0">
    <template v-for="pokemon in filteredPokemonList">
      <Card :pokemon="pokemon" :key="pokemon.id" />
    </template>
  </main>
  <div v-else class="error-message">
    <span>There are no Pokemon matching your search criteria.</span>
  </div>
</template>

<script>
// Components
import Card from "@/components/Card.vue";

export default {
  name: "ViewAll",
  components: {
    Card,
  },
  computed: {
    filteredPokemonList() {
      const { text, type, favorite } = this.$store.state.searchPreference;
      const pokemonList = this.$store.state.pokemonList;
      const isFilteringByType = type !== "";
      const isFilteringByFavorite = favorite;

      const filterByName = (pokemon) =>
        pokemon.name.toLowerCase().includes(text.toLowerCase());

      const filterByType = (pokemon) =>
        isFilteringByType ? pokemon.types.includes(type) : true;

      const filterByFavorite = (pokemon) =>
        isFilteringByFavorite ? pokemon.types.isFavorite : true;

      return pokemonList
        .filter(filterByName)
        .filter(filterByType)
        .filter(filterByFavorite);
    },
  },
};
</script>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  padding: 1rem 0.5rem;
  row-gap: 1rem;
}

.error-message {
  display: flex;
  justify-content: center;
  font-size: x-large;
  margin-top: 5rem;
}
</style>
