<template>
  <mu-row>
    <mu-col width="100" tablet="40" desktop="20">
      <mu-card-header title="功能菜单" class="side-source-header" />
      <mu-menu class="side" v-model="$route.name">
        <mu-menu-item title="人员信息审核" :to="{name: 'business.members.identify.list'}" value="business.members.identify.list" leftIcon="remove_red_eye" rightIcon="keyboard_arrow_right" />
        <mu-menu-item title="陌生人提醒" :to="{name: 'business.strangers.notice.list'}" value="business.strangers.notice.list" leftIcon="people" rightIcon="keyboard_arrow_right" />
        <mu-divider />
        <mu-menu-item title="投诉建议" leftIcon="settings_phone" rightIcon="keyboard_arrow_right" disabled />
        <mu-menu-item title="维修管理" leftIcon="build" rightIcon="keyboard_arrow_right" disabled />
        <mu-menu-item title="退房管理" leftIcon="all_inclusive" rightIcon="keyboard_arrow_right" disabled />
        <mu-menu-item title="合同续租" leftIcon="folder_shared" rightIcon="keyboard_arrow_right" disabled />
        <mu-menu-item title="通知公告" leftIcon="notifications" rightIcon="keyboard_arrow_right" disabled />
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
      name: 'resource.map',
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side,
.side >>> .mu-menu-list{
  width: 100% !important;
}

</style>
