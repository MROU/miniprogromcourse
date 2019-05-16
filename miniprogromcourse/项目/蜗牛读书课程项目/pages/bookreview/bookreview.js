// pages/bookreview/bookreview.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   isprivate:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '写书评',
    })
  },
  switch2Change: function (e) {
    var that=this
    if (e.detail.value) {
      wx.showToast({
        title: '设为隐私',
        icon: 'success',
        image: "../../images/private.png",
        duration: 1000
      })
      that.setData({
        isprivate:1
      })
      } else {
      wx.showToast({
        title: '设为公开',
        icon: 'success',
        image: "../../images/public.png",
        duration: 1000
      })
      that.setData({
        isprivate: 0
      })
    }
  },
  showSelImg: function () {
    var that = this
    wx.showActionSheet({
      itemList: ['拍照', '从手机相册中选择'],
      success: function (res) {
        if (0 == res.tapIndex) {
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
              that.setData({
                ispic: true,
                imageObject: res.tempFilePaths
              })
            }
          })
        } else if (1 == res.tapIndex) {
          wx.chooseImage({
            count: 1,
            sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['album'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
              that.setData({
                ispic: true,
                imageObject: res.tempFilePaths
              })
            }
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  preNetImg: function (event) {
    var that = this
    wx.previewImage({
      current: event.currentTarget.dataset.img, //当前显示图片的http链接
      urls: that.data.imageObject //需要预览的图片http链接列表
    })
  },
  publishReview: function (e) {
    var that = this
    console.log(e.detail.value.title)
    console.log(e.detail.value.desc)
    wx.request({
      url: 'http://localhost/dashboard/demo/publishReview.php', //仅为示例，并非真实的接口地址
      data: {
        title: e.detail.value.title,
        desc: e.detail.value.desc,
        isprivate: that.data.isprivate,
        imgurs: ""
      },
      method: "POST",//可以配置POST、GET请求
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        //200代表的是返回数据成功
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