import lodash from 'lodash'
import SMmodal from '@/components/basic/vdialog/smodal'

// 全部参数
// const allParams = {
//   name: 'alert',
//   title: '标题', 
//   content: '内容',
//   footerTxt: '底部文字',
//   align: 'left',
//   fullWidth: false,
//   defaultCancel: true,
//   width: 300,
//   height: 'auto',
//   btnTxt: '确认',
//   btnColor: 'purple, red, blue, yellow, dark, gray',
//   handler: ()=> {},
//   buttons: [{
//     title: '确定按钮',
//     icon: 'check_circle',
//     color: ''purple, red, blue, yellow, dark, gray'',
//     handler: ()=> {}
//   }],
//   beforeOpen: () => {},
//   beforeClose: () => {},
//   closed: () => {}
// }

// 默认参数
const defaultParams = {
  title: '标题',
  content: '内容',
  footerTxt: false,
  align: 'left',
  fullWidth: false,
  defaultCancel: true,
  buttons: []
}

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be insstalled only once
     */
    if (this.installed) {
      return
    }

    this.installed = true

    /**
     * [$salert alert弹出层]
     * @param  {[Object]} params [弹出层参数]
     * @param  {[Object]} events [回调钩子]
     */
    Vue.prototype.$salert = function(params) {

      // 合并参数
      let params_ = lodash.assign(defaultParams, {
        fullWidth: true,
        defaultCancel: false,
        align: 'center',
        buttons: [{
          title: params.btnTxt || '确定',
          color: params.btnColor || 'red',
          icon: params.btnIcon || 'check_circle',
          handler: params.handler
        }]
      }, params)

      // 添加钩子
      let events_ = lodash.assign({
        'before-open' () {
          if (params.beforeOpen) params.beforeOpen()
        },
        'before-close' () {
          if (params.beforeOpen) params.beforeClose()
        },
        closed() {
          if (params.closed) params.closed()
        },
      })

      // 打开
      this.$modal.show(SMmodal, params_, {
        name: params_.name || 'alert',
        height: params_.height || 'auto',
        width: params_.width || 400,
        clickToClose: false
      }, events_)
    }

    /**
     * [$salert alert弹出层]
     * @param  {[Object]} params [弹出层参数]
     * @param  {[Object]} events [回调钩子]
     */
    Vue.prototype.$sconfirm = function(params) {

      // 合并参数
      let params_ = lodash.assign(defaultParams, {
        fullWidth: false,
        defaultCancel: true,
        align: 'left',
        buttons: [{
          title: params.btnTxt || '确定',
          color: params.btnColor || 'blue',
          icon: params.btnIcon || 'check_circle',
          handler: params.handler
        }]
      }, params)

      // 添加钩子
      let events_ = lodash.assign({
        'before-open' () {
          if (params.beforeOpen) params.beforeOpen()
        },
        'before-close' () {
          if (params.beforeOpen) params.beforeClose()
        },
        closed() {
          if (params.closed) params.closed()
        },
      })

      // 打开
      this.$modal.show(SMmodal, params_, {
        name: params_.name || 'confirm',
        height: params_.height || 'auto',
        width: params_.width || 400,
        clickToClose: true
      }, events_)
    }
  }
}

export default Plugin
