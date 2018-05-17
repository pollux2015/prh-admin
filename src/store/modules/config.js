/* eslint-disable no-unused-vars */
import * as types from '../mutation-types'

// initial state
const state = {
  BAIDU_AK: 'kmvn0MlkDrGSXHcdhiYIgdboBUBzTUnl', // 百度AK账号
  pagesize: 20 // 分页大小
}

// getters
const getters = {
  BAIDU_AK: state => state.BAIDU_AK,
  pagesize: state => state.pagesize
}

// actions
const actions = {}

// mutations
const mutations = {
  [types.SET_PAGE_SIZE](state, size) {
    state.pagesize = size
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
