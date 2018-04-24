import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/basic/main.layout.vue' // 登录后
import SideLayout from '@/components/basic/side.layout.vue' // 含房源

Vue.use(Router)

const basic = [
  { path: '/login', name: 'login', meta: { title: '登录' }, component: resolve => require(['@/components/view/login.vue'], resolve) },
]

const sourceRoutes = [
  { path: 'tenement', name: 'tenement', meta: { title: '住户管理' }, component: resolve => require(['@/components/view/tenement/index.vue'], resolve) },
  { path: 'house_resource', name: 'house_resource', meta: { title: '房源管理' }, component: resolve => require(['@/components/view/house_resource/index.vue'], resolve) },
  { path: 'business', name: 'business', meta: { title: '业务办理' }, component: resolve => require(['@/components/view/business/index.vue'], resolve) },
  { path: 'system', name: 'system', meta: { title: '系统设置' }, component: resolve => require(['@/components/view/system/index.vue'], resolve) }
]

const mainRoute = {
  path: '/main',
  name: 'main',
  component: MainLayout,
  children: [
    { path: 'home', name: 'home', meta: { title: '首页' }, component: resolve => require(['@/components/view/home.vue'], resolve) },
    { path: 'source', name: 'source', component: SideLayout, children: sourceRoutes},
  ]
};


// 系统设置
const system = []
const routes = [...basic, mainRoute]
export default new Router({
  routes
})
