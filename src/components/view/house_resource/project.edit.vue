<template>
  <form class="form-wrapper">
    <div class="form-top-funs">
      <Tooltip label="保存项目" @click="formSave" icon="check_circle" :size="32">
      </Tooltip>
      <Tooltip label="删除项目" @click="formDelete" icon="cancel" :size="32" color="red">
      </Tooltip>
    </div>
    <mu-row>
      <mu-col width="100" tablet="100" desktop="30">
        <pic-view :list='viewList' />
        <BottomTear class="view-count">
          <mu-list>
            <mu-sub-header>项目统计数据</mu-sub-header>
            <mu-list-item title="楼栋总数" leftIcon="remove_red_eye">
              <mu-badge content="12" slot="right" secondary /></mu-list-item>
            <mu-list-item title="房源总数" leftIcon="person_add">
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
          <h2 class="form-header">{{isEdit ? '编辑项目' : '添加项目'}}</h2>
          <mu-text-field label="项目名称" hintText="请输入项目名称" fullWidth labelFloat />
          <mu-select-field v-model="formParams.postion" multiple label="项目位置" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="宝安区" />
            <mu-menu-item value="2" title="南山区" />
            <mu-menu-item value="3" title="福田区" />
          </mu-select-field>
          <mu-select-field v-model="formParams.postion" multiple label="配套设施" hintText="请选择" labelFloat>
            <mu-menu-item value="1" title="幼儿园" leftIcon="local_florist" />
            <mu-menu-item value="2" title="篮球场" leftIcon="whatshot" />
            <mu-menu-item value="3" title="游泳馆" leftIcon="bubble_chart" />
          </mu-select-field>
          <mu-text-field label="项目介绍" hintText="项目介绍在100个字符内" multiLine :rows="3" :rowsMax="6" :maxLength="100" fullWidth labelFloat/>
          <mu-text-field label="物业公司" hintText="物业公司电话/联系人/联系方式" fullWidth labelFloat/>
          <mu-text-field label="项目地址" hintText="输入项目详细地址" fullWidth labelFloat/>
          <Map />
          <div class="form-footer">
            <mu-raised-button label="保存项目" @click="formSave" icon="check_circle" backgroundColor="blue" />
            <mu-raised-button label="删除项目" @click="formDelete" icon="cancel" backgroundColor="red" />
          </div>
        </div>
      </mu-col>
    </mu-row>
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
  methods: {
    formSave(){
      console.log('save')
      this.$store.commit('REMOVE_TAB_CURRENT')
    },
    formDelete(){
      console.log('delete')
      this.$store.commit('REMOVE_TAB_CURRENT')
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
