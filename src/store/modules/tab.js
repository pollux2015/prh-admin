/* eslint-disable no-unused-vars */
import * as types from '../mutation-types'

// initial state
const state = {
  tabsObj: {}
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
    // let tabList = []
    // state.menuList.map((item) => {
    //   if (item.children) {
    //     tabList.push(...item.children)
    //   } else {
    //     tabList.push(item)
    //   }
    // })
    // commit(types.SET_TAB_LIST, tabList)
  },

  openTab({ dispatch, commit, state }, menuName) {
    // let tabOpened = state.pageOpenedList.some(item => {
    //   return item.name === menuName
    // })
    // if (!tabOpened) {
    //   let tab = state.tabList.filter((item) => {
    //     return menuName === item.name
    //   })[0]
    //   commit(types.OPEN_TAB, tab)
    // }
  },
  removeTab({ dispatch, commit, state }, name) {
    // let pageOpenedList = state.pageOpenedList.filter(item => {
    //   return item.name !== name
    // })
    // commit(types.SET_OPENED_TAB_LIST, pageOpenedList)
  }
}

// mutations
const mutations = {
  [types.REMOVE_TAB_CURRENT](state){
    console.log('移除当前TAB')
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
