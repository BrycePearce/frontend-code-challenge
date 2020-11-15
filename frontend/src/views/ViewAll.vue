<template>
  <main v-if="$store.state.pokemonList.length > 0">
    <template v-for="pokemon in $store.state.pokemonList">
      <Card :pokemon="pokemon" :key="pokemon.id" />
    </template>
  </main>
  <div v-else class="error-message">
    <span>There are no Pokemon matching your search criteria.</span>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "ViewAll",
  components: {
    Card,
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
