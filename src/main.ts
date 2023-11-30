import './style/main.css'

import { createApp } from 'vue';
import App from './App.vue';
import router from './common/router.js';
import store from './store';

import pinia from './common/pinia.ts';

const app = createApp(App)

app.use(store);

app.use(router).use({pinia}).mount('#app');


app.config.errorHandler = (err, instance, info) => {

}

export default app;
