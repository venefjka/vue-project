// Router - библиотека маршрутизации (для SPA Single Page Application приложений)

import { createRouter, createWebHistory } from 'vue-router'
import MainPageView from '../views/MainPageView.vue'
import CatalogView from '../views/CatalogView.vue'
import ItemPageView from '@/views/ItemPageView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'mainPage',
      component: MainPageView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/catalog/item/:id',
      name: 'itemPage',
      component: ItemPageView
    }
  ]
})

export default router
