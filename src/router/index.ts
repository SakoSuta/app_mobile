import { createApp } from 'vue';
import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import App from '../App.vue';
import HomePage from '../views/HomePage.vue';
import RegisterPage from '../views/Auth/Register.vue';
import LoginPage from '../views/Auth/Login.vue';
import ContactPage from '../views/Contact.vue';
import PostPage from '../views/Posts.vue';
import PostBySlugPage from '../views/PostBySlug.vue';
import CategoryPage from '../views/Category.vue';
import GamesPage from '../views/Games.vue';
import UserPage from '../views/User.vue';
import LegalNPage from '../views/legal/Legal_Notice.vue';
import TermsServPage from '../views/legal/Terms_Of_Service.vue';
import TermsSalPage from '../views/legal/Terms_Of_Sales.vue';
import SubscriptionPage from '../views/Subscriptions.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
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
      path: '/subscription',
      name: 'Subscription',
      component: SubscriptionPage
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
      path: '/category/:slug',
      name: 'Category',
      component: CategoryPage
    },
    {
      path: '/games/:slug',
      name: 'Games',
      component: GamesPage
    },
    {
      path: '/users/:uuid',
      name: 'Users',
      component: UserPage
    },
    {
      path: '/Legal_Notice',
      name: 'LegalNotice',
      component: LegalNPage
    },
    {
      path: '/Terms_Of_Service',
      name: 'TermsOfService',
      component: TermsServPage
    },
    {
      path: '/Terms_Of_Sales',
      name: 'TermsOfUse',
      component: TermsSalPage
    }
  ]
});

const app = createApp(App);
app.use(router);
app.mount('#app');

export default router
