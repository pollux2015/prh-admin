<template>
  <mu-content-block class="page-home">
  <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="25">
      <touch-ripple style="width: 100%;">
        <mu-card class="home-card home-card-red">
          <mu-card-header title="项目总数" subTitle="PROJECT">
            <mu-avatar icon="account_balance" backgroundColor="red500" slot="avatar" />
          </mu-card-header>
          <div class="total-number">
            <Countup :start-val="0" :end-val="300" :duration="300/150" />
          </div>
        </mu-card>
      </touch-ripple>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="25">
      <touch-ripple style="width: 100%;">
        <mu-card class="home-card home-card-blue">
          <mu-card-header title="房源总数" subTitle="RESOURCE">
            <mu-avatar icon="store" backgroundColor="blue500" slot="avatar" />
          </mu-card-header>
          <div class="total-number">
            <Countup :start-val="0" :end-val="157" :duration="157/100" />
          </div>
        </mu-card>
      </touch-ripple>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="25">
      <touch-ripple style="width: 100%;">
        <mu-card class="home-card home-card-green">
          <mu-card-header title="空置房源" subTitle="EMPTY">
            <mu-avatar icon="people_outline" backgroundColor="green500" slot="avatar" />
          </mu-card-header>
          <div class="total-number">
            <Countup :start-val="0" :end-val="33" :duration="33/100" />
          </div>
        </mu-card>
      </touch-ripple>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="25">
      <touch-ripple style="width: 100%;">
        <mu-card class="home-card home-card-yellow">
          <mu-card-header title="住户总数" subTitle="TENEMENT">
            <mu-avatar icon="supervisor_account" backgroundColor="amber500" slot="avatar" />
          </mu-card-header>
          <div class="total-number">
            <Countup :start-val="0" :end-val="78" :duration="70/100" />
          </div>
        </mu-card>
      </touch-ripple>
    </mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="50" style="margin-top: 15px;">
      <mu-card>
        <mu-list>
          <mu-list-item disabled title="待办事项" describeText="快速添加项目, 添加楼栋/房源/住户..." />
          <mu-divider />
          <mu-list-item title="人员信息审核" describeText="住户信息审核">
            <mu-avatar icon="assignment_ind" backgroundColor="blue" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="陌生人提醒" describeText="公租房物业相关订单">
            <mu-avatar icon="record_voice_over" backgroundColor="blue" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="维修管理" describeText="公租房物业相关订单">
            <mu-avatar icon="build" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="投诉建议" describeText="公租房物业相关订单">
            <mu-avatar icon="headset_mic" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="退房办理" describeText="公租房物业相关订单">
            <mu-avatar icon="polymer" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="合同续租" describeText="公租房物业相关订单">
            <mu-avatar icon="folder_shared" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
          <mu-list-item title="通知公告" describeText="公租房物业相关订单">
            <mu-avatar icon="notifications_paused" slot="leftAvatar" />
            <mu-badge content="12" slot="right" />
          </mu-list-item>
        </mu-list>
      </mu-card>
    </mu-col>
    <mu-col width="100" tablet="50" desktop="50" style="margin-top: 15px;">
      <mu-card>
        <mu-list>
          <mu-list-item disabled title="快速入口" describeText="快速添加项目, 添加楼栋/房源/住户..." />
          <mu-divider />
          <mu-list-item title="添加项目" describeText="Jan 10, 2014">
            <mu-avatar icon="account_balance" backgroundColor="purple400" slot="leftAvatar" />
            <mu-icon value="chevron_right" slot="right" />
          </mu-list-item>
          <mu-list-item title="添加楼栋" describeText="Jan 10, 2014">
            <mu-avatar icon="location_city" backgroundColor="purple400" slot="leftAvatar" />
            <mu-icon value="chevron_right" slot="right" />
          </mu-list-item>
          <mu-list-item title="添加房源" describeText="Jan 10, 2014">
            <mu-avatar icon="store" backgroundColor="purple400" slot="leftAvatar" />
            <mu-icon value="chevron_right" slot="right" />
          </mu-list-item>
          <mu-list-item title="添加住户" describeText="Jan 10, 2014">
            <mu-avatar icon="person_add" backgroundColor="purple400" slot="leftAvatar" />
            <mu-icon value="chevron_right" slot="right" />
          </mu-list-item>
        </mu-list>
      </mu-card>
    </mu-col>
  </mu-row>
  </mu-content-block>
</template>
<script>
import Countup from '@/components/basic/countup.vue'
export default {
  components: {
    Countup
  },
  data() {
    return {
      name: 'home',
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.home-card {
  position: relative;
}

.home-card .total-number {
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 30px;
  font-weight: 700;
}

.home-card-red .total-number {
  color: #f44336
}

.home-card-blue .total-number {
  color: #2196f3
}

.home-card-green .total-number {
  color: #4caf50
}

.home-card-yellow .total-number {
  color: #ffc107
}

</style>
