<template>
  <article class="card">
    <div class="body">
      <div @click="loadDetailPage(pokemon.name)" class="artwork-wrapper">
        <img :src="pokemon.image" :alt="pokemon.name" />
      </div>
      <div class="footer">
        <div class="info">
          <h5>{{ pokemon.name }}</h5>
          <ul>
            <li v-for="type in pokemon.types" :key="type">{{ type }}</li>
          </ul>
        </div>
        <Favorite :id="pokemon.id" :state="pokemon.isFavorite"></Favorite>
      </div>
    </div>
  </article>
</template>

<script>
import Favorite from "./Favorite";

export default {
  name: "Card",
  props: {
    pokemon: Object,
  },
  components: {
    Favorite,
  },
  methods: {
    loadDetailPage(pokemonName) {
      this.$router.push({
        name: "About",
        params: { pokemonName },
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.card {
  display: flex;
  position: relative;
  flex-direction: column;
  border: 2px solid $base-gray;
  border-radius: 0.25rem;
  width: 9.5rem;

  .body {
    display: flex;
    flex-direction: column;

    .footer {
      display: flex;
      justify-content: space-around;
      background-color: $base-gray;
      padding: 0.5rem 0;

      h5 {
        font-size: large;
        margin: 0;
      }

      ul {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;

        li:not(:last-child)::after {
          white-space: pre;
          content: ", ";
        }
      }
    }
  }

  .artwork-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 0.2rem;
    height: 13rem;

    img {
      object-fit: cover;
      max-width: 100%;
      max-height: 100%;
    }
  }
}
</style>
