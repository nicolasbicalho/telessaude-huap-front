<script setup>
import { ref, defineProps } from 'vue';
import moment from 'moment';

const props = defineProps(['email'])

</script>

<template>
  <nav class="navbar">
    <div>
        {{ props.email }}
    </div>
  </nav>
</template>

<style scoped>
  .navbar {
    padding: 0.5rem 1rem;
    background-color: rgb(50, 50, 50);
    color: white;
    display: flex;
  }
</style>
