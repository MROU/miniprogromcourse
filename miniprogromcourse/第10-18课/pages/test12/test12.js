Page({
  data:{
    imageObject:[]
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  switch2Change: function (e) {
    if (e.detail.value){
      wx.showToast({
        title: '设为隐私',
        icon: 'success',
        image:"../images/private.png",
        duration: 1000
      })
    }else{
      wx.showToast({
        title: '设为公开',
        icon: 'success',
        image: "../images/public.png",
        duration: 1000
      })
    }
  },
  showSelImg: function () {
    var that=this
    wx.showActionSheet({
      itemList: ['拍照', '从手机相册中选择'],
      success: function (res) {
        if (0 == res.tapIndex){
          wx.chooseImage({
            count:1,
            sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
            sourceType: ['camera'], // album 从相册选图，camera 使用相机，默认二者都有
            success: function (res) {
              that.setData({
                ispic: true,
                imageObject: res.tempFilePaths
              })
            }
          })
        } else if (1 == res.tapIndex){
          wx.chooseImage({
            count:1,
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
  preNetImg:function (event) {
    var that = this
    wx.previewImage({
      current: event.currentTarget.dataset.img, //当前显示图片的http链接
      urls: that.data.imageObject //需要预览的图片http链接列表
    })
  },
  onReady: function () {
    // Do something when page ready.
  },
  onShow: function () {
    // Do something when page show.
  },
  onHide: function () {
    // Do something when page hide.
  },
  onUnload: function () {
    // Do something when page close.
  },
  onPullDownRefresh: function () {
    // Do something when pull down.
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
  },
  onShareAppMessage: function () {
    // return custom share data when user share.
  },
  onPageScroll: function () {
    // Do something when page scroll
  }
})