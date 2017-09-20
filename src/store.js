import Vue from 'vue'
import Vuex from 'vuex'

import userStore from './store/userStore'

Vue.use(Vuex)
const debug = process.env.NODE_ENV === 'production'

export default new Vuex.Store({
  modules: {
    userStore
  },
  strict: debug
})
