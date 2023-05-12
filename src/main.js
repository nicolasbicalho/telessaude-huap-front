import { createApp } from 'vue';
import { Quasar } from 'quasar';

import App from './App.vue';
import router from './router';
import quasarUserOptions from './quasar-user-options';

import "quasar/dist/quasar.sass"

import './assets/main.css';

const app = createApp(App);
app.use(Quasar, quasarUserOptions);
app.use(router);
app.mount('#app');
