<template>
  <div class="container">
    <div class="card">
      <div class="artwork-wrapper">
        <img src="https://img.pokemondb.net/artwork/raichu.jpg" />
        <button class="audio">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 0 24 24"
            width="48"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
            />
          </svg>
        </button>
      </div>
      <div class="info">
        <div class="top">
          <div class="title">
            <div class="left">
              <h1>Raichu</h1>
              <span>Electric</span>
            </div>
            <div class="right">< 3</div>
          </div>
          <div class="progress">
            <div class="progress-combat-power"></div>
            <b>CP: 891</b>
          </div>

          <div class="progress">
            <div class="progress-health-points"></div>
            <b>HP: 1008</b>
          </div>
        </div>
        <div class="measurements-group">
          <div class="measurement">
            <b>Weight</b>
            <span>7.88kg - 10.13kg</span>
          </div>
          <div class="measurement">
            <b class="classification">Height</b>
            <span>0.44m - 0.56m</span>
          </div>
        </div>
      </div>
    </div>
    <h2>Evolutions</h2>
    <!-- <Card></Card> -->
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "About",
  components: {
    Card,
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.container {
  padding: 1rem;

  .card {
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid darkgray;

    .artwork-wrapper {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 20rem;
      padding: 0.2rem;
      img {
        object-fit: cover;
        max-width: 100%;
        max-height: 100%;
      }

      .audio {
        all: unset;
        cursor: pointer;
        position: absolute;
        fill: $base-green;

        left: 0;
        bottom: 0px;
        margin: 0;

        @media screen and (min-width: $small-screen) {
          left: 0;
          bottom: 0px;
          margin: 1rem;
        }
      }
    }

    .info {
      display: flex;
      flex-direction: column;
      background-color: $base-gray;

      .top {
        padding: 0.5rem;
      }

      .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.5rem;
        h1 {
          margin: 0;
          padding: 0;
          font-size: x-large;
        }
        span {
          font-size: small;
          font-weight: 500;
        }
      }
    }

    .progress {
      display: flex;
      margin-bottom: 8px;
      align-items: center;
      b {
        margin-left: 8px;
        min-width: 70px;
        white-space: nowrap;
      }
      div {
        height: 10px;
        width: 100%;
        border-radius: 3.5rem;
      }
      &-combat-power {
        background-color: #9f9fff;
      }
      &-health-points {
        background-color: #71c1a1;
      }
    }

    .measurements-group {
      display: flex;
      border-top: 1px solid #cccccc;
      .measurement {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        padding: 16px;
        *:first-child {
          margin-bottom: 8px;
        }
      }
      .measurement:first-child {
        border-right: 1px solid #cccccc;
      }
    }
  }
}
</style>
