<template>
  <div>
    <div class="header">
      <i :class="[active === 0 ? 'activeIcon' : '', 'el-icon-menu']" @click="goto('/admin/dashboard', -1)"></i>
    </div>
    <div class="sideBar">
      <div class="sideItem" v-for="(item, index) in routerTree" :key="index">
        <div :class="[active === index + 1 ? 'activeBorder' : '', 'routeBorder']"></div>
        <div :class="[active === index + 1 ? 'activeIcon' : '', 'routeIcon']" @click="goto(item.path, index)"><i :class="item.icon"></i></div>
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
          path: '/admin/articles',
          icon: 'el-icon-document'
        },
        {
          path: '/admin/tasks',
          icon: 'el-icon-date'
        },
        {
          path: '/admin/gifs',
          icon: 'el-icon-star-on'
        },
        {
          path: '/admin/users',
          icon: 'el-icon-service'
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
      // console.log(path)
      this.active = index + 1
      this.$emit('jump', path)
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
        font-size: 15px;
      }
    }
    .activeBorder{
      background: #1089fe;
    }
    .activeIcon{
      i{
        font-size: 20px;
      }
      i:before{
        color: #1089fe;
      }
    }
  }
}
</style>
