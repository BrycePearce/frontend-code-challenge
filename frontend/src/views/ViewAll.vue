<template>
  <main>
    <Card />
    <Card />

    <Card />

    <Card />

    <Card />
  </main>
</template>

<script>
// @ is an alias to /src
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
}
</style>
