<template>
  <div class="view">
    <div class="left">
      <sideBar @jump="jump"></sideBar>
    </div>
    <div class="right">
      <headerBar class="headerBar"></headerBar>
      <div class="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from './components/sideBar'
import headerBar from './components/headerBar.vue'
export default {
  name: '',
  data () {
    return {
      isCollapse: true
    }
  },
  components: {
    sideBar,
    headerBar
  },
  activated: function () {},
  created: function () {},
  mounted: function () {},
  methods: {
    handleOpen () {
    },
    handleClose () {
    },
    jump (path) {
      // console.log(path)
      this.$emit('jump', path)
      // this.$router.push(path)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.view{
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  .left{
    width: 60px;
    height: 100%;
    margin-right: 5px;
    background: #fff;
  }
  .right{
    width: calc(100% - 65px);
    background: #fff;
    .headerBar{
      height: 50px;
    }
    .content{
      // padding: 10px;
      height: calc(100% - 50px);
    }
  }
}
</style>