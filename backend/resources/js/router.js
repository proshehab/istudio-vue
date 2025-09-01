import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './Pages/Dashboard.vue'
import Users from './Pages/Users.vue'

const routes = [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/users', name: 'users', component: Users },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
