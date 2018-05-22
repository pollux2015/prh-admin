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
            <mu-sub-header><strong>人脸识别数据统计</strong></mu-sub-header>
            <mu-divider/>
            <mu-badge content="12" slot="right" secondary /></mu-list-item>
            <mu-list-item title="识别次数" leftIcon="link">
              <mu-badge content="12" slot="right" secondary /></mu-list-item>
            <mu-list-item title="最近识别时间" leftIcon="content_copy">
              <mu-badge content="12" slot="right" secondary /></mu-list-item>
          </mu-list>
        </BottomTear>
      </mu-col>
      <mu-col width="100" tablet="100" desktop="70">
        <div class="form-right">
          <h2 class="form-header">{{isEdit ? '编辑人员' : '添加人员'}}</h2>
          <mu-flexbox>
            <mu-flexbox-item>
              <mu-text-field label="姓名" v-model="formParams.name" hintText="请输入人员名称" labelFloat fullWidth/>
            </mu-flexbox-item>
            <mu-flexbox-item>
              <mu-select-field label="住户身份" v-model="formParams.type" hintText="请选择" labelFloat fullWidth>
                <mu-menu-item value="1" title="申请人" />
                <mu-menu-item value="2" title="家庭成员" />
              </mu-select-field>
            </mu-flexbox-item>
          </mu-flexbox>
          <div style="padding-top: 10px;">
            <mu-radio label="男" name="gender" nativeValue="male" v-model="formParams.gender" />&emsp;&emsp;
            <mu-radio label="女" name="gender" nativeValue="fmale" v-model="formParams.gender" />
          </div>
          <mu-flexbox>
            <mu-flexbox-item>
              <mu-text-field label="身份证号码" v-model="formParams.cardid" hintText="请输入身份证号码" fullWidth labelFloat />
            </mu-flexbox-item>
            <mu-flexbox-item>
              <mu-text-field label="手机号码" v-model="formParams.cardid" hintText="请输入工作单位" fullWidth labelFloat />
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-text-field label="工作单位" v-model="formParams.cardid" hintText="请输入工作单位" fullWidth labelFloat />
          <br>
          <mu-flexbox>
            <mu-flexbox-item>
              <mu-select-field v-model="formParams.postion" label="房源位置" hintText="请选择" fullWidth labelFloat>
                <mu-menu-item value="1" title="宝安区" />
                <mu-menu-item value="2" title="南山区" />
                <mu-menu-item value="3" title="福田区" />
              </mu-select-field>
            </mu-flexbox-item>
            <mu-flexbox-item>
              <mu-select-field v-model="formParams.postion" label="入住项目" hintText="请选择" fullWidth labelFloat>
                <mu-menu-item value="1" title="A花园" />
                <mu-menu-item value="2" title="B花园" />
                <mu-menu-item value="3" title="C花园" />
              </mu-select-field>
            </mu-flexbox-item>
            <mu-flexbox-item>
              <mu-select-field v-model="formParams.postion" label="入住楼栋" hintText="请选择" fullWidth labelFloat>
                <mu-menu-item value="1" title="1栋" />
                <mu-menu-item value="2" title="2栋" />
                <mu-menu-item value="3" title="3栋" />
              </mu-select-field>
            </mu-flexbox-item>
            <mu-flexbox-item>
              <mu-select-field v-model="formParams.postion" label="入住房间" hintText="请选择" fullWidth labelFloat>
                <mu-menu-item value="1" title="301" />
                <mu-menu-item value="2" title="302" />
                <mu-menu-item value="3" title="303" />
              </mu-select-field>
            </mu-flexbox-item>
          </mu-flexbox>
          <div>
            <div class="form-label">合同租期</div>
            <mu-date-picker mode="landscape" hintText="合同开始日期" />
            <mu-date-picker mode="landscape" hintText="合同截止日期" />
          </div>
          <mu-text-field label="同住人员" v-model="formParams.cardid" hintText="请输入工作单位" fullWidth labelFloat />
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
    '$route' () {
      this.initPage()
    },
  },
  methods: {
    initPage() {
      
    },
    formSave() {
      this.$toastr.success('保存成功')
      this.$store.commit('REMOVE_TAB_CURRENT')
    },
    formDelete() {
      this.$salert({
        title: '删除',
        content: '确定删除当前人员?',
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

.form-label {
  color: rgba(0, 0, 0, .54);
  font-size: 12px;
}

</style>
