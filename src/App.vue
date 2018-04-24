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
.gap-r-l{
  padding: 0 16px;
}

#app .color-red{
  color: #f44336;
}
#app .color-pink{
  color: #e91e63;
}
#app .color-purple{
  color: #9c27b0;
}
#app .color-deep-purple{
  color: #9c27b0;
}

#app .color-blue{
  color: #2196f3;
}

#app .color-green{
  color: #4caf50;
}

</style>
