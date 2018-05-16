<template>
	<div>
  	<v-table is-vertical-resize style="width:100%" is-horizontal-resize :vertical-resize-offset='110' :columns="columns" :table-data="tableData" row-hover-color="#eee" row-click-color="#edf7ff"></v-table>
  	<div class="pager-outer">
			<span class="pager-count">共{{pagenation.total}}条</span>
  		<mu-pagination class="pager-component" :total="pagenation.total" :showSizeChanger="true" :pageSizeOption="pageSizeOption" @pageSizeChange="handleClick"></mu-pagination>
  		<div class="clear"></div>
  	</div>
	</div>
</template>
<script>
export default {
  data() {
    return {
    	frameSize: this.$store.getters.frameSize,
    	columns: [
        { field: 'project', title: '项目', width: 150, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor', title: '楼栋', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_num', title: '房号', width: 100, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_area', title: '面积', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_type', title: '户型', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_rent', title: '房租', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_users', title: '入住人数', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true },
        { field: 'floor_date', title: '租期', width: 110, titleAlign: 'center', columnAlign: 'center', isResize: true }
      ],
      pagenation: {
      	total: 130,
      	pageSizeOption: [10, 20, 30, 40],
      },
      tableData: [
        { "project": "A花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "B花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "C花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "D花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "E花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
        { "project": "F花园", "floor": "A栋", "floor_num": "B311", "floor_area": "300㎡", "floor_type": "两室一厅", "floor_rent": "1500/月", "floor_users": "3", "floor_date": "2019-09-08"},
      ],
      handleClick(){

      }
    }
  }
}

</script>

<style scoped>
	
</style>
