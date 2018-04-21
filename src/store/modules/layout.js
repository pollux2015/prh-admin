/* eslint-disable no-unused-vars */
import { checkPermission } from '../../libs/util'
import * as types from '../mutation-types'

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
  routeName: 'business'
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
  theme: null
}

// getters
const getters = {
  navList: (state, getters) => {
    return state.navList
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
  setCurrentPath({ dispatch, commit, state }, currentPageName) {
    let currentPath = []
    let openedMenuList = state.menuList.filter(menu => {
      if (!menu.children) {
        return menu.name === currentPageName
      } else {
        return menu.children.some((child) => {
          if (child.name === currentPageName) {
            currentPath.push(child)
          }

          return child.name === currentPageName
        })
      }
    })

    if (openedMenuList[0] && openedMenuList[0].name !== 'home') {
      let currentNode = {
        title: openedMenuList[0].title,
        // breadcrumb should not show hyperlink if the current node is the parent node
        path: openedMenuList[0].children ? '' : openedMenuList[0].path,
        name: openedMenuList[0].name
      }
      currentPath.push(currentNode)
    }

    commit(types.SET_CURRENT_PATH, currentPath.reverse())

    let openedMenuNameList = openedMenuList.map(item => {
      return item.name
    })

    commit(types.SET_OPENED_MENU_LIST, openedMenuNameList)
  },
}

// mutations
const mutations = {
  [types.SET_CURRENT_PATH](state, currentPath) {
    state.currentPath = currentPath
  },

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
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
