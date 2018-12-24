<template>
  <div class="articles">
    <div class="introduce">
      <p>
        <span>已完成<strong>2018</strong>个任务</span>
        <span>剩余<strong style="color:#f56c6c">2018</strong>个待完成</span>
      </p>
    </div>
    <div class="tabs">
      <el-tabs type="border-card">
        <!-- 任务列表 -->
        <el-tab-pane label="任务列表">
          <taskList v-if="!showDetail" @detail="seeDetail"></taskList>
          <div v-else class="detail">
            <el-button type="success" size="mini" @click="showDetail = false"><i class="el-icon-back"></i></el-button>
            <taskDetail :id="taskId" @update="showDetail = false"></taskDetail>
          </div>
        </el-tab-pane>
        <!-- 添加任务 -->
        <el-tab-pane label="添加任务">
          <addTask :id="null" @add="addSuccess"></addTask>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import taskList from './taskmanager'
import addTask from './addTask'
import taskDetail from './components/editor'
export default {
  name: '',
  data () {
    return {
      showDetail: false,
      taskId: null
    }
  },
  components: {
    taskList,
    addTask,
    taskDetail
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {
    seeDetail (id) {
      this.taskId = id
      this.showDetail = true
    },
    addSuccess () {
      console.log(123)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.articles{
  .introduce{
    height: 50px;
    padding: 10px;
    p{
      margin: 0;
      padding-left: 50px;
      span{
        margin-right: 50px;
        strong{
          font-size: 25px;
          margin-left: 5px;
          margin-right: 5px;
        }
      }
    }
  }
  .tabs{
    box-sizing: border-box;
    width: 100%;
    height: 700px;
    padding: 10px;
    overflow-y: scroll;
    background: #f4f7fc;
  }
}

</style>
