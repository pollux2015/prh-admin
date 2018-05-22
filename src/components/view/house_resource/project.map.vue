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
      name: 'project.edit',
    }
  },
  beforeRouteEnter(to, from, next) {
    next((app) => {
      app.initPage()
    })
  },
  watch: {
    '$route' (){
      this.initPage()
    },
  },
  methods: {
    initPage(){
      this.$store.commit('CLEAR_TAB')
      this.$store.commit('ADD_TAB', {
        name: 'house_resource.list',
        meta: {title: '房源列表', tabFixed: true},
        params: {
          id: this.$route.params.id,
          type: 'area'
        }
      })
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
