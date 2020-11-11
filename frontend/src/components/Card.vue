<template>
  <article class="card">
    <div class="body">
      <div class="artwork-wrapper">
        <img src="https://img.pokemondb.net/artwork/pikachu.jpg" alt="todo" />
      </div>
      <div class="footer">
        <div class="info">
          <h5>Bulbasaur</h5>
          <ul>
            <li>Grass</li>
            <li>Poison</li>
          </ul>
        </div>
        <div class="favorite">
          <button class="btn-favorite">
            <svg
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
        .btn-favorite {
          all: unset;
          cursor: pointer;
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
    padding: 0.2rem;

    img {
      width: 100%;
      height: 100%;
      vertical-align: middle;
      margin: 2rem 0;
    }
  }
}
</style>
