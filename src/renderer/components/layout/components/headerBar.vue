<template>
  <div class="headerBar">
    <div class="logo" style="-webkit-app-region: drag">蒋大侠</div>
    <div class="actions">
      <div class="avatar">
        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545580331502&di=569d169edd4db4bb40e2b16537e36a00&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201512%2F06%2F20151206012149_S3FBG.jpeg" alt="">
      </div>
      <div class="minus" @click="minus">
        <span></span>
      </div>
      <div class="close" @click="colse">
        <span></span>
      </div>
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
  methods: {
    minus () {
      const {ipcRenderer: ipc} = require('electron')
      ipc.send('min')
    },
    colse () {
      const {ipcRenderer: ipc} = require('electron')
      ipc.send('close')
    }
  },
  watch: {}
}
</script>

<style scoped lang="less">
.headerBar{
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .logo{
    width: 80%;
  }
  .actions{
    width: 20%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .avatar{
      width: 30px;
      height: 30px;
      background: #eee;
      border-radius: 15px;
      margin-right: 20px;
      img{
        width: 30px;
        height: 30px;
        background: #eee;
        border-radius: 15px;
      }
    }
    .minus{
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: #85ce61;
      margin-right: 10px;
    }
    .close{
      width: 20px;
      height: 20px;
      border-radius: 10px;
      background: #f56c6c;
    }
  }
}
</style>
