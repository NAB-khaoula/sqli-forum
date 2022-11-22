<template>
  <ForumList
    v-for="category in categories"
    :key="category.id"
    :forums="getForumsForCategory(category)"
    :title="category.name"
    :category-id="category.id"
  />
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import ForumList from "./ForumList";
export default {
  components: { ForumList },
  props: { categories: { required: true, type: Array } },
  setup() {
    const store = useStore();
    const getForumsForCategory = ref((category) =>
      store.state.forums.filter((forum) => forum.categoryId === category.id)
    );
    return {getForumsForCategory}
  },
};
</script>

<style></style>
