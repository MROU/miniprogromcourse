// pages/fifteen/fifteen.js
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
    var a ="hello"
    var b = 1
    var c = {name:"ad"}
    var d = ["12","322"]
    var e=true
    var f
    console.log("a:"+a)
    console.log("b:" + b)
    console.log("c:" + c.name)
    console.log("d:" + d[1])
    console.log("e:" + e)
    console.log("f:" + f)
  },

  bindAdd:function(e){
    var a=40
    var b=60
    console.log(a+b)
    var c="hello"
    var d="world"
    console.log(c + d+a)
  
  },
  bindReduce: function (e) {
    var a = 40
    var b = 60
    console.log(a - b)
  },
  bindMulti: function (e) {
    var a = 40
    var b = 60
    console.log(a * b)
  },
  bindDivide: function (e) {
    var a = 40
    var b = 60
    console.log(a / b)
  },
  bindMod:function (e) {
    var a = 64
    var b = 60
    console.log(a % b)
  },
  bindEqual: function (e) {
    var a = 40
    var b = 60
    console.log(a==b)
    var c = "hello1"
    var d = "hello"
    console.log("c==d:"+(c == d))
  },
  bindNoEqual: function (e) {
    var a = 40
    var b = 60
    console.log(a != b)
    var c = "hello"
    var d = "hello"
    console.log("c==d:" + (c != d))
  },
  bindCompare:function (e) {
    var a = 40
    var b = 60
    // 小于
    console.log("小于:"+(a < b));
    // 大于
    console.log("大于:" +(a > b));
    // 小于等于
    console.log("小于等于:" +(a <= b));
    // 大于等于
    console.log("大于等于"+(a >= b));
  },
  bindLogicCompare: function (e) {
    var a = 3
    var b = -2
    console.log(a > 0 && b > 0);//false
    console.log(a > 0 || b > 0);//true
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