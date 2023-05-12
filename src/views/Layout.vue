<script setup>
  import Sidenav from '@/components/Sidenav.vue';
</script>

<template>
  <div class="layout-container">
    <Sidenav />
    <div class="layout-page-container">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
  .layout-container {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .layout-page-container {
    flex-grow: 1;
  }
</style>
