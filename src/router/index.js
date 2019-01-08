import Vue from 'vue';
import VueRouter from 'vue-router';

import Stats from '@/views/StatsPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Stats',
      component: Stats,
    },
    {
      path: '*',
      redirect: '/',
    }
  ]
});
