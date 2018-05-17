// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// font
import fonts from '@/assets/iconfont/material-icons.css'

// MuseUI
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// ripple
import VueTouchRipple from 'vue-touch-ripple'
import 'vue-touch-ripple/dist/vue-touch-ripple.css'
Vue.use(VueTouchRipple, {
  color: '#000',
  opacity: 0.1,
  speed: 1,
  transition: 'ease'
})

// vmodal
import VModal from 'vue-js-modal'
Vue.use(VModal, { dialog: true, dynamic: true })

// 封装了vmodal组件相关方法, 调用更加精简
import SModal from '@/components/basic/vdialog/index.js'
Vue.use(SModal)

// toaster
import toastr from 'toastr'
import toastrStyle from '@/assets/css/toastr.css'
toastr.options.preventDuplicates = true
toastr.options.timeOut = 1500
Vue.prototype.$toastr = toastr

// 导入 table 和 分页组件
import 'vue-easytable/libs/themes-base/index.css'
import { VTable, VPagination } from 'vue-easytable'
Vue.component(VTable.name, VTable)
Vue.component(VPagination.name, VPagination)

// 自定义全局组件
import PicView from '@/components/basic/picview'
import Tooltip from '@/components/basic/tooltip'
import BottomTear from '@/components/basic/btear'
import LayoutWrapper from '@/components/basic/layout.wrapper'
Vue.component('PicView', PicView)
Vue.component('Tooltip', Tooltip)
Vue.component('BottomTear', BottomTear)
Vue.component('LayoutWrapper', LayoutWrapper)

// COOKIE
import VueCookie from 'vue-cookie'
Vue.use(VueCookie)

// 设置frame
store.commit('SET_FRAME_SIZE')
setTimeout(()=>{
  window.onresize = () => {
    store.commit('SET_FRAME_SIZE')
  }
}, 1000)



Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
