<template>
  <div class="page">
    <baidu-map class="bm-view" :center="center" :zoom="zoom" :ak="ak" @ready="handler" :double-click-zoom="false">
      <BmNavigation />
      <BmOverlay v-for="mark in marks" :key="mark.name" :position="mark" @click="clickMark(mark)" :text="mark.name">
      </BmOverlay>
    </baidu-map>
  </div>
</template>
<script>
import BmOverlay from '@/components/basic/map.overlay'
import { BaiduMap, BmLabel, BmMarker, BmInfoWindow, BmNavigation } from 'vue-baidu-map'
export default {
  components: {
    BaiduMap,
    BmMarker,
    BmLabel,
    BmInfoWindow,
    BmNavigation,
    BmOverlay
  },
  data() {
    return {
      active: false,
      ak: this.$store.getters.BAIDU_AK,
      center: { lng: 0, lat: 0 },
      marks: [{ lng: 22, lat: 33.915, name: '北京'}],
      zoom: 3
    }
  },
  methods: {
    handler({ BMap, map }) {
      this.center = this.mark[0]
      this.zoom = 15
    },
    clickMark(mark) {
      mark.panel = !mark.panel
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bm-view {
  width: 100%;
  height: 300px;
}

.bm-view>>>.BMapLabel {
  border: none;
}

</style>
