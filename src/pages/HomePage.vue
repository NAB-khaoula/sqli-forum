<template>
  <h1 class="push-top">
    Welcome to the Forum
  </h1>
  <CategoryList :categories="categories" />
</template> -->

<!-- Composition API -->
<script >
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';
import CategoryList from '@/components/CategoryList';
export default {
  name: "HOME",
  components: {
    CategoryList
  },
  setup() {
    const store = useStore();
    const categories = computed(() => store.state.categories);

    return { categories };
  },
};
</script>



<style scoped></style>



