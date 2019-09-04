import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import StandardButton from './views/StandardButton.vue';
import FunctionalButton from './views/FunctionalButton.vue';

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
      path: '/standard-button',
      name: 'standard-button',
      component: StandardButton,
    },
    {
      path: '/functional-button',
      name: 'functional-button',
      component: FunctionalButton,
    },
  ],
});
