import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import( /* webpackChunkName: "HomeView" */ '@/views/home.vue')
  },
  {
    path: '/models',
    name: 'models',
    component: () => import( /* webpackChunkName: "Models" */ '@/views/models.vue')
  },
  {
    path: '/miners',
    name: 'miner',
    component: () => import( /* webpackChunkName: "Miner" */ '@/views/miner.vue')
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import( /* webpackChunkName: "blog" */ '@/views/blog.vue')
  },
  // {
  //   path: '/learn',
  //   name: 'learn',
  //   component: () => import( /* webpackChunkName: "learn" */ '@/views/learn.vue')
  // },
  {
    path: '/helpcenter',
    name: 'helpcenter',
    component: () => import( /* webpackChunkName: "helpcenter" */ '@/views/helpcenter.vue')
  },
  {
    path: '/faqs',
    name: 'faqs',
    component: () => import( /* webpackChunkName: "faqs" */ '@/views/faqs.vue')
  },
  {
    path: '/blogInfo/:keyword',
    name: 'blogInfo',
    component: () => import('@/views/blogInfo.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  }
})

export default router
