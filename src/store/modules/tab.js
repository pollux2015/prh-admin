/* eslint-disable no-unused-vars */
import * as types from '../mutation-types'

// initial state
const state = {
  mainTabList: [],
  tabList: [],
}

// getters
const getters = {
  // TODO filter menuList according to the user role
  openedTabList: (state, getters) => {
    return state.pageOpenedList
  }
}

// actions
const actions = {
  setTabList({ dispatch, commit, state }, data) {
    let tabList = []
    state.menuList.map((item) => {
      if (item.children) {
        tabList.push(...item.children)
      } else {
        tabList.push(item)
      }
    })
    commit(types.SET_TAB_LIST, tabList)
  },

  openTab({ dispatch, commit, state }, menuName) {
    let tabOpened = state.pageOpenedList.some(item => {
      return item.name === menuName
    })
    if (!tabOpened) {
      let tab = state.tabList.filter((item) => {
        return menuName === item.name
      })[0]
      commit(types.OPEN_TAB, tab)

    }
  },
  removeTab({ dispatch, commit, state }, name) {
    let pageOpenedList = state.pageOpenedList.filter(item => {
      return item.name !== name
    })
    commit(types.SET_OPENED_TAB_LIST, pageOpenedList)
  }
}

// mutations
const mutations = {
  [types.SET_TAB_LIST](state, tabList) {
    state.tabList.push(...tabList)

  },
  [types.OPEN_TAB](state, tab) {
    state.pageOpenedList.push(tab)

  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
