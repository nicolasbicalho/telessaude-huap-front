<script setup>
  import Sidenav from '@/components/Sidenav.vue';
</script>

<template>
  <div class="layout-wrapper">
    <Sidenav />
    <div class="layout-container">
        <app-layout-navbar />

        <div class="layout-content">
          <div class="grow">
            <router-view />
          </div>
        </div>
      </div>
  </div>
</template>

<style scoped>
  .layout-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
  }
</style>
