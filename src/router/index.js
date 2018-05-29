import Vue from 'vue'
import Router from 'vue-router'

// 路由主视图
import houseResourceIndex from '@/components/view/house_resource/index.vue' // 房源首页
import tenementIndex from '@/components/view/tenement/index.vue' // 租户首页

Vue.use(Router)

const basic = [
  {
    path: '/',
    redirect: {name: 'home'}
  },
  { path: '/login', name: 'login', meta: { title: '登录' }, component: resolve => require(['@/components/view/login.vue'], resolve) },
]

// 房源管理路由
const houseResourceRouter = [
  { path: 'project/map/:id', name: 'house_resource.project.map', meta: { title: '项目地图', tabFixed: true }, component: resolve => require(['@/components/view/house_resource/project.map.vue'], resolve) },
  { path: 'project/add', name: 'house_resource.project.add', meta: { title: '添加项目' }, component: resolve => require(['@/components/view/house_resource/project.edit.vue'], resolve) },
  { path: 'project/edit/:id', name: 'house_resource.project.edit', meta: { title: '编辑项目', tabFixed: true }, component: resolve => require(['@/components/view/house_resource/project.edit.vue'], resolve) },
  { path: 'floor/add', name: 'house_resource.floor.add', meta: { title: '添加楼栋' }, component: resolve => require(['@/components/view/house_resource/floor.edit.vue'], resolve) },
  { path: 'floor/edit/:id', name: 'house_resource.floor.edit', meta: { title: '编辑楼栋', tabFixed: true }, component: resolve => require(['@/components/view/house_resource/floor.edit.vue'], resolve) },
  { path: 'house/add', name: 'house_resource.house.add', meta: { title: '添加房源' }, component: resolve => require(['@/components/view/house_resource/house.edit.vue'], resolve) },
  { path: 'house/edit/:id', name: 'house_resource.house.edit', meta: { title: '编辑房源' }, component: resolve => require(['@/components/view/house_resource/house.edit.vue'], resolve) },
  { path: 'house/list/:type/:id', name: 'house_resource.list', meta: { title: '房源列表', tabFixed: true }, component: resolve => require(['@/components/view/house_resource/house.list.vue'], resolve) },
]

// 住户管理路由
const tenementRouter = [
  { path: 'members/add', name: 'tenement.members.add', meta: { title: '添加人员' }, component: resolve => require(['@/components/view/tenement/members.edit.vue'], resolve) },
  { path: 'members/edit/:id', name: 'tenement.members.edit', meta: { title: '编辑人员' }, component: resolve => require(['@/components/view/tenement/members.edit.vue'], resolve) },
  { path: 'members/list/:type/:id', name: 'tenement.members.list', meta: { title: '人员列表', tabFixed: true }, component: resolve => require(['@/components/view/tenement/members.list.vue'], resolve) },
]

// 业务办理路由
const businessRouter = [
  { path: 'members/identify/list', name: 'business.members.identify.list', meta: { title: '人员审核' }, component: resolve => require(['@/components/view/business/members.identify.list.vue'], resolve) },
  { path: 'members/identify/info/:id', name: 'business.members.identify.info', meta: { title: '人员审核详情' }, component: resolve => require(['@/components/view/business/members.identify.info.vue'], resolve) },
  { path: 'strangers/notice/list', name: 'business.strangers.notice.list', meta: { title: '陌生人提醒' }, component: resolve => require(['@/components/view/business/strangers.notice.list.vue'], resolve) },
  { path: 'strangers/notice/info/:id', name: 'business.strangers.notice.info', meta: { title: '陌生人提醒详情' }, component: resolve => require(['@/components/view/business/strangers.notice.info.vue'], resolve) },
]

// 系统设置路由
const systemRouter = [
  { path: 'support/project', name: 'system.support.project', meta: { title: '项目配套' }, component: resolve => require(['@/components/view/system/support.project.vue'], resolve) },
  { path: 'support/floor', name: 'system.support.floor', meta: { title: '楼栋配套' }, component: resolve => require(['@/components/view/system/support.project.vue'], resolve) },
  { path: 'support/house', name: 'system.support.house', meta: { title: '房源配套' }, component: resolve => require(['@/components/view/system/support.project.vue'], resolve) },
  { path: 'house/type', name: 'system.house.type', meta: { title: '户型管理' }, component: resolve => require(['@/components/view/system/house.type.vue'], resolve) },
  { path: 'set/info', name: 'system.set.info', meta: { title: '个人设置' }, component: resolve => require(['@/components/view/system/info.vue'], resolve) },
  { path: 'set/passwd', name: 'system.set.passwd', meta: { title: '设置密码' }, component: resolve => require(['@/components/view/system/passwd.vue'], resolve) },
]

// 主菜单路由
const mainRoute = {
  path: '/main',
  name: 'main',
  component: resolve => require(['@/components/basic/main.layout.vue'], resolve),
  children: [
    { path: 'home', name: 'home', meta: { title: '首页' }, component: resolve => require(['@/components/view/home.vue'], resolve) },
    {
      path: 'source',
      name: 'source',
      component: resolve => require(['@/components/basic/side.layout.vue'], resolve),
      children: [
        { path: 'house_resource', name: 'house_resource', meta: { title: '房源管理', notab: true }, component: houseResourceIndex, children: houseResourceRouter },
        { path: 'tenement', name: 'tenement', meta: { title: '住户管理', notab: true }, component: tenementIndex, children: tenementRouter },
      ]
    },
    {
      path: 'aside',
      name: 'aside',
      component: resolve => require(['@/components/view/business/side.layout.vue'], resolve),
      children: [
        { path: 'business', name: 'business', meta: { title: '业务办理', notab: true }, redirect: { name: 'business.members.identify.list' }, component: resolve => require(['@/components/view/business/index.vue'], resolve), children: businessRouter },
      ]
    },
    {
      path: 'bside',
      name: 'bside',
      component: resolve => require(['@/components/view/system/side.layout.vue'], resolve),
      children: [
        { path: 'system', name: 'system', meta: { title: '系统设置', notab: true }, component: resolve => require(['@/components/view/system/index.vue'], resolve), children: systemRouter }
      ]
    },
  ]
}



// 系统设置
const system = []
const routes = [...basic, mainRoute]
const routerInstance = new Router({
  routes
})

export default routerInstance
