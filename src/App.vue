<template>
  <div id="app">
    <!-- 主view -->
    <router-view />
    <modals-container/>
    <v-dialog/>
  </div>
</template>
<script>
export default {
  name: 'App',
  mounted(){
    
  }
}

</script>
<style>
body,html{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgb(236, 236, 236);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.gap-r-l {
  padding: 0 16px;
}


/* gobal font */

.color-red {
  color: #f44336;
}

.color-pink {
  color: #e91e63;
}

.color-purple {
  color: #9c27b0;
}

.color-deep-purple {
  color: #9c27b0;
}

.color-blue {
  color: #2196f3;
}

.color-green {
  color: #4caf50;
}



/* gobal warpper */
.page-wrapper,
.page-wrapper-nopad{
  position: relative;
}
.page-wrapper {
  padding: 15px;
}


/* global form */

.form-wrapper {
  position: relative;
}

.form-top-funs {
  position: absolute;
  right: 0;
  top: -50px;
}

.form-header {
  margin: 0;
}

.form-footer {
  padding: 25px 0;
}

.footer-center {
  text-align: center;
}

.form-right {
  padding-left: 25px;
}

.form-footer .mu-raised-button {
  margin-right: 10px;
  text-align: center;
}


/* dialog */

.dialog-c-title {
  font-size: 18px;
}

.dialog-c-text {
  font-size: 14px;
}

.vue-dialog-button {
  font-size: 14px !important;
}

.v--modal-overlay {
  background-color: rgba(0, 0, 0, 0.3) !important
}

.clear {
  clear: both;
}


/*table-title*/

.table-title {
  font-weight: 700;
  
}

.v-table-header-row{
  background-color: #f5f5f5;
}

.v-table-views,
.v-table-title-cell,
.v-table-body-cell{
  border-color: #ddd;
}

.pager-wrapper {
  padding-top: 15px;
  margin: 0 auto;
}
.pager-total{
  color: #666;
  font-weight: 700;
  line-height: 30px;
  float: left;
}

.page-component{
  float: right;
}

.clearfix:after {
   content:""; 
   display: block; 
   clear:both; 
}

.tag{
  font-weight: 0;
  background-color: #cecece;
  padding: 0 15px;
  text-align: center;
  border-radius: 20px;
  display: inline-block;
  height: 30px;
  line-height: 30px;
}

.tag-error{
  color: #fff;
  background-color: #f44336;
}

.tag-blue{
  color: #fff;
  background-color: #2196f3;
}

.tag-purple{
  color: #fff;
  background-color: #9c27b0;
}


</style>
