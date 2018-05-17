/* eslint-disable no-unused-vars */
import * as types from '../mutation-types'
import lodash from 'lodash'

const defaultSourceList = [{
  id: 0,
  name: '深圳市宝安区',
  type: 'area',
  children: [{
    id: 0,
    name: 'A花园',
    type: 'project',
    children: [{
      id: 0,
      name: '1栋',
      type: 'floor',
    }, {
      id: 1,
      name: '2栋',
      type: 'floor',
    }, {
      id: 2,
      name: '3栋',
      type: 'floor',
    }]
  }, {
    id: 1,
    name: 'B花园',
    type: 'project',
    children: [{
      id: 0,
      name: '1栋',
      type: 'floor',
    }, {
      id: 1,
      name: '2栋',
      type: 'floor',
    }, {
      id: 2,
      name: '3栋',
      type: 'floor',
    }]
  }]
}]
// initial state
const state = {
  sourceListLoading: true, // 房源加载中
  sourceListOrg: [], // 房源源数据
  sourceList: [] // 房源列表
}

// getters
const getters = {
  sourceListLoading: state => state.sourceListLoading,
  sourceListOrg: state => state.sourceListOrg,
  sourceList: state => state.sourceList
}

// actions
const actions = {
  [types.RESET_SOURCE_LIST]: ({ commit }) => {
    commit('sourceListLoading', true)

    setTimeout(() => {
      const sourceList = defaultSourceList
      commit('sourceListLoading', false)
      commit('RESET_SOURCE_LIST', sourceList)
      commit('RESET_SOURCE_LIST_ORG', sourceList)
      return sourceList
    }, 1500)
  },
  [types.FILTER_SOURCE_LIST]: ({ state, commit }, keyword) => {

    const olist = state.sourceListOrg // 源数据

    // 不存在keyword在设置为元数据
    if (!keyword) {
      commit('RESET_SOURCE_LIST', olist)
      return
    }

    // 否则遍历列表
    const sourceList_ = JSON.parse(JSON.stringify(olist))
    lodash.forEach(sourceList_, (item) => {
      item.children = lodash.filter(item.children, (subitem) => {
        const sname_ = subitem.name.toLocaleLowerCase()
        const keyword_ = keyword.toLocaleLowerCase()
        return sname_.search(keyword_) != -1
      })
    })
    commit('RESET_SOURCE_LIST', sourceList_)
  },
}

// mutations
const mutations = {
  sourceListLoading(state, status) {
    state.sourceListLoading = status
  },
  RESET_SOURCE_LIST_ORG(state, source) {
    state.sourceListOrg = source
  },
  [types.RESET_SOURCE_LIST](state, source) {
    state.sourceList = source
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
