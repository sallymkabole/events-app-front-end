import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home/Home.vue';
import Admin from '../components/Admin/Admin.vue';
import Ruser from '../components/Login/Ruser/Ruser.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
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
  ],
});
