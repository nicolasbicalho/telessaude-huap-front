import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

import App from './App.vue';
import router from './router';
import quasarUserOptions from './quasar-user-options';

import "quasar/dist/quasar.sass"

import './assets/main.css';

const pinia = createPinia();
const app = createApp(App);

app.use(Quasar, quasarUserOptions);
app.use(pinia);
app.use(router);
app.mount('#app');
