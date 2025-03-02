import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import AboutMe from '@/views/Home/Pages/AboutMe.vue'
import MyResume from '@/views/Home/Pages/MyResume.vue'
import MyPortfolio from '@/views/Home/Pages/MyPortfolio.vue'
import MyBlog from '@/views/Home/Pages/MyBlog.vue'
import ContactMe from '@/views/Home/Pages/ContactMe.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '',
      component: HomeView,
      children: [
        {
          path: '',
          redirect: '/about',
        },
        {
          path: '/about',
          name: 'about',
          component: AboutMe,
        },
        {
          path: '/resume',
          name: 'resume',
          component: MyResume,
        },
        {
          path: '/portfolio',
          name: 'portfolio',
          component: MyPortfolio,
        },
        {
          path: '/blog',
          name: 'blog',
          component: MyBlog,
        },
        {
          path: '/contact-me',
          name: 'contact-me',
          component: ContactMe,
        },
      ],
    },
  ],
})

export default router
