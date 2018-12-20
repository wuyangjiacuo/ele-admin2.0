<template>
  <div>
    <div class="header">
      <i class="el-icon-menu"></i>
    </div>
    <div class="sideBar">
      <div class="sideItem" v-for="(item, index) in routerTree" :key="index">
        <div :class="[active === index ? 'activeBorder' : '', 'routeBorder']"></div>
        <div :class="[active === index ? 'activeIcon' : '', 'routeIcon']" @click="goto(item.path, index)"><i :class="item.icon"></i></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      active: 0,
      routerTree: [
        {
          path: '/admin/article/articles',
          icon: 'el-icon-date'
        },
        {
          path: '/admin/article/articles',
          icon: 'el-icon-date'
        },
        {
          path: '/admin/article/articles',
          icon: 'el-icon-date'
        }
      ]
    }
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {
    handleOpen () {
    },
    handleClose () {
    },
    goto (path, index) {
      console.log(path)
      this.active = index
      // this.$emit('jump', path)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.header{
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.sideBar{
  background: #fff;
  .sideItem{
    width: 50px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    .routeBorder{
      width: 2px;
      height: 100%;
    }
    .routeIcon{
      width: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      i{
        font-size: 20px;
      }
    }
    .activeBorder{
      background: #1089fe;
    }
    .activeIcon{
      i:before{
        color: #1089fe;
      }
    }
  }
}
</style>
