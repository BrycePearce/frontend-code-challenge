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
      const { text, type } = this.$store.state.searchPreference;
      const isFilteringByType = type !== "";

      return this.$store.state.pokemonList.filter((pokemon) => {
        const matchesType = pokemon.types.includes(type);
        const matchesName = pokemon.name
          .toLowerCase()
          .includes(text.toLowerCase());

        if (isFilteringByType) {
          return matchesName && matchesType;
        }

        return matchesName;
      });
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
