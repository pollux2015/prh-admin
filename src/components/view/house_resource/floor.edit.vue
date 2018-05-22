<template>
  <form class="form-wrapper">
    <div class="form-top-funs">
      <Tooltip label="保存" @click="formSave" icon="check_circle" :size="32"></Tooltip>
      <Tooltip label="删除" @click="formDelete" icon="cancel" :size="32" color="red" v-if="isEdit"></Tooltip>
    </div>
    <mu-row>
      <mu-col width="100" tablet="100" desktop="30">
        <pic-view :list='viewList' />
        <BottomTear class="view-count">
          <mu-list>
            <mu-sub-header>楼栋统计数据</mu-sub-header>
            <mu-badge content="12" slot="right" secondary /></mu-list-item>
            <mu-list-item title="空置房源" leftIcon="link">
              <mu-badge content="12" slot="right" secondary /></mu-list-item>
            <mu-list-item title="住户总数" leftIcon="content_copy">
              <mu-badge content="12" slot="right" secondary /></mu-list-item>
          </mu-list>
        </BottomTear>
      </mu-col>
      <mu-col width="100" tablet="100" desktop="70">
        <div class="form-right">
          <h2 class="form-header">{{isEdit ? '编辑楼栋' : '添加楼栋'}}</h2>
          <mu-text-field label="楼栋名称" hintText="请输入楼栋名称" fullWidth labelFloat />
          <mu-select-field v-model="formParams.postion" label="楼栋位置" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="宝安区" />
            <mu-menu-item value="2" title="南山区" />
            <mu-menu-item value="3" title="福田区" />
          </mu-select-field>
          <mu-select-field v-model="formParams.postion" label="所属项目" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="A花园" />
            <mu-menu-item value="2" title="B花园" />
            <mu-menu-item value="3" title="C花园" />
          </mu-select-field>
          <br>
          <mu-select-field v-model="formParams.postion" multiple label="配套设施" hintText="请选择" labelFloat>
            <mu-menu-item value="1" title="幼儿园" leftIcon="local_florist" />
            <mu-menu-item value="2" title="篮球场" leftIcon="whatshot" />
            <mu-menu-item value="3" title="游泳馆" leftIcon="bubble_chart" />
          </mu-select-field>
          <br>
          <mu-text-field label="楼栋层数" hintText="楼栋层数仅能输入数字" labelFloat />
          <div class="form-footer">
            <mu-raised-button label="保存" @click="formSave" icon="check_circle" backgroundColor="blue" />
            <mu-raised-button label="删除" @click="formDelete" icon="cancel" backgroundColor="red" v-if="isEdit" />
          </div>
        </div>
      </mu-col>
    </mu-row>
  </form>
</template>
<script>
export default {
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
    '$route' (){
      this.initPage()
    },
  },
  methods: {
    initPage(){
      if(this.isEdit){
        this.$store.commit('CLEAR_TAB')
        this.$store.commit('ADD_TAB', {
          name: 'house_resource.list',
          meta: {title: '房源列表', tabFixed: true},
          params: {
            id: this.$route.params.id,
            type: 'floor'
          }
        })
      }
    },
    formSave() {
      this.$toastr.success('保存成功')
      this.$store.commit('REMOVE_TAB_CURRENT')
    },
    formDelete() {
      this.$salert({
        title: '删除',
        content: '确定删除当前楼栋?',
        btnTxt: '确定删除',
        handler: () => {
          this.$modal.hide('alert')
          this.$store.commit('REMOVE_TAB_CURRENT')
        }
      })
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.view-count {
  margin-top: 15px;
}

</style>
