let utils = {
  formateTime (timeStamp) {
    // var Week = ['日', '一', '二', '三', '四', '五', '六']
    let newDate = new Date(timeStamp)
    return newDate.getFullYear() + '/' + (newDate.getMonth() + 1) + '/' + newDate.getDate() + '  ' + newDate.getHours() + ':' + newDate.getMinutes()
  }
}
export { utils }
