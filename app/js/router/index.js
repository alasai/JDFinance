import Vue from 'vue'
import Router from 'vue-router'
import Home from '../home/index.vue'
import Money from '../money/index.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias: '/home'
    },{
      path:'/money',
      name:'money',
      component:Money
    }
  ]
})
