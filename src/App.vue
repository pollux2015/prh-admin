<template>
  <div id="app">
    <router-view />
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

</style>
