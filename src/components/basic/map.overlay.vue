<template>
  <bm-overlay ref="customOverlay" :class="{sample: true}" pane="labelPane" @draw="draw">
    <div class="location-icon">
      <div style="position: relative" @mouseenter="handleHover" @mouseleave="handleHover">
        <mu-icon value="place" :size="36" color="red" @click="clickPLace" />
        <mu-tooltip :label="text" :show="tooltipshow" :trigger="trigger" :touch="true" verticalPosition="top" />
        <!-- <mu-card class="place-card">
          <div>中国</div>
          <div>南宁国际</div>
        </mu-card> -->
      </div>
    </div>
  </bm-overlay>
</template>
<script>
import { BmOverlay } from 'vue-baidu-map'
export default {
  components: {
    BmOverlay
  },
  props: ['text', 'position'],
  data() {
    return {
      trigger: null,
      open: false,
      tooltipshow: false
    }
  },
  watch: {
    position: {
      handler() {
        this.$refs.customOverlay.reload()
      },
      deep: true
    }
  },
  methods: {
    handleClick() {
      global.alert('Well done.')
    },
    draw({ el, BMap, map }) {
      const { lng, lat } = this.position
      const pixel = map.pointToOverlayPixel(new BMap.Point(lng, lat))
      el.style.left = pixel.x - 20 + 'px'
      el.style.top = pixel.y - 30 + 'px'
    },
    clickPLace($event) {
      this.trigger = $event.target
      this.open = true
    },
    handleHover($event) {
      this.trigger = $event.target
      this.tooltipshow = !this.tooltipshow
    }
  }
}

</script>
<style>
.sample {
  width: 40px;
  height: 40px;
  line-height: 40px;
  position: absolute;
  text-align: center;
  z-index: 9999;
}

.place-card {
  position: absolute;
  overflow: hidden;
  z-index: 999;
  width: 300px;
  height: 100px;
  top: -100px;
  left: -130px;
  text-align: left;
}

</style>
