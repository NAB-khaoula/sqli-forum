<template>
    <ThreadListView :threads="threads"/>
</template>

<script>

import sourceData from '../data.json';
import ThreadListView from '../components/ThreadListView.vue';

export default {
    components: {
        ThreadListView
    },
    data() {
        return {
            threads: sourceData.threads,
        };
    }
}

</script>


<style scoped>

</style>
