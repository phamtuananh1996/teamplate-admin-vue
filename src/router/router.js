import Full from '@/containers/Full'
import Dashboard from '@/views/Dashboard'
import Login from '@/components/login'

export default [
  {
    path: '/',
    redirect: '/dashboard',
    name: 'Home',
    component: Full,
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
  // {
  //   path: '/404',
  //   component: PageNotFound
  // },
  // {
  //   path: '*',
  //   redirect: '/404'
  // }
]
