import Vue from 'vue';
import VueRouter from 'vue-router';

import Stats from '@/views/StatsPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: '/nhl',  // This will be served from this subdir. Change if elsewhere.
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
