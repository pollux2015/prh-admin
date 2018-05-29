<template>
  <div>
    <mu-list>
      <mu-list-item title="户型管理" describeText="当前共有6个户型" />
    </mu-list>
    <mu-divider />
    <mu-list>
      <mu-sub-header><strong>请拖动户型排序, 双击编辑户型</strong></mu-sub-header>
      <Draggable v-model="list" @end="onDragEnd">
        <transition-group>
          <mu-list-item v-for="item in list" disableRipple @click="handleToggle(item)" :key="item.id" :title="item.name">
            <mu-avatar icon="folder" slot="leftAvatar"/>
            {{`共有${item.use_cnt}个房源`}}
            <mu-icon-menu slot="right" icon="more_vert" tooltip="操作">
              <mu-menu-item title="编辑" />
              <mu-menu-item title="删除" />
            </mu-icon-menu>
          </mu-list-item>
        </transition-group>
      </Draggable>
    </mu-list>
  </div>
</template>
<script>
import Draggable from 'vuedraggable'
export default {
  components: {
    Draggable
  },
  data() {
    return {
      list: [{ id: 1, name: '一室一厅', use_cnt: 0 }, { id: 2, name: '两室一厅', use_cnt: 1 }, { id: 3, name: '三室一厅', use_cnt: 2 }, { id: 4, name: '四室一厅', use_cnt: 4}],
    }
  },
  methods: {
    onDragEnd() {
      console.log(arguments)
    },
    onDelete(key) {
      this[key] = !this[key]
    },
    onEdit(){

    },
    handleToggle(){

    }
  }
}

</script>
