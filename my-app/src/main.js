
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Ensure this is a default import

const app = createApp(App);
app.use(router);
app.mount('#app');
