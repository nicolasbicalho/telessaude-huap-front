<template>
  <div id="appointment-call">
    {{ meetId }}
    <!-- <JitsiMeet
        ref="jitsiRef"
        domain="meet.jit.si"
        :options="jitsiOptions"
    /> -->
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router'
// import { JitsiMeet } from '../components/JitsiMeet.vue';

const route = useRoute();
const meetId = ref(null);

    onMounted(() => {
      meetId.value = route.params.meetId
    })


</script>

<style scoped>
#appointment-call {
    padding: 36px
}
</style>
