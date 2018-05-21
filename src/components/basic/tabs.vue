<template>
  <Scroll class="wrapper" :scroll-x="true" :scroll-y="false" :activeName="$route.name" :list="tabList" @removeTab="removeTab" @changeTab="changeTab" />
</template>
<script>
import Scroll from '@/components/basic/scroll'
export default {
  components: {
    Scroll
  },
  props: {
    list: {
      type: Array
    },
    mainRouter: {
      type: String
    }
  },
  data() {
    return {
      data: [],
      pulldown: true
    }
  },
  computed: {
    currentTabName() {
      return this.$route.name
    },
    tabList() {
      return this.list || this.$store.getters.tabsMap[this.mainRouter] || []
    }
  },
  methods: {
    removeTab(params) {
      this.$store.commit('REMOVE_TAB', params.item.name)
    },
    changeTab(params) {
      this.$router.push(params.item)
    }
  }
}

</script>
<style scoped>


</style>
