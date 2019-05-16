// pages/seventeen/seventeen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputOneValue: 0,
    inputTwoValue: 0,
    installSn: "",
    array: ['黑森林', '布朗尼', '提拉米苏', '双皮奶'],
    array1: [{
      name: "黑森林",
      val: 230
    }, {
      name: "布朗尼",
      val: 245
    }],
    data: {
      code: 200,
      msg: "success",
      list: [{
        name: "稻城亚丁旅游详细路线及实用攻略",
        time: "2019/08/13",
        price: 2300
      }, {
        name: "南疆之行，喀什葛尔",
        time: "2018/05/09",
        price: 4300.4
      }, {
        name: "寻北撒欢，漠河旅游",
        time: "2018/09/30",
        price: 4300.433
      }]
    },
    list: []
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var that = this
    that.setData({
      installSn: options.installSn
    })

    if (that.data.data != null) {
      var list = that.data.data.list;
      for (var i = 0; i < list.length; i++) {
        list[i].price = list[i].price.toFixed(2);
      }
      that.setData({
        list: list
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },
  bindOne: function(e) {
    var that = this
    that.setData({
      inputOneValue: e.detail.value
    })

    
  },
  bindTwo: function(e) {
    var that = this
    that.setData({
      inputTwoValue: e.detail.value
    })
  },
  bindAdd: function(e) {
    var that = this
    var a = parseFloat(that.data.inputOneValue)
    var b = parseFloat(that.data.inputTwoValue)
    var c = a + b
    that.setData({
      res: c
    })

  },
  listenerPicker: function(e) {
    var that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    that.setData({
      index: e.detail.value
    })
  },
  listenerPicker1: function(e) {
    var that = this
    console.log('picker发送选择改变，携带值为', e.detail.value)
    that.setData({
      index1: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})