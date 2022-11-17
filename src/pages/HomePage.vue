<template>
  <h1>Welcome to the Forum</h1>
  <category-list :categories="categories" />
</template>

<script>
import CategoryList from "../components/CategoryList";

export default {
  components: {
    CategoryList,
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style scoped></style>
