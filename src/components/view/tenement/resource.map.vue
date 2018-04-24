<template>
  <div class="page">321
    <baidu-map class="bm-view" ak="YOUR_APP_KEY">
  	</baidu-map>
  </div>
</template>

<script>

import BaiduMap from 'vue-baidu-map/components/Map/Map.vue'
export default {
  components: {
    BaiduMap
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bm-view {
  width: 100%;
  height: 300px;
}
</style>
