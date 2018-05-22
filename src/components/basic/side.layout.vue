<template>
  <div class="page-wrapper-nopad">
    <mu-row>
      <mu-col width="100" tablet="40" desktop="20">
        <div class="side">
          <mu-card-header title="房源列表" class="side-source-header" />
          <mu-icon-button @click="resetSourceList" class="side-source-header-icon" :disabled="sourceLoading" icon="cached" />
          </mu-card-header>
          <div class="side-source-list-field gap-r-l" style="margin-top: -8px">
            <mu-text-field v-model="sourceKey" @input="filterSourceList" :disabled="sourceLoading" hintText="输入房源名称" fullWidth />
          </div>
          <LayoutWrapper :offset="88">
            <div class="source-loadding" v-if="sourceLoading">
              <mu-circular-progress :size="30" />
              <p>房源数据加载中</p>
            </div>
            <mu-list v-if="!sourceLoading" v-model="activeId">
              <mu-list-item :title="areaItem.name" :key="areaItem.id" :value="areaItem.id" v-for="areaItem in sourceList" @click="setActive(areaItem)">
                <mu-icon slot="left" value="explore" />
                <mu-list-item slot="nested" :title="houseItem.name" toggleNested :key="houseItem.id" :value="houseItem.id" v-for="houseItem in areaItem.children" @click="setActive(houseItem)">
                  <mu-icon slot="left" value="account_balance" />
                  <mu-list-item :title="floorItem.name" slot="nested" :key="floorItem.id" :value="floorItem.id" v-for="floorItem in houseItem.children" @click="setActive(floorItem)">
                    <mu-icon slot="left" value="domain" />
                  </mu-list-item>
                </mu-list-item>
              </mu-list-item>
            </mu-list>
          </LayoutWrapper>
        </div>
      </mu-col>
      <mu-col width="100" tablet="60" desktop="80">
        <router-view/>
      </mu-col>
    </mu-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeId: null,
      sourceKey: '',
    }
  },
  beforeRouteEnter(to, from, next) {
    next((app) => {
      app.resetSourceList()
    })
  },
  computed: {
    sourceLoading() {
      return this.$store.getters.sourceListLoading
    },
    sourceList() {
      return this.$store.getters.sourceList
    },
  },
  watch: {
    '$store.getters.sourceListActive' (activeObj) {
      this.activeId = activeObj.id || null
      this.activeGo(activeObj)
    }
  },
  methods: {
    getSourceList() {
      this.$store.dispatch('RESET_SOURCE_LIST').then(res => {
        const rdata = res.data
        this.setActive(rdata.length >= 1 ? rdata[0] : null)
      })
    },
    resetSourceList() {
      this.sourceKey = ''
      this.getSourceList()
    },
    filterSourceList() {
      this.$store.dispatch('FILTER_SOURCE_LIST', this.sourceKey)
    },
    setActive(activeItem) {

      const routeName = this.$route.name.split('.')[0]
      const activeType = activeItem.type
      const activeId = activeItem.id

      this.$store.commit('SET_SOURCE_LIST_ACTIVE', {
        type: activeType,
        id: activeId,
        mainRouter: routeName
      })
    },
    activeGo(activeItem) {

      if (!activeItem) {
        this.$router.push({
          name: 'house_resource'
        })
      }

      const activeType = activeItem.type
      const activeId = activeItem.id
      const activeMainRouter = activeItem.mainRouter

      // 当前菜单主路由名称, 根据主菜单跳转到不同路由
      if (activeMainRouter == 'house_resource') { // 房源管理
        this.$router.push({
          name: activeType == 'area' ? 'house_resource.project.map' : `house_resource.${activeType}.edit`,
          params: {
            id: activeId
          }
        })
      } else if (activeMainRouter == 'tenement') { // 住户管理

      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.side-source-header-icon {
  position: absolute;
  right: 5px;
  top: 5px;
}

.side-source-list-field>>>.mu-text-field-content {
  padding-bottom: 0;
}

.side-source-list-field>>>.mu-text-field {
  min-height: 0
}

.side {
  position: relative;
}

.source-loadding {
  text-align: center;
  padding: 20px;
}

.source-loadding p {
  color: #666;
}

</style>
