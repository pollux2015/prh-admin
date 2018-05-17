import Vue from 'vue'
import Vuex from 'vuex'

import layout from './modules/layout'
import user from './modules/user'
import tab from './modules/tab'
import config from './modules/config'
import info from './modules/info'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    config,
    layout,
    user,
    info,
    tab
  },
  strict: debug
})
