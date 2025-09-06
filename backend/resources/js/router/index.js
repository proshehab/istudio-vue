import { createRouter,createWebHashHistory } from "vue-router";
import homeIndex from '../components/pages/home/Index.vue';

const routes = [
    
    {
        path:'/',
        name:'home',
        component:homeIndex,
    }
]