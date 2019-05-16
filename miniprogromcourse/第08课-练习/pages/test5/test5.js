//index.js
//获取应用实例
const app = getApp()
Page({
  data:{
    motto: 'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    categorys: [{ categoryCode: '1001', categoryName: '上海译文', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508723813381/thumb_Mon_Oct_23_2017.jpg' }, { categoryCode: '1002', categoryName: '理想国', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1508134789613/thumb_Mon_Oct_16_2017.jpg' }, { categoryCode: '1003', categoryName: '中信出版', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1507540834077/thumb_Mon_Oct_09_2017.jpg' }, { categoryCode: '1004', categoryName: '磨铁', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1506691129549/thumb_Fri_Sep_29_2017.jpg' }, { categoryCode: '1005', categoryName: '新经典', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1506302001464/thumb_Mon_Sep_25_2017.jpg' }, { categoryCode: '1006', categoryName: '读客', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1502434922369/thumb_Fri_Aug_11_2017.jpg' }, { categoryCode: '1007', categoryName: '小说', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1502434784015/thumb_Fri_Aug_11_2017.jpg' }, { categoryCode: '1008', categoryName: '历史', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1499677631932/thumb_Mon_Jul_10_2017.jpg' }, { categoryCode: '1009', categoryName: '文艺', categoryImg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1498875457244/thumb_Sat_Jul_01_2017.jpg' }],
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
  },


  getUserInfo: function (e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
