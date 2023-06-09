import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/Auth/Register.vue';
import LoginPage from '../views/Auth/Login.vue';
import ContactPage from '../views/Contact.vue';
import PostPage from '../views/Posts.vue';
import PostBySlugPage from '../views/PostBySlug.vue';
import CategoryPage from '../views/Category.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/posts',
    name: 'Posts',
    component: PostPage
  },
  {
    path: '/posts/:slug',
    name: 'PostsBySlug',
    component: PostBySlugPage
  },
  {
    path: '/Category/:slug',
    name: 'Category',
    component: CategoryPage
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
