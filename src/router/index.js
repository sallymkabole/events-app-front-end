import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import Admin from '../components/Admin/Admin.vue';
import Ruser from '../components/Ruser/Ruser.vue';
import Login from '../components/Login/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/ruser',
      name: 'Ruser',
      component: Ruser,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
  ],
});
