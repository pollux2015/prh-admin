<template>
  <form class="form-wrapper">
    <div class="form-top-funs">
      <Tooltip label="保存" @click="formSave" icon="check_circle" :size="32"></Tooltip>
      <Tooltip label="删除" @click="formDelete" icon="cancel" :size="32" color="red"></Tooltip>
    </div>
    <div>
      <h2 class="form-header">人员信息审核</h2>
      <div class="card-info">
        <div class="card-info-img">
          <img src="">
        </div>
        <div class="card-info-cont">
          <div class="card-info-label">
            <span>单&emsp;&emsp;号:</span> 2018-0313-0923032km
          </div>
          <div class="card-info-label">
            <span>申请时间:</span> 2018-01-08 12:00:00
          </div>
          <div class="card-info-label">
            <span>申请事项:</span> <strong class="color-purple">添加随住人员</strong>
          </div>
          <div class="card-info-label">
            <span>审批状态:</span> <strong class="tag tag-error">待处理</strong>
          </div>
          <div class="card-info-list">
            <div class="card-info-label">
              <span>姓&emsp;&emsp;名:</span> 李四 (男) - 父亲
            </div>
            <div class="card-info-label">
              <span>出生日期:</span> 1992-04-05
            </div>
            <div class="card-info-label">
              <span>手机号码: </span> 43072519910415571
            </div>
          </div>
        </div>
        <mu-text-field label="审批意见" hintText="项目介绍在100个字符内" multiLine :rows="3" :rowsMax="6" :maxLength="100" fullWidth labelFloat/>
        <div class="form-footer">
          <mu-raised-button label="通过" @click="formSave" icon="check_circle" backgroundColor="blue" />
          <mu-raised-button label="不通过" @click="formDelete" icon="cancel" backgroundColor="red" />
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import Map from '@/components/basic/map'
export default {
  components: {
    Map
  },
  data() {
    return {
      viewList: ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4005596794,992112216&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781615267,834481015&fm=27&gp=0.jpg', 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=489423423,2450269323&fm=27&gp=0.jpg'],
      formParams: {}
    }
  },
  computed: {
    isEdit() {
      return this.$route.name.search('edit') != -1
    }
  },
  beforeRouteEnter(to, from, next) {
    next((app) => {
      app.initPage()
    })
  },
  watch: {
    '$route' () {
      this.initPage()
    },
  },
  methods: {
    initPage() {
      if (this.isEdit) {
        this.$store.commit('CLEAR_TAB')
        this.$store.commit('ADD_TAB', {
          name: 'house_resource.list',
          meta: { title: '房源列表', tabFixed: true },
          params: {
            id: this.$route.params.id,
            type: 'floor'
          }
        })
      }
    },
    formSave() {
      this.$toastr.success('保存成功')
      // this.$store.commit('REMOVE_TAB_CURRENT')
    },
    formDelete() {
      this.$salert({
        title: '不通过',
        content: '确定审核不通过?',
        btnTxt: '确定',
        handler: () => {
          this.$modal.hide('alert')
          this.$toastr.success('审核不通过')
          // this.$store.commit('REMOVE_TAB_CURRENT')
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-top-funs {
  top: 0;
}

.card-info {
  position: relative;
  font-size: 16px;
  padding-left: 160px;
}

.card-info-img {
  position: absolute;
  left: 0;
  top: 10px;
  width: 140px;
  min-height: 140px;
  background-color: #eeeeee;
}

.card-info-img img {
  width: 100%;
}

.card-info-label {
  padding: 12px 0;
  border-bottom: 1px solid #ddd
}

.card-info-label span {
  display: inline-block;
  width: 90px;
  font-weight: 700;
  padding-right: 5px;
}

</style>
