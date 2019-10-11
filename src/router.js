import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Flow from './views/flow.vue'
import Compete from './views/compete.vue'
import Commodity from './views/commodity.vue'

import Index from './views/Index.vue'
// import Data from './views/Data.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/flow',
      name: 'flow',
      component: Flow
    },
    {
      path: '/compete',
      name: 'compete',
      component: Compete
    },
    {
      path: '/commodity',
      name: 'commodity',
      component: Commodity
    }
  ]
})
