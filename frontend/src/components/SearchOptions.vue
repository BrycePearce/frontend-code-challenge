<template>
  <div class="search-options">
    <input placeholder="Search" />
    <input placeholder="Search" />
    <input placeholder="Search" />
  </div>
</template>

<script>
export default {
  name: "SearchOptions",
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

.search-options {
  display: grid;
  column-gap: 0.5rem;
  border: none;

  input {
    all: unset;
    padding: 0.8rem;
    text-align: left;
    background-color: $base-gray;
    margin: 0.2rem 0;
  }

  @media screen and (min-width: $medium-screen) {
    grid-template-columns: repeat(11, minmax(50px, 1fr));
    grid-template-areas: "input1 input2 input3";

    :first-child {
      grid-area: input1;
      grid-column: 1 / 7;
    }

    :nth-child(2) {
      grid-area: input2;
      grid-column: 7 / 11;
    }

    :nth-child(3) {
      grid-area: input3;
      grid-column: 11 / 12;
    }
  }
}
</style>
