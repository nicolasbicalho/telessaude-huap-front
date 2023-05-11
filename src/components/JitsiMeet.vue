<template>
  <div id="jitsi-meet">
    <JitsiMeet
        ref="jitsiRef"
        domain="meet.jit.si"
        :options="jitsiOptions"
    />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { JitsiMeet } from '@mycure/vue-jitsi-meet';

const roonName = ref('');

const jitsiOptions = computed(() => {
    return {
    roomName: 'some-room-name',
    noSSL: false,
    userInfo: {
        email: 'user@email.com',
        displayName: '',
    },
    configOverwrite: {
        enableNoisyMicDetection: false
    },
    interfaceConfigOverwrite: {
        SHOW_JITSI_WATERMARK: false,
        SHOW_WATERMARK_FOR_GUESTS: false,
        SHOW_CHROME_EXTENSION_BANNER: false
    },
    onload: onIFrameLoad
    };
});

function onIFrameLoad() {

}

</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
