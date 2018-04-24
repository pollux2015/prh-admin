<template>
  <div class="page">
    <Map />
  </div>
</template>

<script>
import Map from './map.vue'
export default {
	components: {
		Map
	},
  data () {
    return {
      name: 'resource.map',
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
