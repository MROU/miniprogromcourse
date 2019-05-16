// pages/leadreading/leadreading.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articles:[],
    pageIndex:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    that.getArticles()
  },
  getArticles: function () {
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getArticles.php', //仅为示例，并非真实的接口地址
      data: {
        //参数userid
        pageIndex: that.data.pageIndex,
        pageSize: 2
      },
      method: "POST",//可以配置POST、GET请求
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        //200代表的是返回数据成功
        if (res.data.code == 200) {
          var list = that.data.articles;
          for (var i = 0; i < res.data.data.list.length; i++) {
            list.push(res.data.data.list[i]);
          }
          that.setData({
            articles: list
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
    var that=this
    that.setData({
      articles: [],
      pageIndex: 0
    })
    that.getArticles()
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that=this
    var index=that.data.pageIndex
    index=index+1
    that.setData({
      pageIndex: index
    })
    that.getArticles()
  },
  writeBookReview:function(){
    wx.navigateTo({
      url: '/pages/bookreview/bookreview',
    })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})