import About from "@/pages/About.vue";
import Home from "@/pages/Home.vue";
import LayoutMaster from "@/layouts/LayoutMaster.vue"
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Count from "@/pages/Count.vue";
import ApiPage from "@/pages/ApiPage.vue";

const routes: RouteRecordRaw[] = [
    {
        path:"/",
        component: LayoutMaster,
        children:[
            {
                path:"",
                name:"Home",
                component: Home,
            },
            {
                path:"about",
                name:"About",
                component: About,
            },
            {
                path:"count",
                name:"Count",
                component: Count,
            },
            {
                path:"count/:num",
                name:"CountNum",
                component: Count,
            },
            {
                path:"api",
                name:"Api",
                component: ApiPage,
            },
        ]

    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
})

// const app = createApp(App) 
//     app.use(router)
//     app.mount("#app")


export default router
