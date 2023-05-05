<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { reactive } from 'vue'

const state = reactive({ count: 0 })
</script>