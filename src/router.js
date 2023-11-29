import { createRouter, createWebHistory } from 'vue-router';
import LogIn from './views/LogIn.vue';
import Register from './views/Register.vue';
import Meals from './views/Meals.vue';

const routes = [
    { path: '/login', component: LogIn },
    { path: '/register', component: Register },
    { path: '/meals', component: Meals }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;