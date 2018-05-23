// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import MuseUI from 'muse-ui'
import NProgress from 'nprogress'
import lodash from 'lodash'
import toastr from 'toastr'
import VueCookie from 'vue-cookie'
import VModal from 'vue-js-modal'
import VueTouchRipple from 'vue-touch-ripple'
import { VTable, VPagination } from 'vue-easytable'

// config production
Vue.config.productionTip = false

/**--------------------
 * common styles
 ---------------------*/
import 'muse-ui/dist/muse-ui.css'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
import 'vue-easytable/libs/themes-base/index.css'
import '@/assets/iconfont/material-icons.css'
import '@/assets/css/nprogress.css'
import '@/assets/css/toastr.css'

/**--------------------
 * global install
 ---------------------*/
Vue.use(MuseUI)
Vue.use(Vuex)
Vue.use(VueCookie)

// ripple
Vue.use(VueTouchRipple, {
  color: '#000',
  opacity: 0.1,
  speed: 1,
  transition: 'ease'
})

// vmodal
import SModal from '@/components/basic/vdialog/index.js'
Vue.use(VModal, { dialog: true, dynamic: true })
Vue.use(SModal) // 封装了vmodal组件相关方法, 调用更加精简


/**--------------------
 * global vue variable
 ---------------------*/
Vue.prototype.$lodash = lodash

// toaster
toastr.options.preventDuplicates = true
toastr.options.timeOut = 1500
Vue.prototype.$toastr = toastr


/**--------------------
 * global components
 ---------------------*/

// table 和 分页组件
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

// 自定义组件
import PicView from '@/components/basic/picview'
import Tooltip from '@/components/basic/tooltip'
import BottomTear from '@/components/basic/btear'
import LayoutWrapper from '@/components/basic/layout.wrapper'
import Tabs from '@/components/basic/tabs'
Vue.component('PicView', PicView)
Vue.component('Tooltip', Tooltip)
Vue.component('BottomTear', BottomTear)
Vue.component('LayoutWrapper', LayoutWrapper)
Vue.component('Tabs', Tabs)


/**--------------------
 * 设置frame
 ---------------------*/
store.commit('SET_FRAME_SIZE')
setTimeout(() => {
  window.onresize = () => {
    store.commit('SET_FRAME_SIZE')
  }
}, 1000)

/**--------------------
 * 全局路由
 ---------------------*/
router.beforeEach((to, from, next) => {
  NProgress.start()
  store.commit('ADD_TAB', to)
  next()
})

router.afterEach((to, from) => {
  store.commit('SET_TAB_CURRENT', to)
  NProgress.done()
})

/**--------------------
 * app instance
 ---------------------*/
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
