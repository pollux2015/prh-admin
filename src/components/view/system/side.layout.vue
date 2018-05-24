<template>
  <mu-row>
    <mu-col width="100" tablet="40" desktop="20">
      <mu-card-header title="功能设置" class="side-source-header" />
      <mu-menu class="side" v-model="$route.name">
        <mu-menu-item title="配套管理" :to="{name: 'system.support.project'}" value="system.support.project" leftIcon="weekend" rightIcon="keyboard_arrow_right" />
        <mu-menu-item title="户型管理" :to="{name: 'system.house.type'}" value="system.house.type" leftIcon="location_city" rightIcon="keyboard_arrow_right" />
        <mu-divider />
        <mu-menu-item title="个人设置" :to="{name: 'system.set.info'}" value="system.set.info" leftIcon="dvr" rightIcon="keyboard_arrow_right" />
        <mu-menu-item title="修改密码" :to="{name: 'system.set.passwd'}" value="system.set.passwd" leftIcon="vpn_lock" rightIcon="keyboard_arrow_right" />
      </mu-menu>
    </mu-col>
    <mu-col width="100" tablet="60" desktop="80">
      <router-view/>
    </mu-col>
    </div>
  </mu-row>
</template>
<script>
export default {
  data() {
    return {
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side,
.side>>>.mu-menu-list {
  width: 100% !important;
}

</style>
