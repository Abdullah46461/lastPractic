import {createRouter,createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/store.ts";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
            meta: {
                layout: 'main',
                auth: true

            }
        },
        {
          path: "/help",
          name: "Help",
          component: () => import('../views/Help.vue'),
          meta: {
            layout: 'main',
              auth: true
        }
        },
        {
            path: "/auth",
            name: "Auth",
            component: () => import('../views/Auth.vue'),
            meta: {
                layout: 'auth',
                auth: false


            }
        }
    ]
})
router.beforeEach((to, from, next) => {
    const requireAuth = to.meta.auth
    if (requireAuth && store.getters['auth/isAuthenticated']) {
        console.log(1)
        next()
    } else if(requireAuth && !store.getters['auth/isAuthenticated']) {
        console.log(2)
        next('/auth/message=auth')
    } else  {
        console.log(3)
        next()
    }
})
export default router;
