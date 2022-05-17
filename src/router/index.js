import { createRouter, createWebHistory} from "vue-router";

/*-------------ROUTER CONFIGURATION -------------*/
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            // Lazy loaded
            path: "/",
            name: "home",
            component: () => import("../components/BeforeUpload.vue"),
        },
        {
            // Lazy loaded
            path: "/loading",
            name: "loading",
            component: () => import("../components/Loader.vue"),
        },
        {
            // Lazy loaded
            path: "/uploaded",
            name: "uploaded",
            component: () => import("../components/AfterUpload.vue"),
            },

    ],
});

export default router;