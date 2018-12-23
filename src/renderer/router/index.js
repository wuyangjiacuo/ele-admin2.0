import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'landing-page',
    //   component: require('@/components/LandingPage').default
    // },
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: require('@/pages/login/login').default
    },
    {
      path: '/reg',
      name: 'reg',
      component: require('@/pages/login/reg').default
    },
    {
      path: '/admin',
      name: 'admin',
      component: require('@/pages/admin/index').default,
      // redirect: '/admin/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'dashboard',
          component: require('@/pages/admin/dashboard/index').default
        },
        {
          path: 'articles',
          name: 'articles',
          component: require('@/pages/admin/article/index').default
        },
        {
          path: 'gifs',
          name: 'gifs',
          component: require('@/pages/admin/gif/index').default
        },
        {
          path: 'tasks',
          name: 'tasks',
          component: require('@/pages/admin/task/index').default
        },
        {
          path: 'users',
          name: 'users',
          component: require('@/pages/admin/user/index').default
        }
      ]
    }
  ]
})
