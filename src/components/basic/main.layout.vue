<template>
  <div class="layout">
    <mu-appbar title="公租房管理系统">
      <div class="main-slogan">公租房管理系统</div>
      <div class="main-nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" lineClass="line-class">
          <mu-tab v-for="nav in navList" :key="nav.routeName" :value="nav.routeName">
            <mu-icon class="main-nav-icon" :value="nav.icon" />{{nav.name}}</mu-tab>
        </mu-tabs>
      </div>
      <mu-flat-button label="张晓明" slot="right" />
      <mu-icon-menu icon="more_vert" :desktop="true" slot="right">
        <mu-menu-item title="退出系统" />
        <mu-menu-item title="密码修改" />
        <mu-menu-item title="个人设置" />
      </mu-icon-menu>
    </mu-appbar>
    <div class="main-wrapper" :style="contentStyle">
      <router-view/>
    </div>
    <div class="main-footer">
      公租房管理系统 ©2017
    </div>
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
      contentStyle: {},
      navList: this.$store.getters.navList,
      activeTab: 'home'
    }
  },
  created() {
    this.setContentStyle()
    window.onresize = () => {
      this.setContentStyle()
    }
  },
  methods: {
    setContentStyle() {
      const clientH = document.documentElement.clientHeight
      this.contentStyle = { 'min-height': `${clientH - 64 - 30}px` }
    },
    handleActive() {},
    getContetSize() {
      const clientH = document.documentElement.clientHeight
      return clientH - 64 - 54 - 30
    },
    handleTabChange(val) {
      this.activeTab = val
      this.$router.push({
        name: val
      })
    }
  }
}

</script>
<style scoped>
.layout {
  background-color: rgb(236, 236, 236);
}

.main-slogan {
  font-size: 24px;
  padding: 10px 30px 10px 0;
  display: inline-block;
}

.main-nav {
  display: inline-block;
  margin-bottom: -5px;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.main-nav .mu-tab-link {
  padding: 0 20px;
  font-size: 16px;
}

.main-nav>>>.line-class {
  display: none;
}

.main-nav-icon {
  position: relative;
  top: 6px;
  margin-right: 5px;
  font-size: 22px;
}

.main-wrapper {
  border-radius: 5px;
}

.main-footer {
  font-size: 12px;
  height: 30px;
  line-height: 30px;
  text-align: center;
}

</style>
