import { createRouter, createWebHashHistory } from 'vue-router'

// 懒加载
const TabBarHome = () => import('../views/home/TabBarHome.vue')
const TabBarCategory = () => import('../views/category/TabBarCategory.vue')
const TabBarCart = () => import('../views/cart/TabBarCart.vue')
const TabBarProfile = () => import('../views/profile/TabBarProfile.vue')

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: TabBarHome
  },
  {
    path: '/category',
    component: TabBarCategory
  },
  {
    path: '/cart',
    component: TabBarCart
  },
  {
    path: '/profile',
    component: TabBarProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
