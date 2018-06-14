// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'
import i18n from './lang/i18n'
import store from './store/index'
import CripLoading from 'crip-vue-loading'
import axios from 'axios'
import Notifications from 'vue-notification'

Vue.use(CripLoading, {axios})
Vue.use(BootstrapVue)
Vue.use(Notifications)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  store,
  template: '<App/>',
  components: {
    App
  }
})
