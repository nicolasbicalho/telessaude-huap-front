<script setup>
  import Sidenav from '@/components/Sidenav.vue';
</script>

<template>
  <div class="layout-container">
    <Sidenav />
    <router-view />
  </div>
</template>

<style scoped>
  .layout-container {
    height: 100%;
    display: flex;
  }
</style>
