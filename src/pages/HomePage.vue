<template>
    <category-list :categories="categories" />
</template>

<script>
import sourceData from "../data.json";
import CategoryList from '../components/CategoryList'

export default {
    components: {
        CategoryList,
    },
    data() {
        return {
            categories: sourceData.categories,
        };
    },
};
</script>

<style scoped>

</style>
