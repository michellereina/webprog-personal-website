import { createRouter, createWebHistory } from 'vue-router';
import education from '@/views/education.vue';
import index from '@/views/index.vue';
import interest from '@/views/interest.vue';
import goals from '@/views/goals.vue';
import gallery from '@/views/gallery.vue';
import reference from '@/views/reference.vue';
import survey from '@/views/survey.vue';

const routes = [
    { path: '/', component: index }, // Default route is Login
    { path: '/education', component: education },
    { path: '/interest', component: interest },
    { path: '/goals', component: goals },
    { path: '/gallery', component: gallery},
    { path:  '/reference', component: reference},
    { path:  '/survey', component: survey},
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;