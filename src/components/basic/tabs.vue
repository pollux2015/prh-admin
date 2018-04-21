<template>
  <div class="tabs">
    <span v-for="tab in tabs">
      <mu-chip @delete="handleClose(tab)" :showDelete="!tab.disabled"> {{tab.text}} </mu-chip>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: [{
        name: 'home',
        text: '首页',
        disabled: false,
        query: {},
        params: {}
      }],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClose() {},
    mouseenter(tab, state) {
      tab.showDelete = state
      console.log(123)
    },
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
