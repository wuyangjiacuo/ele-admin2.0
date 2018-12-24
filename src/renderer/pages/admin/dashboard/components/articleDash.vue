<template>
  <div class="">
    <p>文章分类占比</p>
    <ve-pie v-if="chartData" :data="chartData"></ve-pie>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      chartData: null
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {
    this.chartData = {
      columns: ['cate', 'cost', 'profit'],
      rows: [
        { 'vue': 'vue', 'cost': 123, 'profit': 3 },
        { 'cate': 'dart', 'cost': 1223, 'profit': 6 },
        { 'cate': 'flutter', 'cost': 2123, 'profit': 90 },
        { 'cate': 'ES6', 'cost': 4123, 'profit': 12 },
        { 'cate': 'element', 'cost': 3123, 'profit': 15 },
        { 'cate': 'css', 'cost': 7123, 'profit': 20 }
      ]
    }
  },
  methods: {},
  watch: {}
}
</script>

<style scoped lang="less">
</style>
