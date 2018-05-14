<template>
  <form class="form-wrapper">
    <div class="form-top-funs">
      <Tooltip label="保存" @click="formSave" icon="check_circle" :size="32">
      </Tooltip>
      <Tooltip label="删除" @click="formDelete" icon="cancel" :size="32" color="red">
      </Tooltip>
    </div>
    <mu-row>
      <mu-col width="100" tablet="100" desktop="30">
        <pic-view :list='viewList' />
        <BottomTear class="view-count">
          <mu-list>
            <mu-sub-header>房源统计数据</mu-sub-header>
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
          <h2 class="form-header">{{isEdit ? '编辑房源' : '添加房源'}}</h2>
          <mu-text-field label="房源名称" hintText="请输入房源名称" fullWidth labelFloat />
          <mu-select-field v-model="formParams.postion" label="房源位置" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="宝安区" />
            <mu-menu-item value="2" title="南山区" />
            <mu-menu-item value="3" title="福田区" />
          </mu-select-field>
          <mu-select-field v-model="formParams.postion" label="所属项目" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="A花园" />
            <mu-menu-item value="2" title="B花园" />
            <mu-menu-item value="3" title="C花园" />
          </mu-select-field>
          <mu-select-field v-model="formParams.postion" label="所属楼栋" hintText="请选择" labelFloat style="margin-right: 10px;">
            <mu-menu-item value="1" title="1栋" />
            <mu-menu-item value="2" title="2栋" />
            <mu-menu-item value="3" title="3栋" />
          </mu-select-field>
          <br>
          <mu-text-field label="所属楼层" hintText="楼栋层数仅能输入数字" labelFloat />
          <mu-text-field label="面积/㎡" hintText="面积仅能输入数字" labelFloat />
          <br>
          <mu-select-field v-model="formParams.postion" label="户型" hintText="请选择" labelFloat>
            <mu-menu-item value="1" title="两室一厅" leftIcon="local_florist" />
            <mu-menu-item value="2" title="三室一厅" leftIcon="whatshot" />
            <mu-menu-item value="3" title="四室一厅" leftIcon="bubble_chart" />
          </mu-select-field>
          <mu-select-field v-model="formParams.postion" multiple label="配套设施" hintText="请选择" labelFloat>
            <mu-menu-item value="1" title="床" leftIcon="local_florist" />
            <mu-menu-item value="2" title="空调" leftIcon="whatshot" />
            <mu-menu-item value="3" title="洗衣机" leftIcon="bubble_chart" />
          </mu-select-field>
          <br>
          <mu-date-picker mode="landscape" hintText="租期" />
          <br/>
          <mu-text-field label="入住人员" hintText="请输入房源名称" fullWidth labelFloat />
          <div class="form-footer">
            <mu-raised-button label="保存" @click="formSave" icon="check_circle" backgroundColor="blue" />
            <mu-raised-button label="删除" @click="formDelete" icon="cancel" backgroundColor="red" />
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
  methods: {
    formSave() {
      console.log('save')
      this.$store.commit('REMOVE_TAB_CURRENT')
    },
    formDelete() {
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
