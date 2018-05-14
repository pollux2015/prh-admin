<template>
  <div class="view-wrapper">
    <div class="view-bigger" :style="sizeParams.viewStyle">
      <div class="view-img" v-if="currentPic"><img :src="currentPic"></div>
      <div v-else class="view-table-center">
        <div style="display: table-cell; vertical-align: middle; text-align: center;">
          <mu-icon value="camera_alt" :size="60" />
          <br>
          <span>选择图片</span>
        </div>
      </div>
    </div>
    <div class="view-list" :style="sizeParams.listStyle" v-if="viewList.length">
      <div class="view-img" @click="activeItem(item)" :class="{'view-img-dash': !item}" :style="sizeParams.itemStyle" v-for="item in viewList">
        <img v-if="item" :src="item">
      </div>
      <div class="view-img view-add view-table-center" :style="sizeParams.itemStyle">
        <mu-icon value="camera_alt" :size="32" />
      </div>
    </div>
    <div class="clear"></div>
  </div>
</template>
<script>
export default {
  props: {
    area: { // 大小
      type: Array,
      default: () => {
        return ['100%', 'auto']
      }
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showLength: {
      type: Number,
      default: 4
    },
    maxLength: {
      type: Number,
      default: 10
    },
    funs: {
      type: Array,
      default: () => {
        return ['add']
      }
    }
  },
  data() {
    return {
      currentPic: '',
      sizeParams: {
        eleWidth: 200,
        itemWidth: 200,
        viewStyle: {},
        itemStyle: {},
        listStyle: {}
      }
    }
  },
  computed: {
    viewList() {
      const offMax = this.list.length - this.showLength
      const rlist = [].concat(this.list)
      if (offMax < 0) {
        for (let i = 0; i < -1 * offMax; i++) {
          rlist.push('')
        }
      }
      return rlist
    }
  },
  mounted() {
    this.setSize()
  },
  methods: {
    setSize() {
      this.sizeParams.eleWidth = this.$el.offsetWidth
      this.sizeParams.itemWidth = this.sizeParams.eleWidth / (this.showLength + 1)
      this.sizeParams.viewStyle = { 'width': `${this.sizeParams.eleWidth}px`, height: `${this.sizeParams.eleWidth}px` }
      this.sizeParams.itemStyle = { 'width': `${this.sizeParams.itemWidth}px`, height: `${this.sizeParams.itemWidth}px` }
      this.sizeParams.listStyle = { 'width': `${this.sizeParams.showLength*4 + this.sizeParams.eleWidth}px`, 'margin-left': '-2px' }
    },
    activeItem(item) {
      this.currentPic = item || this.currentPic
    }
  }
}

</script>
<style type="text/css">
.clear{clear: both;}
.view-wrapper {
  width: 100%;
}

.view-img {
  display: block;
  background-color: #eeeeee;
}

.view-img img {
  display: block;
  width: 100%;
  height: 100%;
}

.view-list {
  position: relative;
  margin-top: 10px;
}

.view-list .view-img {
  float: left;
  border: 2px solid #fff;
  box-sizing: border-box;
  width: 25%;
  transition: border-color .4s;
}

.view-list .view-img:hover {
  border-color: #9c27b0;
}

.view-table-center {
  display: table;
  text-align: center;
  width: 100%;
  height: 100%;
  color: #616161;
  background-color: #eeeeee;
}

.view-add {
  position: absolute;
  right: -2px;
  top: 0;
}

.view-add .material-icons {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  margin-top: 2px;
}


.view-img-dash:before {
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  border: 1px dashed #bdbdbd;
  background-color: #fff;
  box-sizing: border-box;
}

</style>
