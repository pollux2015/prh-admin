import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'
import user from './modules/user'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    layout,
    user
  },
  strict: debug
})
