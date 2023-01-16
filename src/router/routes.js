import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: "/",
        redirect: "/products",
        children: [
            {
                path: "products",
                name: "products",
                component: () => import("@/modules/Products/layouts/ProductsLayout.vue"),
                meta: {
                    title: "Vue Cistem Table | Products"
                }
            },
            {
                path: "users",
                name: "users",
                component: () => import("@/modules/Users/layouts/UsersLayout.vue"),
                meta: {
                    title: "Vue Cistem Table | Users"
                }
            },
        ],
    },
    {
        path: "/:pathMatch(.*)*",
        name: "error-404",
        component: () => import("@/modules/ErrorViews/ErrorView404.vue"),
        meta: {
            title: "Vue Citem Table | Error 404"
        }
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

// Recorre el arreglo de rutas y extrae la propiedad "title".
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next();
});

export default router;
