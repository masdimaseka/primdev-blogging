import AuthorTemplates from '@/views/templates/authorTemplates.vue'
import UserTemplates from '@/views/templates/userTemplates.vue'
import AuthTemplates from '@/views/templates/authTemplates.vue'
import Home from '@/views/pages/home.vue'
import About from '@/views/pages/about.vue'
import Dashboard from '@/views/pages/author/dashboard.vue'
import Blog from '@/views/pages/author/blog.vue'
import CreateBlog from '@/views/pages/author/createBlog.vue'
import UpdateBlog from '@/views/pages/author/updateBlog.vue'
import Login from '@/views/pages/auth/login.vue'
import Register from '@/views/pages/auth/register.vue'
import Detail from '@/views/pages/detail.vue'
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
      },
      {
        path: '/blog/:slug',
        name: 'blog-detail',
        component: Detail,
        props: true
      }
    ]
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: AuthorTemplates,
    meta: {
      isAuth: true
    },
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
  },
  {
    path: '/login',
    name: 'auth-login',
    component: AuthTemplates,
    meta: {
      isAuth: false
    },
    children: [
      {
        path: '/login',
        name: 'auth-login',
        component: Login
      },
      {
        path: '/register',
        name: 'auth-register',
        component: Register
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.isAuth)) {
    let user = localStorage.getItem('token')
    if (!user) {
      next('/login')
    }
  }
  next()
})

export default router
