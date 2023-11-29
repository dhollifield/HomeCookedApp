import './assets/main.css';
import 'v-calendar/style.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
