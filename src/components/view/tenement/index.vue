<template>
  <div class="page">
    <mu-paper v-if="$route.name != 'tenement'">
      <Tabs class="page-tabs" main-router="tenement" />
      <LayoutWrapper offset="tabbar">
        <mu-content-block>
          <div class="page-tools">
            <mu-flat-button class="page-tools-item" @click="$router.push({name: 'tenement.members.add'})" label="添加住户" icon="person_add" />
            <mu-flat-button class="page-tools-item" v-if="$route.name =='tenement.members.list' " @click="changeView" label="切换视图" :icon="$store.getters.membersView =='card' ? 'menu' : 'view_module'" />
          </div>
          <router-view />
        </mu-content-block>
      </LayoutWrapper>
    </mu-paper>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    changeView() {
      this.$store.commit('SET_MEMBERS_VIEW', this.$store.getters.membersView == 'card' ? 'table' : 'card')
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
  position: relative;
}
.page-tools {
  padding: 5px 0 15px;
}

.page-tools-item {
  background: #eee;
  margin-right: 5px;
}

.page-tools-item {
  color: #555;
}

</style>
