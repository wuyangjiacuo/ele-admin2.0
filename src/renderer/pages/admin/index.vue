<template>
  <div class="">
    <appContainer @jump="jump">
      <router-view></router-view>
    </appContainer>
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
  mounted: function () {
    this.jump('/admin/dashboard')
  },
  methods: {
    jump (path) {
      this.$router.replace(path)
    }
  }
  // watch: {
  //   $router: {
  //     handler: function (val, oldval) {
  //       // console.log(this.$route.path)
  //     },
  //     deep: true
  //   }
  // }
}
</script>

<style scoped lang="less">
</style>
