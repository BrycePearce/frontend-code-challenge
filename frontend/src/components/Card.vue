<template>
  <article class="card">
    <div class="body">
      <div class="artwork-wrapper">
        <img :src="pokemon.image" :alt="pokemon.name" />
      </div>
      <div class="footer">
        <div class="info">
          <h5>{{ pokemon.name }}</h5>
          <ul>
            <li v-for="type in pokemon.types" :key="type">{{ type }}</li>
          </ul>
        </div>
        <div class="favorite">
          <button
            @click="toggleFavorite"
            class="btn-favorite"
            :aria-pressed="`${pokemon.isFavorite}`"
          >
            <svg
              :class="{ 'fill-red': pokemon.isFavorite }"
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
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "Card",
  props: {
    pokemon: Object,
  },
  methods: {
    toggleFavorite() {
      console.log(
        "todo - favorite should be componentized",
        this.pokemon.id,
        this.pokemon.isFavorite
      );
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

  .fill-red {
    fill: red;
  }
}
</style>
