<template>
  <div class="page-inner">
    <template v-if="!viewLoading">
      <div class="floor-wrapper">
        <div class="floor-row" v-for="floorItem in tableData">
          <strong class="floor-title">{{floorItem.floor}}</strong>
          <div class="floor-main">
            <div class="floor-card" :class="{'floor-card-red': !houseItem.members_cnt}" v-for="houseItem in floorItem.houselist">
              <mu-paper>
                <div class="floor-card-header">
                  <strong>{{houseItem.house_num}}房</strong>
                  <span class="floor-card-tag">{{houseItem.members_cnt == 0 ? '空置' : `入住${houseItem.members_cnt}人`}}</span>
                </div>
                <div class="floor-card-cont">
                  <mu-menu>
                    <mu-menu-item :title="houseItem.area || '-'" rightIcon="keyboard_arrow_right" :disabled="!houseItem.members_cnt">
                      <mu-sub-header>共{{houseItem.members_cnt}}名入住人员</mu-sub-header>
                      <mu-menu-item v-for="memberItem in houseItem.members" :title="memberItem.name" :key="memberItem.id" @click="goEdit(memberItem.id)" leftIcon="person_pin" />
                    </mu-menu-item>
                  </mu-menu>
                </div>
              </mu-paper>
            </div>
            <div class="clear"></div>
          </div>
        </div>
      </div>
      <div class="pager-wrapper">
        <span class="pager-total">共{{pageTotal}}条</span>
        <v-pagination class="page-component" @page-change="pageChange" @page-size-change="pageSizeChange" :total="pageTotal" :page-size="$store.getters.pagesize" :layout="['prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
      </div>
    </template>
    <template v-else>
      <mu-circular-progress :size="24" /><br>
      数据准备中, 请稍后...
    </template>
  </div>
</template>
<script>
const resData = [{
    id: "1",
    "floor": "1层",
    houselist: [
      { id: "1", "house_num": "101", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "2", "house_num": "102", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] },
      { id: "3", "house_num": "103", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "3", "house_num": "103", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "4", "house_num": "104", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] },
      { id: "1", "house_num": "105", area: '三房|面积: 88㎡', members_cnt: 0, members: [] },
    ]
  },
  {
    id: "2",
    "floor": "2层",
    houselist: [
      { id: "1", "house_num": "201", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "2", "house_num": "202", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] },
      { id: "3", "house_num": "203", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "4", "house_num": "204", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] }
    ]
  },
  {
    id: "3",
    "floor": "3层",
    houselist: [
      { id: "1", "house_num": "301", area: '三房|面积: 88㎡', members_cnt: 0, members: [] },
      { id: "2", "house_num": "302", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] },
      { id: "3", "house_num": "303", area: '三房|面积: 88㎡', members_cnt: 1, members: [{ id: 1, name: '小明' }] },
      { id: "4", "house_num": "304", area: '三房|面积: 88㎡', members_cnt: 3, members: [{ id: 1, name: '小明' }, { id: 2, name: '小红' }, { id: 3, name: '校长' }] }
    ]
  },
]

export default {
  data() {
    return {
      viewLoading: false,
      pageCurrent: 1,
      pageTotal: 130,
      tableSelection: [],
      tableSelectionIds: [],
      tableData: [],
      columns: [
        { width: 60, titleAlign: 'center', columnAlign: 'center', type: 'selection' },
        { field: 'project', title: '项目', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor', title: '楼栋', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_num', title: '房号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_area', title: '面积', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_type', title: '户型', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'floor_rent', title: '房租', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'floor_users', title: '入住人数', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'floor_date', title: '租期', width: 110, titleAlign: 'center', columnAlign: 'center', orderBy: '' }
      ]
    }
  },
  created() {
    this.getTableData(1)
    this.viewLoading = true
    setTimeout(() => {
      this.viewLoading = false
    }, 800)
  },
  methods: {
    goEdit(id) { // 前往编辑
      this.$router.push({
        name: 'tenement.members.edit',
        params: { id }
      })
    },
    getTableData(currentPage) { // 获取表格数据
      this.pageCurrent = currentPage || 1
      this.pageSize = this.$store.pagesize
      this.viewLoading = true
      setTimeout(() => {
        // response
        // this.$lodash.forEach(resData, (item) => {item._checked = false})
        this.tableData = resData
        this.pageTotal = 130
        this.viewLoading = false
      }, 1000)

    },
    pageChange(currentPage) { // 切换分页
      this.getTableData(currentPage)
    },
    pageSizeChange(size) { // 设置表格每页显示条数
      this.$store.commit('SET_PAGE_SIZE', size)
      this.getTableData(1)
    }
  }
}

</script>
<style scoped>
.page-inner {
  padding-bottom: 90px;
}

.floor-row {
  position: relative;
  padding: 15px 0;
  border-bottom: 1px solid #ddd;
}

.floor-wrapper .floor-row:last-child {
  border-color: #fff;
}

.floor-title {
  position: absolute;
  left: 0;
  clear: both;
  font-size: 16px;
  color: #777;
}

.floor-main {
  padding-left: 60px;
}

.floor-card {
  border: 1px solid #e6e6e6;
  width: 20%;
  max-width: 240px;
  margin: 0 20px 20px 0;
  float: left;
}

.floor-card-header {
  position: relative;
  height: 40px;
  line-height: 30px;
  padding: 5px 10px;
  background-color: #eee;
  border-bottom: 1px solid #e6e6e6;
}

.floor-card-tag {
  box-sizing: content-box;
  position: absolute;
  right: 10px;
  top: 7px;
  border: 1px solid #e6e6e6;
  font-size: 12px;
  height: 24px;
  line-height: 24px;
  padding: 0 8px;
  color: #666;
  border-radius: 3px;
}

.floor-card>>>.mu-menu-list,
.floor-card .mu-menu {
  margin: 0;
  padding: 0;
  width: 100% !important;
}

.floor-card-red {
  border: 1px solid #f44336;
}

.floor-card-red .floor-card-header {
  color: #fff;
  background-color: #f44336
}

.floor-card-red .floor-card-tag {
  background-color: #f44336;
  color: #fff;
  border-color: #d32f2f;
}

.pager-wrapper {
  border-top: 1px solid #ddd;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 99;
  padding: 15px 20px;
  background-color: rgba(255, 255, 255, 0.8);
}

</style>
