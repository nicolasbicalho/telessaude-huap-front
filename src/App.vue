<script>
  export default {
    name: 'app',
    metaInfo: {
      title: 'Index',
      titleTemplate: '%s',
    },
  };
</script>
<script setup>
  import { onUpdated } from 'vue';

  onUpdated(() => {
    setTimeout(() => document.body.classList.remove('app-loading'), 1);
  });
</script>

<template>
  <div class="app-container">
    <router-view />
  </div>
</template>

<style scoped>
  .app-container {
    height: 100%;
  }
</style>
