//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    motto: 'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articles: [{ authimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512437530&di=d57274148c9872a69442c4a61940a8b7&imgtype=jpg&er=1&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etdfyy3lf1g20b4069e81.jpg', authName: '上海译文', isauth: true, articleimg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1509946683146/thumb_Mon_Nov_06_2017.jpg', tag: 1, articledesc: "只有爱，才是终极哲学，才是我们活下去的理由", articlecontent: "过去一周，外面的世界纷扰不断，加之，又被胃和肠胃炎困扰，小编直接躺倒，可谓是...", clicknum: 112, booknum: 2, likenum: 131, islike: true }],
    url:"https://mp.weixin.qq.com/"
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '文章详情'
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
  },


  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
