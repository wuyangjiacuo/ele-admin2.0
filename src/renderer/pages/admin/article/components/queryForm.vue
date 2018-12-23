<template>
  <div class="">
    <el-form :inline="true" :model="form" class="demo-form-inline">
      <el-form-item label="分类">
        <el-cascader
          :options="cate"
          v-model="cateArr"
          :props="props"
          change-on-select
          @change="selectChange">
        </el-cascader>
      </el-form-item>
      <el-form-item label="关键词">
        <el-input v-model="form.keword" placeholder="请输入关键词"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      cate: [],
      cateArr: [],
      props: {
        label: 'cate_name',
        value: 'cate_id',
        children: 'children'
      },
      form: {
        cateId: 0,
        keword: ''
      }
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.getCateInfo()
  },
  methods: {
    getCateInfo () {
      this.$api.cate.getCateInfo().then(res => {
        if (res.data.code === 200) {
          this.cate = res.data.data
        }
      })
    },
    selectChange (val) {
      this.form.cateId = val[val.length - 1]
      // this.$emit('query', this.form)
    }
  },
  watch: {
    form: {
      handler: function (val, oldval) {
        this.$emit('query', this.form)
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
</style>
