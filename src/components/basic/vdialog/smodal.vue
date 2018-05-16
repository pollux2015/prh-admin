<template>
  <div class="vmodal-wrapper" :class="['vmodal-align-'+ align, {'full-width': fullWidth}]">
    <span class="vmodal-header-cancle" @click="$emit('close')"><mu-icon value="close" :size="22" color="#999"/></span>
    <div class="vmodal-header" v-if="title">
      <div class="vmodal-header-in">
        <span class="vmodal-header-icon"></span>
        <span class="vmodal-header-title">{{title}}</span>
      </div>
    </div>
    <div class="vmodal-content">{{content}}</div>
    <div class="vmodal-footer">
      <mu-flat-button v-if="defaultCancel" class="vmodal-footer-btn" icon="highlight_off" label="取消" :color="defaultColor['gray'].color" :backgroundColor="defaultColor['gray'].backgroundColor" @click="$emit('close')" />
      <mu-flat-button v-if="buttons.length" v-for="(btn, index) in buttons" :key="index" class="vmodal-footer-btn" :icon="btn.icon" :label="btn.title" @click="clickbtn(btn)" :color="defaultColor[btn.color].color" :backgroundColor="defaultColor[btn.color].backgroundColor" />
    </div>
    <div class="footer-txt" v-if="footerTxt">{{footerTxt}}</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: 'title',
    },
    content: {
      type: String,
      default: 'content',
    },
    footerTxt: {},
    fullWidth: {
      type: Boolean,
      default: false,
    },
    defaultCancel: {
      type: Boolean,
      default: true,
    },
    align: {
      type: String,
      default: 'left'
    },
    titleIcon: {
      type: String,
      default: 'pets'
    },
    buttons: {
      type: Array,
      default: () => {
        return [{
          icon: 'check_circle',
          title: '确定',
          color: 'grey700',
          backgroundColor: 'grey100'
        }]
      }
    }
  },
  data() {
    return {
      defaultColor: {
        purple: {
          color: '#fff',
          backgroundColor: 'deepPurple400'
        },
        red: {
          color: '#fff',
          backgroundColor: 'red500'
        },
        blue: {
          color: '#fff',
          backgroundColor: 'blue500'
        },
        yellow: {
          color: '#fff',
          backgroundColor: 'orange800'
        },
        dark: {
          color: 'grey100',
          backgroundColor: 'grey700'
        },
        gray: {
          color: 'grey700',
          backgroundColor: 'grey200'
        }
      }
    }
  },
  methods: {
    clickbtn(btn) {
      if (btn.handler) btn.handler()
    },
  }
}

</script>
<style scoped>
.vmodal-wrapper {
  position: relative;
}

.vmodal-header {
  margin-top: 15px;
  position: relative;
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  padding: 0 20px;
  display: table;
  line-height: 40px;
  width: 100%;
}

.vmodal-header-cancle {
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 5px;
  z-index: 999;
}

.vmodal-header-in {
  display: table-cell;
  vertical-align: middle;
}

.vmodal-header-icon {
  margin-right: 5px;
}

.vmodal-header-icon .mu-icon {
  display: table-cell;
}

.vmodal-content {
  color: #666;
  padding: 10px 20px;
  font-size: 14px;
}

.vmodal-footer {
  padding: 20px;
  text-align: right;
}

.vmodal-footer-btn {
  margin-left: 10px;
}

.footer-txt {
  font-size: 12px;
  padding: 15px;
  border-top: 1px solid #eeeeee;
  background-color: #f5f5f5;
  color: #666;
  text-align: center;
}



/* full-width */

.full-width .vmodal-footer {
  padding: 0;
}

.full-width .vmodal-footer-btn {
  margin: 0;
  width: 100%;
  padding: 22px;
  border-radius: 0;
}

.full-width .vmodal-content {
  padding: 20px 20px 40px;
  font-size: 16px;
}



/* vmodal-align */

.vmodal-align-left .vmodal-align-left .vmodal-content,
.vmodal-align-left .footer-txt,
{
  text-align: left;
}

.vmodal-align-center,
.vmodal-align-center .vmodal-content,
.vmodal-align-center .vmodal-footer,
.vmodal-align-center .footer-txt {
  text-align: center;
}

</style>
