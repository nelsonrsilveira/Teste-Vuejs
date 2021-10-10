import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import VueRouter from 'vue-router';
import Sec from './sec.vue';
import Home from './Home.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  el:'#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueRouter);

const routes = [
  { path: '/sec.vue', component: Sec},
  {path: '/Home', component: Home}
];

const router = new VueRouter({
  routes,
  mode:'history',
});
