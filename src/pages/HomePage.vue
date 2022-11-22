<template>
  <h1 class="push-top">
    Welcome to the Forum
  </h1>
  <CategoryList :categories="categories" />
</template>

<!-- Composition API -->
<script setup>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import CategoryList from "@/components/CategoryList";

const store = useStore();
const categories = computed(() => store.state.categories);
</script>

<style scoped></style>
