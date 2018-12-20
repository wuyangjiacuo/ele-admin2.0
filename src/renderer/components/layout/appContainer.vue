<template>
  <div class="view">
    <div class="sideBar">
      <sideBar @jump="jump"></sideBar>
    </div>
    <div class="right">
      <headerBar></headerBar>
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
      console.log(path)
      this.$emit('jump', path)
      // this.$router.push(path)
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.view{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background: #f4f7fc;
  .sideBar{
    width: 60px;
    height: 100%;
  }
}
</style>