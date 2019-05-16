// pages/eighteen/eighteen.js
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

  },
  showToast: function (e) {
    wx.showToast({
      title: '我是一个Toast',
      icon: 'none',
      image:"",
      duration: 2000
    })
  },
  hideToast: function (e) {
     wx.hideToast()
  },
  showLoading: function (e) {
    wx.showLoading({
      title: '加载中...',
      mask:false
    })
  },
  hideLoading: function (e) {
    wx.hideLoading()
  },
  showModal: function (e) {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      showCancel:false,
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showActionSheet:function(e){
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success(res) {
        console.log(res.tapIndex)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })
  },
  navigateTo: function (e) {
    wx.navigateTo({
      url: '/pages/seventeen/seventeen'
    })
  },
  switchTab: function (e) {
    wx.switchTab({
      url: '/pages/seventeen/seventeen'
    })
  },
  redirectTo: function (e) {
    wx.redirectTo({
      url: '/pages/seventeen/seventeen'
    })
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