<template>
  <div class="page">
    <mu-paper>
      <Tabs class="page-tabs" />
      <LayoutWrapper offset="tabbar">
        <mu-content-block>
          <div class="page-tools">
            <mu-flat-button class="page-tools-item" @click="$router.push({name: 'house_resource.project.add'})" label="添加项目" icon="account_balance" />
            <mu-flat-button class="page-tools-item" @click="$router.push({name: 'house_resource.floor.add'})" label="添加楼栋" icon="domain" />
            <mu-flat-button class="page-tools-item" @click="$router.push({name: 'house_resource.house.add'})" label="添加房源" icon="store" />
          </div>
          <router-view />
        </mu-content-block>
      </LayoutWrapper>
    </mu-paper>
  </div>
</template>
<script>
import Tabs from '@/components/basic/tabs'
export default {
  components: {
    Tabs
  },
  data() {
    return {

    }
  },
  mounted() {
    this.$on('aass', () => {
      console.log(222)
    })
  },
  methods: {

  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-tools {
  padding: 5px 0 15px;
}

.page-tools-item {
  background: #eee;
  margin-right: 10px;
}

.page-tools-item {
  color: #555;
}

</style>
