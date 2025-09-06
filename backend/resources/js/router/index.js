import { createRouter,createWebHashHistory } from "vue-router";
import homeIndex from '../components/pages/home/Index.vue';
import AdminHomeIndex from '../components/pages/admin/home/Index.vue';

const routes = [
    
    {
        path:'/',
        name:'home',
        component:homeIndex,
    },
    {
        path:'/admin',
        name:'admin',
        component:AdminHomeIndex
    }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})  
export default router;