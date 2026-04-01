import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/taxis',
            name: 'taxis',
            component: () => import('../views/DirectoryView.vue')
        },
        {
            path: '/rutas',
            name: 'rutas',
            component: () => import('../views/RoutesView.vue')
        },
        {
            path: '/registro',
            name: 'registro',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/panel',
            name: 'panel',
            component: () => import('../views/DashboardView.vue')
        },
        {
            path: '/exito',
            name: 'exito',
            component: () => import('../views/SuccessView.vue')
        }
    ]
})

export default router
