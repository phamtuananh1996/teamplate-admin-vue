import Vue from 'vue'
import Router from 'vue-router'
import routers from './router'

Vue.use(Router)

var router = new Router({
  mode: 'history',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})

// middleware
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (localStorage.getItem('token') === null) {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath }
//       })
//     } else {
//       next()
//     }
//   } else {
//     next()
//   }
// })

export default router
