import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/film'
    },
    {
      path: '/film',
      component: (resolve) => {
        require(['../pages/Film'], resolve)
      }
    },
    {
      path: '/cinema',
      component: (resolve) => {
        require(['../pages/Cinema'], resolve)
      }
    },
    {
      path: '/discover',
      component: (resolve) => {
        require(['../pages/Discover'], resolve)
      }
    },
    {
      path: '/mine',
      component: (resolve) => {
        require(['../pages/Mine'], resolve)
      }
    }
  ]
})

export default router
