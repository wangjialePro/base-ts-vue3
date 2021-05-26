import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Index from '@/components/HelloWorld.vue'
const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Index,
    }
]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router
