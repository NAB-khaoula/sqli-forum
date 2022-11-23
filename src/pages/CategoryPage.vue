<template>
  <h1>{{ category.name }}</h1>
  <router-link :to="{ name: `HomePage` }">
    &lt;= Back to Home
  </router-link>
  <forum-list
    :title="category.name"
    :forums="getForumsForCategory(category)"
  />
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import { useStore } from "vuex";
import ForumList from "../components/ForumList";
export default {
  components: {
    ForumList,
  },
  props: {
    id: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const store = useStore();
    const category = computed(() => store.state.categories.find(category => category.id === props.id))
    const getForumsForCategory = ref((category) => store.state.forums.filter(forum => forum.categoryId === category.id));
    return {category, getForumsForCategory}
  }
};
</script>



<style></style>
