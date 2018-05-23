<template>
  <div class="page">
    <mu-paper>
      <Tabs class="page-tabs" main-router="business" />
      <LayoutWrapper offset="tabbar">
        <mu-content-block>
          <router-view />
        </mu-content-block>
      </LayoutWrapper>
    </mu-paper>
  </div>
</template>

<script>
export default {
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
