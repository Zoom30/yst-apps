import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AppAboutView from '@/views/AppAboutView.vue'
import AppPrivacyView from '@/views/AppPrivacyView.vue'

const router = createRouter({
  // Hash history works on GitHub Pages without any server configuration
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/apps/:slug', component: AppAboutView },
    { path: '/apps/:slug/privacy', component: AppPrivacyView },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
