import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/basic/layout.vue'

Vue.use(Router)

const basic = [
  { path: '/login', name: 'login', meta: { title: '登录' }, component: resolve => require(['@/components/view/login.vue'], resolve) },
]

export const mainRoute = {
  path: '/main',
  name: 'main',
  component: MainLayout,
  children: [
    { path: 'home', name: 'home', meta: { title: '首页' }, component: resolve => require(['@/components/view/home.vue'], resolve) },
    { path: 'tenement', name: 'tenement', meta: { title: '住户管理' }, component: resolve => require(['@/components/view/tenement/index.vue'], resolve) },
    { path: 'house_resource', name: 'house_resource', meta: { title: '房源管理' }, component: resolve => require(['@/components/view/house_resource/index.vue'], resolve) },
    { path: 'business', name: 'business', meta: { title: '业务办理' }, component: resolve => require(['@/components/view/business/index.vue'], resolve) },
    { path: 'system', name: 'system', meta: { title: '系统设置' }, component: resolve => require(['@/components/view/system/index.vue'], resolve) }
  ]
};


// 房源管理
const houseResource = []
// 住户管理
const tenement = []
// 业务办理
const business = []

// 系统设置
const system = []
const routes = [...basic, mainRoute]
export default new Router({
  routes
})
