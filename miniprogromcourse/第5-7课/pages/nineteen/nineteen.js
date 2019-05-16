// pages/nineteen/nineteen.js
Page({
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //设置标题
    wx.setNavigationBarTitle({
      title: '这是一个标题',
    })

    wx.login({
      success(res) {
        if (res.code) {
          // 发起网络请求，将获取的code传给后台服务端
          console.log('登录成功！' + res.code)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })


  },
  bindGetUserInfo: function (e) {
    console.log(e.detail)
    console.log(e.detail.userInfo)
    console.log(e.detail.userInfo.nickName)
    console.log(e.detail.userInfo.gender)
    console.log(e.detail.userInfo.city)
  },
  saveData: function (e) {
    var that=this
     wx.setStorageSync("token", "987654321")
  },
  getData: function (e) {
    var token=wx.getStorageSync("token")
    console.log("token:" + token)
  },
  clearDataByKey: function (e) {
    wx.removeStorageSync("token")
  },
  clearAllData: function (e) {
     wx.clearStorageSync();
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})