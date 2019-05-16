// pages/fourteen/fourteen.js
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

  clickOne: function (e) {
    console.log("clickOne被调用:" + e.currentTarget.dataset.phone + "==num:" + e.currentTarget.dataset.num)
  },
  clickTwo: function (e) {
    console.log("clickTwo被调用")
    var a=1
    var c;
    console.log("a:"+a+"===c:"+c)
  },
  clickThree: function (e) {
    console.log("clickThree被调用")
  },
  clickFour:function(e){
    console.log("clickFour被调用")
  },
  clickBind:function (e) {
    console.log("clickBind被调用")
  },
  clickCatch: function (e) {
    console.log("clickCatch被调用")
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