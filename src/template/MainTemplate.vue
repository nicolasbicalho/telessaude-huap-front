
<template>
  <div class="template-wrapper template-2">
    <div class="template-inner">
      <app-template-sidenav />

      <div class="template-container">
        <app-template-navbar />

        <div class="template-content">
          <div class="router-transitions container-fluid flex-grow-1 container-p-y">
            <router-view />
          </div>
        </div>
      </div>
    </div>
    <div class="template-overlay" @click="closeSidenav"></div>
  </div>
</template>
<script setup>
import { ref, onUpdated } from 'vue'


</script>

<style scoped>

</style>
