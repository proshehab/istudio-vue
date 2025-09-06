import { createRouter,createWebHashHistory } from "vue-router";
import homeIndex from '../components/pages/home/Index.vue';
import AdminHomeIndex from '../components/admin/home/Index.vue';

const routes = [
    
    {
        path:'/',
        name:'home',
        component:homeIndex,
    },
    {
        path:'/admin/dashboard',
        name:'admin.home.index',
        component:AdminHomeIndex
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})  
export default router;