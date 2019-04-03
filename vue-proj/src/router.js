import Vue from 'vue'
import Router from 'vue-router'
import First from './components/First.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'first',
      component: First
    },
    {
      path: '/about/:name',
      name: 'about',
      component: About
    }
  ]
})