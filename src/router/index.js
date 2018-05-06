import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/basic/main.layout.vue' // 登录后
import SideLayout from '@/components/basic/side.layout.vue' // 房源Side
import houseResourceIndex from '@/components/view/house_resource/index.vue' // 房源首页

Vue.use(Router)

const basic = [
  { path: '/login', name: 'login', meta: { title: '登录' }, component: resolve => require(['@/components/view/login.vue'], resolve) },
]

// 房源管理路由
const houseResourceRouter = [
  { path: 'project/map', name: 'house_resource.project.map', meta: { title: '项目地图' }, component: resolve => require(['@/components/view/house_resource/project.map.vue'], resolve) },
  { path: 'project/add', name: 'house_resource.project.add', meta: { title: '添加项目' }, component: resolve => require(['@/components/view/house_resource/project.edit.vue'], resolve) },
  { path: 'project/edit/:id', name: 'house_resource.project.edit', meta: { title: '编辑项目' }, component: resolve => require(['@/components/view/house_resource/project.edit.vue'], resolve) },
  { path: 'floor/add', name: 'house_resource.floor.add', meta: { title: '添加楼栋' }, component: resolve => require(['@/components/view/house_resource/floor.edit.vue'], resolve) },
  { path: 'floor/edit/:id', name: 'house_resource.floor.edit', meta: { title: '编辑楼栋' }, component: resolve => require(['@/components/view/house_resource/floor.edit.vue'], resolve) },
  { path: 'house/add', name: 'house_resource.house.add', meta: { title: '添加房源' }, component: resolve => require(['@/components/view/house_resource/house.edit.vue'], resolve) },
  { path: 'house/edit/:id', name: 'house_resource.house.edit', meta: { title: '编辑房源' }, component: resolve => require(['@/components/view/house_resource/house.edit.vue'], resolve) },
]

// 主菜单路由
const sourceRoute = [
  { path: 'tenement', name: 'tenement', meta: { title: '住户管理' }, component: resolve => require(['@/components/view/tenement/index.vue'], resolve) },
  { path: 'house_resource', name: 'house_resource', meta: { title: '房源管理' }, component: houseResourceIndex, children: houseResourceRouter },
  { path: 'business', name: 'business', meta: { title: '业务办理' }, component: resolve => require(['@/components/view/business/index.vue'], resolve) },
  { path: 'system', name: 'system', meta: { title: '系统设置' }, component: resolve => require(['@/components/view/system/index.vue'], resolve) }
]

const mainRoute = {
  path: '/main',
  name: 'main',
  component: MainLayout,
  children: [
    { path: 'home', name: 'home', meta: { title: '首页' }, component: resolve => require(['@/components/view/home.vue'], resolve) },
    { path: 'side', name: 'source', component: SideLayout, children: sourceRoute},
  ]
}



// 系统设置
const system = []
const routes = [...basic, mainRoute]
export default new Router({
  routes
})
