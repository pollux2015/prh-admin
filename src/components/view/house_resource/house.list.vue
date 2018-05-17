<template>
  <div>
    <v-table :columns="columns" :table-data="tableData" :row-dblclick="tableDbclick" :row-click="tableClick" :select-all="selectALL" :select-group-change="selectGroupChange" @sort-change="sortChange" :is-loading="tableLoading" :vertical-resize-offset="65" :show-vertical-border="true" :multiple-sort="false" column-width-drag is-vertical-resize is-horizontal-resize row-hover-color="#eee" row-click-color="#edf7ff" style="width:100%">
    </v-table>
    <div class="pager-wrapper">
      <span class="pager-total">共{{pageTotal}}条</span>
      <v-pagination class="page-component" @page-change="pageChange" @page-size-change="pageSizeChange" :total="pageTotal" :page-size="$store.getters.pagesize" :layout="['prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
    </div>
  </div>
</template>
<script>
const resData = [
  { id: "1", "project": "A花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "2", "project": "B花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "3", "project": "C花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "4", "project": "D花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "5", "project": "E花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "6", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "7", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "8", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "9", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "10", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "11", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "12", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "13", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
  { id: "14", "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08" },
]

export default {
  data() {
    return {
      tableLoading: false,
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
  },
  methods: {
    goEdit(id) { // 前往编辑
      this.$router.push({
        name: 'house_resource.house.edit',
        params: { id }
      })
    },
    getTableData(currentPage) { // 获取表格数据
      this.pageCurrent = currentPage || 1
      this.pageSize = this.$store.pagesize
      this.tableLoading = true

      setTimeout(() => {
        // response
        // this.$lodash.forEach(resData, (item) => {item._checked = false})
        this.tableData = resData
        this.pageTotal = 130
        this.tableLoading = false
      }, 1000)

    },
    pageChange(currentPage) { // 切换分页
      this.getTableData(currentPage)
    },
    pageSizeChange(size) { // 设置表格每页显示条数
      this.$store.commit('SET_PAGE_SIZE', size)
      this.getTableData(1)
    },
    sortChange(params) { // 表格排序
      this.sort = params
      this.getTableData(1)
    },
    getSelectionBy(name) { // 获取表格选中行, 指定字段名集合
      return this.$lodash.map(this.tableSelection, 'id')
    },
    selectALL(selection) { // 表格全选
      this.tableSelection = selection
      this.tableSelectionIds = this.getSelectionBy('id')
    },
    selectGroupChange(selection) { // 表格选中change
      this.tableSelection = selection
      this.tableSelectionIds = this.getSelectionBy('id')
    },
    tableDbclick(rowIndex, rowData, column) { // 双击表格行
      this.goEdit(rowData.id)
    },
    tableClick(rowIndex, rowData, column) { // 单击表格行
      let currentRow = this.tableData[rowIndex];
      currentRow._checked = !currentRow._checked;
      this.$set(this.tableData, rowIndex, currentRow)
    },
  }
}

</script>
<style scoped>


</style>
