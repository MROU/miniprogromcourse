// pages/twenty/twenty.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgs:[],
    videoPath:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  selectPhoto: function (e) {
    var that=this
    wx.chooseImage({
      count: 2,//最多可以选择的图片张数
      sizeType: ['original', 'compressed'],//支持选择的图片尺寸
      sourceType: ['album', 'camera'],//选择图片的来源
      success(res) {
        // tempFilePath可以作为img标签的src属性显示图片
        console.log("res.tempFilePaths:" + res.tempFilePaths)
        that.setData({
          imgs: res.tempFilePaths   
        })
      }
    })
  },
  previewPhoto:function(e){
    var that=this
    var img=e.currentTarget.dataset.img
    console.log("img:"+img)
    wx.previewImage({
      current: img, // 当前显示图片的http链接
      urls: that.data.imgs // 需要预览的图片http链接列表
    })
  },
  selectvideo: function (e) {
    var that = this
    wx.chooseVideo({
      sourceType: ['album', 'camera'],//视频选择的来源
      maxDuration: 60,//拍摄视频最长拍摄时间，单位秒
      compressed: true,//是否压缩所选择的视频文件	
      camera: 'back',//前置或者后置摄像头  前置 front 后置 back
      success(res) {
        console.log(res.tempFilePath)
        that.setData({
          videoPath: res.tempFilePath
        })
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