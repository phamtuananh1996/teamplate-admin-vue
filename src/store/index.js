import Vue from 'vue'
import Vuex from 'vuex'
import I18n from './module/i18n'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    I18n
  }
})
