import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import linkify from 'vue-linkify';
import App from './App';
import router from './router';

import Menu from '@/components/Menu';
import Footer from '@/components/Footer';
import Game from '@/components/Game';
import GamePoints from '@/components/GamePoints';

Vue.use(BootstrapVue);

Vue.directive('linkified', linkify);

Vue.component('main-menu', Menu);
Vue.component('main-footer', Footer);
Vue.component('game-item', Game);
Vue.component('game-points', GamePoints);

new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App),
});
