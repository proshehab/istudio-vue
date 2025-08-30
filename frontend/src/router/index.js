import  {createRouter, createWebHistory } from "vue-router";
import Home from "@/views/pages/Home.vue";
import About from "@/views/pages/About.vue";
import Service from "@/views/pages/Service.vue";
import Project from "@/views/pages/Project.vue";
import Contact from "@/views/pages/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/about",
        name: "About",
        component: About
    },
    {
        path: "/service",
        name: "Service",
        component: Service
    },
    {
        path: "/project",
        name: "Project",
        component: Project
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact
    }

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;