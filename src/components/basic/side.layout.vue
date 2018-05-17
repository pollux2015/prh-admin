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
            <mu-list v-if="!sourceLoading">
              <mu-list-item :title="areaItem.name" :key="areaItem.id" v-for="areaItem in sourceList" @click="sideclick(areaItem)">
                <mu-icon slot="left" value="explore" />
                <mu-list-item slot="nested" :title="houseItem.name" toggleNested :key="houseItem.id" v-for="houseItem in areaItem.children" @click="sideclick(houseItem)">
                  <mu-icon slot="left" value="account_balance" />
                  <mu-list-item :title="floorItem.name" slot="nested" :key="floorItem.id" v-for="floorItem in houseItem.children" @click="sideclick(floorItem)">
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
  methods: {
    getSourceList(keyword) {
      this.$store.dispatch('RESET_SOURCE_LIST', keyword)
    },
    resetSourceList() {
      this.sourceKey = ''
      this.getSourceList()
    },
    filterSourceList() {
      this.$store.dispatch('FILTER_SOURCE_LIST', this.sourceKey)
    },
    sideclick(activeItem) {
      // 当前菜单主路由名称, 根据主菜单跳转到不同路由
      const routeName = this.$route.name.split('.')[0]
      const ActiveType = activeItem.type
      if (routeName == 'house_resource') { // 房源管理
        this.$router.push({
          name: ActiveType == 'area' ? 'house_resource.project.map' : `house_resource.${ActiveType}.edit`,
          params: {
            id: activeItem.id
          }
        })
      } else if (routeName == 'tenement') { // 住户管理

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
