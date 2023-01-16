import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        redirect: "/products",
        children: [
            {
                path: "/products",
                name: "products",
                component: () => import("@/modules/Products/layouts/ProductsLayout.vue"),
            },
            {
                path: "/users",
                name: "users",
                component: () => import("@/modules/Users/layouts/UsersLayout.vue"),
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error-404",
        component: () => import("@/modules/ErrorViews/ErrorView404.vue")
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;
