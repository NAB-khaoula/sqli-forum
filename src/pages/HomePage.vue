<template>
    <forum-list :forums="forums" />
</template>

<script>
import sourceData from "../data.json";
import ForumList from '../components/ForumList'

export default {
    components: {
        ForumList,
    },
    data() {
        return {
            forums: sourceData.forums,
        };
    },
};
</script>

<style scoped>

</style>
