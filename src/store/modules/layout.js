/* eslint-disable no-unused-vars */
import { checkPermission } from '../../libs/util'
import * as types from '../mutation-types'
import lodash from 'lodash'

// 菜单配置
const navList = [{
  name: '首页',
  icon: 'home',
  routeName: 'home'
}, {
  name: '房源管理',
  icon: 'store',
  routeName: 'house_resource'
}, {
  name: '住户管理',
  icon: 'contacts',
  routeName: 'tenement'
}, {
  name: '业务办理',
  icon: 'comment',
  routeName: 'business.members.identify.list'
}, {
  name: '系统设置',
  icon: 'settings',
  routeName: 'system'
}]

// initial state
const state = {
  ready: false, // 主界面
  navList: navList, // 菜单列表
  currentPath: [], // 面包屑数组
  menuTheme: null, // 主题
  theme: null,
  frameSize: {},
}

// getters
const getters = {
  navList: (state, getters) => {
    return state.navList
  },
  frameSize: (state, getters) => {
    return state.frameSize
  }
}

// actions
const actions = {
  initApp({ dispatch, commit, state }, data) {
    dispatch('initLayout').then(() => {
      dispatch('setMenuList').then(() => {
        dispatch('setTabList').then(() => {
          commit(types.SET_LAYOUT_STATUS, true)
        })
      })
    })
  },
  initLayout({ dispatch, commit, state }, data) {
    commit(types.INIT_LAYOUT)
  },
  setMenuList({ dispatch, commit, state }, data) {
    commit(types.SET_MENU_LIST, appRouter.slice())
  },
}

// mutations
const mutations = {

  [types.SET_LAYOUT_STATUS](state, status) {
    state.ready = status

  },
  [types.INIT_LAYOUT](state, name) {
    state.pageOpenedList = [appRouter[0]]
    state.currentPath = [{
      title: '首页',
      path: '',
      name: 'home_index'
    }]
    state.menuTheme = localStorage.menuTheme ? localStorage.menuTheme : 'dark' // 主题
    state.theme = localStorage.theme ? localStorage.theme : 'b'
  },

  changeTheme(state, theme) {
    state.menuTheme = theme
  },
  [types.SET_FRAME_SIZE](state) {
    const docElement = document.documentElement
    let frameSize = {
      width: docElement.clientWidth,
      height: docElement.clientHeight
    }
    state.frameSize = frameSize
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
