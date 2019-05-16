// pages/test17/test17.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     width:600,
     height:900
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.getSystemInfo({
        success: function(res) {
          width:res.screenWidth
        },
      })
  },
  saveImg:function(){
    wx.canvasToTempFilePath({
      x: 0,
      y: 0,
      width: 600,
      height: 900,
      canvasId: 'shareCanvas',
      success: function (res) {
        console.log("lu:" + res.tempFilePath)
      }
    })
  },
  toShareImg:function(){
    var that=this
    wx.getImageInfo({
      src: 'https://fykz.menpad.cn//img_1538450597041_5446',
      success: function (res) {
        console.log(res.width)
        console.log(res.height)
        console.log(res.path)
        const ctx = wx.createCanvasContext('shareCanvas');
        // 作者名称
        ctx.setTextAlign('center')    // 文字居中
        ctx.setFillStyle('#000000')  // 文字颜色：黑色
        ctx.setFontSize(22)         // 文字字号：22px
        ctx.fillText("门派订单概要", 190, 50)
        ctx.setFontSize(16)         // 文字字号：22px
        ctx.fillText("门派单号：",70, 90)
        ctx.fillText("200186", 300, 90)
        ctx.beginPath()
        ctx.setLineWidth(2)
        ctx.moveTo(20, 100)
        ctx.lineTo(340, 100)
        ctx.stroke()


        ctx.fillText("门店单号：", 70, 130)
        ctx.fillText("NJ18-080900", 300, 130)
        ctx.beginPath()
        ctx.setLineWidth(2)
        ctx.moveTo(20, 140)
        ctx.lineTo(340, 140)
        ctx.stroke()


        ctx.fillText("业主姓名：", 70, 170)
        ctx.fillText("欧阳先生", 300, 170)
        ctx.beginPath()
        ctx.setLineWidth(2)
        ctx.moveTo(20, 180)
        ctx.lineTo(340, 180)
        ctx.stroke()


        ctx.fillText("业主地址：",70,210)
        ctx.fillText("北京市大兴区安顺南路",260,210)
        ctx.fillText("12号华远和煦里7号楼", 260, 226)
        ctx.beginPath()
        ctx.setLineWidth(2)
        ctx.moveTo(20, 240)
        ctx.lineTo(340, 240)
        ctx.stroke()


        ctx.drawImage(res.path, 60, 300, 200,200)

        ctx.fillText("长按二维码查看更多详情", 160, 520)
        ctx.setFontSize(22)  
        ctx.fillText("门派——木门仓配装一体化", 160, 560)
        ctx.draw();
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