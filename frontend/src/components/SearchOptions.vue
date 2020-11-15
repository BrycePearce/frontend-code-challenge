<template>
  <div class="search-options">
    <input
      v-model="searchText"
      @input="updatePreferenceStore('text', searchText)"
      placeholder="Search"
      type="text"
      aria-label="Search"
    />
    <select
      v-model="selectedFilter"
      @change="updatePreferenceStore('type', selectedFilter)"
      aria-label="Type"
    >
      <option value="" selected>Type</option>
      <option v-for="filter in $store.state.pokemonTypes" :key="filter">
        {{ filter }}
      </option>
    </select>
    <div class="filter-btns">
      <button
        @click="updatePreferenceStore('view', 'list')"
        type="button"
        aria-label="list view"
      >
        <svg height="50" viewBox="0 0 24 24" width="50">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </button>
      <div class="vertical-spacer"></div>
      <button
        @click="updatePreferenceStore('view', 'grid')"
        type="button"
        aria-label="grid view"
      >
        <svg height="50" viewBox="0 0 24 24" width="50">
          <path d="M0 0h24v24H0z" fill="none" />
          <path
            d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchOptions",
  data() {
    return {
      searchText: this.$store.state.searchPreference.text,
      selectedFilter: this.$store.state.searchPreference.type,
    };
  },
  methods: {
    updatePreferenceStore(modifiedKey, updatedValue) {
      const payload = {
        modifiedKey,
        updatedValue,
      };
      this.$store.dispatch("setSearchPreferences", payload);

      this.$emit("update-display");
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/_variables.scss";

// Grid View
.search-options {
  display: grid;
  column-gap: 0.5rem;
  border: none;
  max-width: 100%;

  input,
  select {
    border: none;
    padding: 0.8rem;
    text-align: left;
    background-color: $base-gray;
    color: gray;
    margin: 0.2rem 0;
    outline: none;
  }

  select {
    display: block;
    position: relative;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    /*
     * Render SVG color unto select arrow
     * https://stackoverflow.com/questions/25477819/scss-variable-in-background-image-with-svg-image-data-uri
     */
    @function url-friendly-colour($colour) {
      @return "%23" + str-slice("#{$colour}", 2, -1);
    }
    background: url("data:image/svg+xml;utf8,<svg viewBox='0 0 24 24' fill='#{url-friendly-colour($base-green)}' xmlns='http://www.w3.org/2000/svg'><g><path d='M6 10l5 5 5-5z'/>'/></g></svg>")
      no-repeat $base-gray;
    svg {
      fill: green;
    }
    background-position: right 5px top 50%;

    option {
      background-color: white;
      font-size: medium;
      color: black;
      overflow-y: scroll;
      :hover {
        background: $base-green;
      }
    }
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
      grid-column: 7 / 10;
    }

    :nth-child(3) {
      grid-area: input3;
      grid-column: 10 / -1;
    }
  }

  .filter-btns {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    fill: $base-green;
    height: 100%;

    :hover {
      background-color: $base-gray;
    }

    button {
      all: unset;
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100%;

      cursor: pointer;
    }

    svg {
      height: 100%;
    }

    .vertical-spacer {
      border-left: 1px solid gray;
      opacity: 0.2;
      height: 100%;
    }
  }
}

// List view
</style>
