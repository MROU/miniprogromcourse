//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    motto: 'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    categorys: [],
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '分类'
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
         that.setData({
           userInfo: res.userInfo
         })
       }
     }) 

     that.getClassList()
  },
  getClassList: function () {
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getClassList.php', //仅为示例，并非真实的接口地址
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
            categorys: res.data.data.list
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
  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
