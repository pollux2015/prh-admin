<template>
  <div>
    <template v-if="$store.getters.membersView == 'table'">
      <v-table :columns="columns" :table-data="tableData" :row-dblclick="tableDbclick" :row-click="tableClick" :select-all="selectALL" :select-group-change="selectGroupChange" @sort-change="sortChange" :is-loading="tableLoading" :vertical-resize-offset="65" :show-vertical-border="true" :multiple-sort="false" column-width-drag is-vertical-resize is-horizontal-resize row-hover-color="#eee" row-click-color="#edf7ff" style="width:100%">
      </v-table>
      <div class="pager-wrapper">
        <span class="pager-total">共{{pageTotal}}条</span>
        <v-pagination class="page-component" @page-change="pageChange" @page-size-change="pageSizeChange" :total="pageTotal" :page-size="$store.getters.pagesize" :layout="['prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
      </div>
    </template>
    <template v-if="$store.getters.membersView == 'card'">
      <ViewList />
    </template>
  </div>
</template>
<script>
import ViewList from '@/components/view/tenement/members.list.view'
const resData = [
  { id: "1", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "2", "name": "小红", "gender": "女", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "3", "name": "小黄", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "4", "name": "小张", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "5", "name": "小白", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "6", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "7", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "8", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "9", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "10", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "10", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "10", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
  { id: "10", "name": "小明", "gender": "男", "birth": "1991-09-08", "cardid": "43076618810415", "company": "深圳市爱绅科技游戏有限公司", "phone": "186643547131", "relation": "申请人", "rent_date": "2016-09-08至2019-09-08" },
]

export default {
  components: {
    ViewList
  },
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
        { field: 'name', title: '姓名', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'gender', title: '性别', width: 80, titleAlign: 'center', columnAlign: 'center' },
        { field: 'birth', title: '出生日期', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'cardid', title: '身份证号码', width: 150, titleAlign: 'center', columnAlign: 'center' },
        { field: 'company', title: '工作单位', width: 140, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'phone', title: '手机号码', width: 130, titleAlign: 'center', columnAlign: 'center' },
        { field: 'relation', title: '住户身份', width: 110, titleAlign: 'center', columnAlign: 'center' },
        { field: 'rent_date', title: '合同时间', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true, orderBy: '' }
      ]
    }
  },
  created() {
    this.getTableData(1)
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
