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
  name: 'App'
}

</script>
<style>
/*body,html{
  overflow: hidden;
}*/

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
.dialog-c-title{
  font-size: 18px;
}
.dialog-c-text{
  font-size: 14px;
}

.vue-dialog-button{
  font-size: 14px !important;
}

.v--modal-overlay{
  background-color: rgba(0, 0, 0, 0.3) !important
}

</style>
