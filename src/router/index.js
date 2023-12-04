import { ref } from 'vue';
import { createRouter, createWebHashHistory, createMemoryHistory } from "vue-router";

import Home from '../App.vue';

const routes = [
  {
    '/': Home
  }
]


const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router;