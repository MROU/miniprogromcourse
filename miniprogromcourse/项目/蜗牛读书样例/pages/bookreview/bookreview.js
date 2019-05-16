Page({
  data:{
    imageObject:[]
  },
  onLoad: function (options) {
    // Do some initialize when page load.
  },
  publishReview: function (e) {
    var that=this
    console.log(e.detail.value.title)
    console.log(e.detail.value.desc)
    wx.request({
      url: 'http://localhost/dashboard/demo/publishReview.php', //仅为示例，并非真实的接口地址
      data: {
        title: e.detail.value.title,
        desc: e.detail.value.desc,
        isprivate: 0,
        imgurs: that.data.imageObject.toString()
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
  switch2Change: function (e) {
    if (e.detail.value){
      wx.showToast({
        title: '设为隐私',
        icon: 'success',
        image:"../../images/private.png",
        duration: 1000
      })
    }else{
      wx.showToast({
        title: '设为公开',
        icon: 'success',
        image: "../../images/public.png",
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
    wx.setNavigationBarTitle({
      title: '写书评'
    })
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