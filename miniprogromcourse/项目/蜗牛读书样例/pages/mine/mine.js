//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    motto: 'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showbtn: true
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function (){
    wx.setNavigationBarTitle({
      title: '我的'
    })
  },
  onLoad:function(){
     var that=this
     wx.getUserInfo({
       success: function (res) {
         var userInfo = res.userInfo
         var nickName = userInfo.nickName
         var avatarUrl = userInfo.avatarUrl
         var gender = userInfo.gender //性别 0：未知、1：男、2：女
         var province = userInfo.province
         var city = userInfo.city
         var country = userInfo.country
         console.log("country:" + avatarUrl)
         that.setData({
           userInfo: res.userInfo,
           showbtn: false
         })
       }
     }) 
  },


  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  onGotUserInfo: function (e) {
    var that = this
    that.setData({
      userInfo: e.detail.userInfo,
      showbtn: false
    });
  }
})
