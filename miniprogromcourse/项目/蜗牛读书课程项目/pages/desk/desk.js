// pages/desk/desk.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    bookname:"",
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    duration:2000,
    indicatorColor:"#8a8a8a",
    indicatorActiveColor:"#000000"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.getBooks()
  },
  getBooks: function () {
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getBooks.php', //仅为示例，并非真实的接口地址
      data: {
      },
      method: "POST",//可以配置POST、GET请求
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        //200代表的是返回数据成功
        if (res.data.code == 200) {
          that.setData({
            list: res.data.data.list,
            bookname: res.data.data.list[0].bookname
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '返回数据有误',
          })
        }
      }
    })
  },
  changeSwiper:function(e){
    var that=this
    var index=e.detail.current
    that.setData({
      bookname: that.data.list[index].bookname
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