<template>
  <div class="dashBoard">
    <div class="baseInfo">
      <div class="avatar">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545580331502&di=569d169edd4db4bb40e2b16537e36a00&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F06%2F20151206012149_S3FBG.jpeg" alt="">
      </div>
      <div class="infoDetail">
        <!-- 昵称 -->
        <p class="line1">
          <span>蒋大侠</span>
          <span>超级管理员</span>
        </p>
        <!-- 成就 -->
        <p class="line2">
          <span><strong>27</strong>个专栏</span>
          <span><strong>1927</strong>个知识点</span>
          <span><strong>1927</strong>篇文章</span>
          <span>完成<strong>1927</strong>个任务</span>
        </p>
        <!-- 签名 -->
        <p class="line3">个人签名：哈哈啊哈</p>
      </div>
    </div>
    <div class="charts">
      <el-tabs type="border-card">
        <el-tab-pane>
          <span slot="label"><i class="el-icon-date"></i>文章数表格</span>
          文章数表格
        </el-tab-pane>
        <el-tab-pane label="知识点数表格">知识点数表格</el-tab-pane>
        <el-tab-pane label="任务数表格">任务数表格</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {}
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {},
  watch: {}
}
</script>

<style scoped lang="less">
.dashBoard{
  width: 100%;
  height: 100%;
}
.baseInfo{
  display: flex;
  justify-content: space-around;
  padding: 10px;
  .avatar{
    width: 25%;
    text-align: center;
    img{
      width: 100px;
      height: 100px;
      border-radius: 50px;
    }
  }
  .infoDetail{
    width: 75%;
  }
}
.charts{
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: #f4f7fc;
}
</style>
