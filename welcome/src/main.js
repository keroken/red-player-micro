import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Welcome from './pages/Welcome.vue';
import SignIn from './pages/SignIn.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  // This is the part in common for all the routes
  base: 'hello',
  routes: [
    { path: '/signin', component: SignIn },
    { path: '/', component: Welcome },
    { path: '*', redirect: '/' },
  ],
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
