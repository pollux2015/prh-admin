<template>
  <div ref="wrapper" class="scroll-wrapper">
    <div class="scroll-dot">
      <mu-icon-button icon="keyboard_arrow_left" @click="goprev" />
      <mu-icon-button icon="keyboard_arrow_right" @click="gonext" />
    </div>
    <div class="scroll-content">
      <div ref="listWrapper">
        <div class="list-content" :style="{width: tabList.length*tabwidth + 'px'}">
          <div class="list-item" :id="'tab_'+ idtarget + '_' + index" :class="{active: activeTab.name == item.name}" v-for="(item, index) in tabList" @click="clickItem(index, item, index)" @mouseover="toggleItem(item, index, true)" @mouseout="toggleItem(item, index, false)">
            <span>{{item.title}}</span>
            <span class="remove-icon" @click.prevent.stop="removeTab(item, index)">
              <mu-icon value="cancel" v-if="!item.tabFixed && tabList.length > 1" :size="18" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'

export default {
  props: {
    activeName: {
      type: String
    },
    /**
     * 1 滚动的时候会派发scroll事件，会截流。
     * 2 滚动的时候实时派发scroll事件，不会截流。
     * 3 除了实时派发scroll事件，在swipe的情况下仍然能实时派发scroll事件
     */
    probeType: {
      type: Number,
      default: 1
    },
    /**
     * 点击列表是否派发click事件
     */
    click: {
      type: Boolean,
      default: true
    },
    /**
     * 是否开启横向滚动
     */
    scrollX: {
      type: Boolean,
      default: true
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    list: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 40
    }
  },
  data() {
    return {
      tabList: this.list,
      idtarget: this.RndNum(5),
      tooltip: false,
      tooltipLable: '上一个',
      trigger: null,
      tabwidth: 120,
      scrollToEnd: false,
      scrollToStart: false,
      activeTab: {},
      activeIndex: 0,
    }
  },
  mounted() {
    // 保证在DOM渲染完毕后初始化better-scroll
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    RndNum(n) {
      var rnd = "";
      for (var i = 0; i < n; i++)
        rnd += Math.floor(Math.random() * 10);
      return rnd;
    },
    tooltipHover(e) {
      this.trigger = e.target
      this.tooltip = true
    },
    tooltipHoverExit(e) {
      this.trigger = null
      this.tooltip = false
    },
    _initScroll() {
      if (!this.$refs.listWrapper) {
        return
      }
      this.setActiveByName(this.activeName)
      // better-scroll的初始化
      this.scroll = new BScroll(this.$refs.listWrapper, {
        probeType: this.probeType,
        click: this.click,
        scrollX: this.scrollX
      })

      this.scroll.on('scrollEnd', () => {
        this.scrollToEnd = this.scroll.x <= this.scroll.maxScrollX
        this.scrollToStart = this.scroll.x === 0
      })
    },
    clickItem(e, item, index) {
      this.setActiveByName(item.name)
      this.goIndex(index)
      this.$emit('clickTab', {
        item,
        index
      })
    },
    toggleItem(item, index, tabVisible) {
      const ele = document.getElementById(`tab_${this.idtarget}_${index}`)
      let classStr = ele.getAttribute('class')
      const hasVisible = classStr.search(' tab-visible') != -1
      if (!tabVisible) {
        classStr = classStr.replace(' tab-visible', '')
      } else {
        classStr += ' tab-visible'
      }
      ele.setAttribute('class', classStr)
    },
    goIndex(index) {
      this.activeIndex = index
      this.activeTab = this.list[this.activeIndex]
      const ele = document.getElementById(`tab_${this.idtarget}_${index}`)
      this.scrollToElement(ele, 200)
      this.$emit('changeTab', {
        item: this.activeTab,
        index
      })
    },
    removeTab(item, index) {
      const diff = index - 1
      this.goIndex(diff >= 0 ? diff : 0)
      this.$emit('removeTab', {
        item,
        index
      })
    },
    goprev() {
      const diff = this.activeIndex - 1
      this.goIndex(diff > 0 ? diff : 0)
    },
    gonext() {
      const diff = this.activeIndex + 1
      this.goIndex(diff >= this.tabList.length ? this.tabList.length - 1 : diff)
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable()
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable()
    },
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh()
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    setActiveByName(name) {
      // 设置默认active
      const actveIndex_ = this.$lodash.findIndex(this.list, item => item.name == name)
      this.actveIndex = actveIndex_ == -1 ? 0 : actveIndex_
      this.activeTab = this.list[this.actveIndex]
    },
  },
  watch: {
    activeName() {
      this.setActiveByName(this.activeName)
    },
    // 监听数据的变化，延时refreshDelay时间后调用refresh方法重新计算，保证滚动效果正常
    list() {
      this.tabList = this.list
      setTimeout(() => {
        this.refresh()
      }, this.refreshDelay)
    },
  }
}

</script>
<style scoped>
.icon-tip {
  position: relative;
}

.scroll-wrapper {
  position: relative;
  overflow: hidden;
  background: #fff;
  padding-right: 80px;
  border-bottom: 1px solid #ddd;
}

.scroll-dot {
  position: absolute;
  right: 0;
  z-index: 20;
}

.scroll-dot>>>.mu-icon-button {
  height: 40px;
  width: 40px;
  padding: 4px;
}

.scroll-content {
  width: 100%;
  position: relative;
  overflow: hidden;
}

.list-content {
  margin: 0;
  padding: 0;
  z-index: 10;
  background: #fff;
  list-style: none;
  text-align: center;
}

.list-item {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 40px;
  line-height: 20px;
  height: 40px;
  font-size: 14px;
  padding: 10px;
  width: 120px;
  border-right: 1px solid #ddd;
  border-bottom: 2px solid #fff;
  cursor: default;
  /*margin-left: -1px;*/
}

.list-item>>>.mu-icon {
  position: absolute;
  right: 5px;
  top: 10px;
  color: #999;
}

.list-item.active {
  position: relative;
  font-weight: 700;
  color: #7e57c2;
  border-bottom-color: #7e57c2;
}

.remove-icon {
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;
  cursor: pointer;
}

.tab-visible .remove-icon {
  visibility: visible;
  opacity: 1;
}

</style>
