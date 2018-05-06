<template>
  <div class="page">
    <div class="page-tabs">
      <Tabs />
    </div>
    <div class="page-funs">
      <mu-raised-button @click="$router.push({name: 'house_resource.project.add'})" class="demo-raised-button" label="添加项目" icon="android" primary/>
      <mu-raised-button @click="$router.push({name: 'house_resource.floor.add'})"   class="demo-raised-button" label="添加楼栋" icon="folder"/>
      <mu-raised-button @click="$router.push({name: 'house_resource.house.add'})"   class="demo-raised-button" label="添加房源" icon="folder"/>
    </div>
    <router-view />
  </div>
</template>

<script>
import Tabs from '@/components/basic/tabs'
export default {
  components: {
    Tabs
  },
  data () {
    return {
      name: 'resource.map',
    }
  },
  mounted(){
    this.$on('aass', ()=> {
      console.log(222)
    })
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page-funs{
  padding: 15px 0;
}
</style>
