import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue';
import Popular from './components/Popular.vue';
import HelloWorld from './components/HelloWorld.vue';

Vue.use(VueRouter)

Vue.config.productionTip = false


const routes = [
  {path:'/Home',component: Home},
  {path:'/Popular',component: Popular},
  {path:'/HelloWorld',component: HelloWorld},
  ]
  new Vue ({
    render: h => h(App),
  }).$mount('#app')