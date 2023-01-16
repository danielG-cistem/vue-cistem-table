import { createApp } from 'vue';
import App from './App.vue';
import router from './router/routes.js';

import './assets/css/reset.css';

const app = createApp( App );

app.use( router );

app.mount('#app');
