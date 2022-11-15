<template>
  <!-- instead of importing component statically, we can use router-view to render the proper page of that route. -->
  <!-- <HomePage></HomePage> -->
  <router-view/>
</template>

<script>


export default {
  name: 'App',
  // components: {
    // HomePage,
    // ThreadsShowPage,
    // ThreadListView
  // } 
}
</script>

<style scoped>
  @import "./assets/style.css"
</style>
