<template>
  <div class="layout-wrapper" :style="layoutStyle">
    <slot>内容高度{{$store.getters.frameSize.onlycontentHeight}}</slot>
  </div>
</template>
<script>
export default {
  props: {
    offset: {
      type: [Number, String],
      default: 0,
    },
    direction: {
      type: String,
      default: 'y', // ['x', 'y', 'all', 'none']
    }
  },
  data() {
    return {
      frameComponents: {
        mainHeader: 64, // 主导航
        tabbar: 40, // 主tab
      }
    }
  },
  computed: {
    layoutStyle() {
      const toInt = parseInt(this.offset)
      const frameComponents_ = this.frameComponents
      const offset_ = typeof(toInt) == 'number' && !isNaN(toInt) ? toInt : frameComponents_[this.offset] ? frameComponents_[this.offset] : 0
      return {
        'height': `${this.$store.getters.frameSize.height - frameComponents_['mainHeader'] - offset_}px`,
        'overflow-x': `${this.direction == 'x' || this.direction == 'all' ? 'auto' : 'hidden'}`,
        'overflow-y': `${this.direction == 'y' || this.direction == 'all'? 'auto' : 'hidden'}`,
      }
    }
  }
}

</script>
<style scoped>


</style>
