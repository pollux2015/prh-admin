<template>
  <div class="tip-wrapper" ref="demo" @mouseenter="handleHover" @mouseleave="handleHoverExit" @click="active">
    <slot><mu-icon v-if="icon" :value="icon" :size="size" :color="color" /></slot>
    <mu-tooltip :label="label" :show="show" :trigger="trigger" :touch="touch" :verticalPosition="verticalPosition" :horizontalPosition="horizontalPosition" />
  </div>
</template>
<script>
export default {
  props: {
    label: {
      type: String,
      default: '文字'
    },
    icon: {
      type: String,
      default: 'print'
    },
    color: {
      type: String,
      default: 'blue'
    },
    size: {
      type: Number,
      default: 32
    },
    verticalPosition: {
      type: String,
      default: 'bottom'
    },
    horizontalPosition: {
      type: String,
      default: 'center'
    }
  },
  data() {
    return {
      show: false,
      touch: false,
      trigger: null,

    }
  },
  mounted() {
    this.trigger = this.$refs.demo
  },
  methods: {
    handleHover() {
      this.show = true
    },
    handleHoverExit() {
      this.show = false
    },
    active(){
      this.$emit('click')
    }
  }
}

</script>
<style scoped>
.tip-wrapper {
  display: inline-block;
  cursor: pointer;
  position: relative;
}

</style>
