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
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" },
  { id: "1", "order_id": "123", "date_notice": "2018-10-09", "notice_range": "10天", "identify_face_cnt": "10次", "status": "待审核", "leader": "小花花", "date_close": "2019-10-10" }
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
        { field: 'order_id', title: '单号', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'date_notice', title: '提醒时间', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true, orderBy: '' },
        { field: 'notice_range', title: '提醒范围', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'identify_face_cnt', title: '人脸识别次数', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'status', title: '审核状态', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'leader', title: '负责人', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'date_close', title: '处理时间', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true, orderBy: ''}
      ]
    }
  },
  created() {
    this.getTableData(1)
  },
  methods: {
    goEdit(id) { // 前往编辑
      this.$router.push({
        name: 'business.strangers.notice.info',
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
