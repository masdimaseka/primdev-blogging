import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import Home from '@/views/pages/home.vue'
import About from '@/views/pages/about.vue'
import Dashboard from '@/views/pages/author/dashboard.vue'
import Blog from '@/views/pages/author/blog.vue'
import CreateBlog from '@/views/pages/author/createBlog.vue'
import UpdateBlog from '@/views/pages/author/updateBlog.vue'
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: UserTemplates,
    children: [
      {
        path: '/',
        name: 'user-home',
        component: Home
      },
      {
        path: '/about',
        name: 'about',
        component: About
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AuthorTemplates,
    children: [
      {
        path: '/dashboard',
        name: 'author-dashboard',
        component: Dashboard
      },
      {
        path: '/blog',
        name: 'author-blog',
        component: Blog
      },
      {
        path: '/blog/create',
        name: 'author-create-blog',
        component: CreateBlog
      },
      {
        path: '/blog/update',
        name: 'author-update-blog',
        component: UpdateBlog
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
