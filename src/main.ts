import './style/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './common/router.js';
import store from './common/store.js';
import pinia from './common/pinia.ts';

const app = createApp(App)

app.use(router).use(store).use({pinia}).mount('#app');

app.config.errorHandler = (err, instance, info) => {

}

export default app;
