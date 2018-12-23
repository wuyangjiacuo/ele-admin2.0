
<template>
  <div class="">
    <queryForm @query="queryList"></queryForm>
    <el-table
      :data="articleList"
      style="width: 100%">
      <el-table-column
        fixed
        prop="title"
        label="title"
        width="200">
      </el-table-column>
      <!-- <el-table-column
        prop="summary"
        label="简介"
        width="200">
      </el-table-column> -->
      <el-table-column
        prop="views"
        label="view"
        width="50">
      </el-table-column>
      <el-table-column
        prop="cate_id"
        label="cate"
        width="50">
        <!-- <template slot-scope="scope">
          {{cate}}
        </template> -->
      </el-table-column>
      <el-table-column
        prop="meta.createAt"
        label="add time"
        width="150">
        <template slot-scope="scope">
          {{$utils.formateTime(scope.row.meta.createAt)}}
        </template>
      </el-table-column>
      <el-table-column
        prop="meta.updateAt"
        label="update time"
        width="150">
        <template slot-scope="scope">
          {{$utils.formateTime(scope.row.meta.updateAt)}}
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="operation"
        width="200">
        <template slot-scope="scope">
          <el-button type="success" @click="edit(scope.row)">编辑</el-button>
          <el-button type="danger" @click="del(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <pagenation :totalItems="totalItems" :pageSize="query.pageSize" @pageChange="pageChange"></pagenation>
  </div>
</template>

<script>
import queryForm from './queryForm'
export default {
  name: '',
  data () {
    return {
      cate: [],
      props: {
        label: 'cate_name',
        value: 'cate_id',
        children: 'children'
      },
      articleList: [],
      query: {
        keyword: '',
        pageSize: 6,
        page: 1,
        cate_id: 0
      },
      totalItems: 0
    }
  },
  components: {
    queryForm
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.getCateInfo()
    this.getArticleList()
    this.$utils.formateTime(123)
  },
  methods: {
    getCateInfo () {
      this.$api.cate.getCateInfo().then(res => {
        if (res.data.code === 200) {
          this.cate = res.data.data
        }
      })
    },
    queryList (data) {
      this.query.cate_id = data.cateId
      this.query.keyword = data.keword
      this.getArticleList()
    },
    getArticleList () {
      this.$api.article.getArticleList(this.query).then(res => {
        if (res.data.code === 200) {
          this.articleList = []
          this.articleList = res.data.data.items
          this.totalItems = res.data.data.totalItems
          // console.log(this.totalItems)
        }
      })
    },
    selectChange (val) {
      // 需要将label绑定了cate的id
      this.query.cate_id = val[val.length - 1]
    },
    onSubmit () {
      this.getArticleList()
    },
    pageChange (val) {
      this.query.page = val
      this.getArticleList()
    },
    edit (data) {
      // console.log(data)
      this.$emit('detail', data._id)
      // this.$router.replace({
      //   path: '/admin/article/editArticle',
      //   query: {
      //     _id: data._id
      //   }
      // })
    },
    del (data) {
      console.log(data)
      let obj = {
        _id: data._id
      }
      this.$api.article.delArticle(obj).then(res => {
        console.log(res)
        this.getArticleList()
      })
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.tipsList{
  height: 600px;
  margin: 20px auto;
  .item{
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 10px;
    .avatar{
      width: 50px;
      height: 50px;
      border-radius: 25px;
      margin-right: 10px;
      border: solid 1px #eee;
      overflow: hidden;
      img{
        width: 100%;
      }
    }
    .content{
      .title{
        font-size: 15px;
      }
      .summary{
        font-size: 13px;
        color: #e9e9e9;
      }
    }
  }
}
.box-card{
  margin-bottom: 10px;
}
.page{
  display: flex;
  justify-content: flex-end;
  margin-bottom: 15px;
}
.bottomBtns{
  display: flex;
  justify-content: space-between;
}
</style>
