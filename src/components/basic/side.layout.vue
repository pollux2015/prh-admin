<template>
  <mu-content-block class="layout-side-source ">
    <mu-row gutter>
      <mu-col width="100" tablet="40" desktop="20">
        <mu-card class="side-source-list">
          <mu-card-header title="房源列表" class="side-source-header" />
          <mu-icon-button class="side-source-header-icon" icon="cached" />
          </mu-card-header>
          <!-- <mu-divider/> -->
          <div class="side-source-list-field gap-r-l">
            <mu-text-field hintText="请输入房源" fullWidth style="margin: 0" />
          </div>
          <mu-list>
            <mu-list-item :title="areaItem.name" :key="areaItem.id" v-for="areaItem in sourceList">
              <mu-icon slot="left" value="explore" />
              <mu-list-item slot="nested" :title="houseItem.name" toggleNested :key="houseItem.id" v-for="houseItem in areaItem.children">
                <mu-icon slot="left" value="store" />
                <mu-list-item :title="floorItem.name" slot="nested" :key="floorItem.id" v-for="floorItem in houseItem.children">
                  <mu-icon slot="left" value="domain" />
                </mu-list-item>
              </mu-list-item>
            </mu-list-item>
          </mu-list>
        </mu-card>
      </mu-col>
      <mu-col width="100" tablet="60" desktop="80">
        <mu-card>
          <Tabs />
          <mu-content-block>
            <router-view/>
          </mu-content-block>
        </mu-card>
      </mu-col>
    </mu-row>
  </mu-content-block>
</template>
<script>
import Tabs from '@/components/basic/tabs'
export default {
  components: {
    Tabs
  },
  data() {
    return {
      sourceList: [{
        id: 0,
        name: '深圳市宝安区',
        type: 'area',
        children: [{
          id: 0,
          name: 'A花园',
          type: 'house',
          children: [{
            id: 0,
            name: '1栋',
            type: 'floor',
          }, {
            id: 1,
            name: '2栋',
            type: 'floor',
          }, {
            id: 2,
            name: '3栋',
            type: 'floor',
          }]
        }, {
          id: 1,
          name: 'B花园',
          type: 'house',
          children: [{
            id: 0,
            name: '1栋',
            type: 'floor',
          }, {
            id: 1,
            name: '2栋',
            type: 'floor',
          }, {
            id: 2,
            name: '3栋',
            type: 'floor',
          }]
        }]
      }]
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

</style>
