<template>
  <div class="articles">
    <div class="introduce">
      <p>
        <span>共<strong>2018</strong>个知识点</span>
        <span>共<strong>2018</strong>篇文章</span>
      </p>
    </div>
    <div class="tabs">
      <el-tabs type="border-card">
        <!-- 文章列表 -->
        <el-tab-pane label="文章列表">
          <articleList v-if="!showDetail" @detail="seeDetail"></articleList>
          <div v-else class="detail">
            <el-button type="success" size="mini" @click="showDetail = false"><i class="el-icon-back"></i></el-button>
            <editor :id="articleId" @update="showDetail = false"></editor>
          </div>
        </el-tab-pane>
        <!-- 添加文章 -->
        <el-tab-pane label="添加文章">
          <editor :id="null" @add="addSuccess"></editor>
        </el-tab-pane>
        <!-- 分类管理 -->
        <el-tab-pane label="分类管理">
          <cateEditor></cateEditor>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import articleList from './components/articleList'
import cateEditor from './components/cateEditor'
export default {
  name: '',
  data () {
    return {
      showDetail: false,
      articleId: null
    }
  },
  components: {
    articleList,
    cateEditor
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {
    seeDetail (id) {
      this.articleId = id
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
