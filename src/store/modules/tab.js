/* eslint-disable no-unused-vars */
import * as types from '../mutation-types'
import lodash from 'lodash'

// initial state
const state = {
  currentRouter: {}, // 当前路由
  tabsMap: {} // tab指引
}

// getters
const getters = {
  currentRouter: state => state.currentRouter,
  tabsMap: state => state.tabsMap
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
  // 获取路由对象必要参数
  [types.GET_ROUTER_PARAMS](state, routerObj) {
    if(!routerObj) return null
    const routerNameStrAr = routerObj.name.split('.')
    const mainRouterName = routerNameStrAr[0]
    const meta = routerObj.meta || {}
    return {
      pname: mainRouterName, // 主路由名称
      name: routerObj.name, // 路由名称
      meta: meta || {},
      title: meta.title,
      params: routerObj.params || {},
      query: routerObj.query || {},
      tabFixed: meta.hasOwnProperty('tabFixed') ? routerObj.meta.tabFixed : false
    }
  },
  getTabItemByName(state, routerName){
    const routerNameStrAr = routerName.split('.')
    const mainRouterName = routerNameStrAr[0] // 主路由名称
    let curMainRouterCollection = state.tabsMap[mainRouterName]
    const curRouterIndex = mutations.INDEX_TAB(state, routerName)
    return curMainRouterCollection[curRouterIndex] || {}
  },
  // 清除ALL
  [types.CLEAR_TAB](state, alltabs) {
    const routerNameStrAr = state.currentRouter.name.split('.')
    const mainRouterName = routerNameStrAr[0]
    state.tabsMap[mainRouterName].splice(0, state.tabsMap[mainRouterName].length)
    if(!alltabs){
      state.tabsMap[mainRouterName].push(state.currentRouter)
    }
  },
  // 设置当前路由
  [types.SET_TAB_CURRENT](state, routerObj) {
    state.currentRouter = mutations.GET_ROUTER_PARAMS(state, routerObj)
  },
  // tabsMap是否存在路由
  [types.HAS_TAB](state, routerName) {
    const curRouterIndex = mutations.INDEX_TAB(state, routerName)
    return curRouterIndex != -1
  },
  // tabsMap是路由索引位置
  [types.INDEX_TAB](state, routerName) {
    const routerNameStrAr = routerName.split('.')
    const mainRouterName = routerNameStrAr[0] // 主路由名称
    let curMainRouterCollection = state.tabsMap[mainRouterName]
    return lodash.findIndex(curMainRouterCollection, item => item.name == routerName)
  },
  // 移除当前路由
  [types.REMOVE_TAB_CURRENT](state) {
    if (!state.currentRouter.name) return
    mutations.REMOVE_TAB(state, state.currentRouter.name)
  },
  [types.REMOVE_TAB](state, routerName) {
    const routerNameStrAr = routerName.split('.')
    const mainRouterName = routerNameStrAr[0] // 主路由名称
    let curMainRouterCollection = state.tabsMap[mainRouterName] || []
    const curRouterIndex = mutations.INDEX_TAB(state, routerName)
    // 若已存在则移除重复
    if (curRouterIndex != -1) {
      curMainRouterCollection.splice(curRouterIndex, 1)
    }
  },
  // tabsMap添加路由
  [types.ADD_TAB](state, routerObj) {

    // 获取路由参数
    const routerParams = mutations.GET_ROUTER_PARAMS(state, routerObj)
    
    if(!routerParams) return
    // 主路由名称
    const routerMeta = routerParams.meta || {}
    const routerName = routerParams.name
    const mainRouterName = routerParams.pname

    // 路由meta配置含有 notab 则不添加tab记录
    if (routerMeta.notab) return

    // 当前路由分组
    state.tabsMap[mainRouterName] = state.tabsMap[mainRouterName] || []
    let curMainRouterCollection = state.tabsMap[mainRouterName]

    // 若已存在则移除重复
    // mutations.REMOVE_TAB(state, routerName)

    
    console.log(routerName)
    // 添加路由
    const curRouterIndex = mutations.INDEX_TAB(state, routerName)
    if (curRouterIndex != -1) {
      lodash.assign(curMainRouterCollection[curRouterIndex], routerParams)
    } else {
      curMainRouterCollection.push(routerParams)
    }
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
