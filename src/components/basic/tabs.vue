<template>
  <div>
    <scroll class="wrapper" :scroll-x="true" :scroll-y="false" :list="data"></scroll>
  </div>
</template>
<script>
import scroll from '@/components/basic/scroll'
import lodash from 'lodash'
export default {
  components: {
    scroll
  },
  data() {
    return {
      data: [],
      pulldown: true
    }
  },
  created() {
    this.loadData()
  },
  methods: {
    loadData() {
      setTimeout(() => {
        this.data = []
        for (var i = 0; i < 20; i++) {
          this.data.push({
            name: 'TestScoller_' + i,
            tabname: '首页'
          })
        }
      }, 100)

    }
  }
}

</script>
<style type="text/css">
.content {
  padding: 0;
  margin: 0;
  height: 20px;
}

.tab-item {
  float: left;
  display: inline-block;
  padding: 0 20px;
}

</style>
