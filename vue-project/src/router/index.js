import { createRouter, createWebHistory } from 'vue-router';
import index from '@/views/index.vue';
import education from '@/views/education.vue';


const routes = [
    { path: '/', component: index }, // Default route is Login
    { path: '/education', component: education },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;