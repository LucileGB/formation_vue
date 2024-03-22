import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { stockRoutes } from '@/stock/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/legal',
      name: 'legal',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // Evite de télécharger tout un bout de code pour rien, grâce au lazyLoading
      component: () => import('../views/LegalView.vue')
    },
    ...stockRoutes
  ]
})

export default router
