import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Pages/Dashboard.vue'
import Users from './Pages/Users.vue'
import Login from './Pages/admin/auth/Login.vue'


const routes = [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/users', name: 'users', component: Users },
    { path: '/login', name: 'login', component: Login },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
