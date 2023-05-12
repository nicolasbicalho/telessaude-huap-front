<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goBack() {
  router.back();
}
</script>

<template>
  <div>
    <button @click="goBack">go back</button>
  </div>
</template>
