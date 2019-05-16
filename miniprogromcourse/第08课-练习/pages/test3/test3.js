//index.js
//获取应用实例
const network = require("../../utils/network");
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    storelist: [{ storeCode: '1', storeName: '北极一家', selpoint: false, index: 0, netsel: false }, { storeCode: '2', storeName: '乐源', selpoint: false, index: 1, netsel: false }, { storeCode: '3', storeName: '美胡', selpoint: false, index: 2, netsel: false }, { storeCode: '4', storeName: '开开', selpoint: false, index: 3, netsel: false }, { storeCode: '5', storeName: '家家', selpoint: false, index: 4, netsel: false }, { storeCode: '6', storeName: '北极一家', selpoint: false, index: 5, netsel: false }, { storeCode: '7', storeName: '乐源', selpoint: false, index: 6, netsel: false }, { storeCode: '8', storeName: '美胡', selpoint: false, index: 7, netsel: false }, { storeCode: '9', storeName: '开开', selpoint: false, index: 8, netsel: false }, { storeCode: '10', storeName: '家家', selpoint: false, index: 9, netsel: false}],
    stylename:"cell",
    stylenameed:"cell-selected",
    cstylename: "storename",
    cstylenameed: "storename-selected",
    cnum:3,
    isshow:false,
    isshare: false,
    appid:"wxfec4e9a527374c7f",
    secret:"4f6744f2439e1bfb488c48d532b9f86f",
    ids:[],
    poss:[]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '我选我猜',
      path: '',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function(){
    var that=this
    // 写入参数
    var params = new Object()
    params.grant_type ="client_credential"
    params.appid = that.data.appid
    params.secret = that.data.secret
    //发起请求
    network.POST('https://api.weixin.qq.com/cgi-bin/token', that.data.token,
      {
        params: params,
        success: function (res) {
          //success
          console.log(res.data.access_token)
          that.createQrcode(res.data.access_token);
        },
        fail: function () {
          //失败后的逻辑
          wx.showModal({
            title: '仓储系统正在升级中...',
            content: content,
            showCancel: false,
            success: function (res) {

            }
          })
        },
        complete: function () {
          wx.hideLoading()
        }
      })

  },
  commitData: function(){
    var that = this 
    wx.showLoading({
      title: '提交...',
    })

    setTimeout(function () {
        that.commitSelData();
    }
      ,1000)

  },

 commitSelData:function(){
   var that = this 
   var params = new Object()
   params.ids = that.data.ids
   console.log(that.data.poss)
   //发起请求
   network.POST('http://www.startplan.cn/dealeval.php', that.data.token,
     {
       params: params,
       success: function(res){
         //success
         if (res.data.code == '0000'){
           wx.hideLoading()
           for (var t = 0; t < that.data.poss.length; t++) {
             that.data.storelist[that.data.poss[t]].netsel = true
           }
           var storelist = that.data.storelist;
           that.setData({
             storelist: storelist,
             isshare:true,
             isshow:false
           })
         } else if (res.data.code == '0001') {

         }
       },
       fail: function () {
         //失败后的逻辑

       },
       complete: function () {
         wx.hideLoading()
       }
     })
 },

  createQrcode:function (token){
    var that = this 
    var params = new Object()
    params.scene = "123"
    params.page = "pages/index/index"
    params.width = 410
    params.auto_color = true
    params.line_color = {"r":"0","g":"0","b":"0"}
    //发起请求
    network.POST('https://api.weixin.qq.com/wxa/getwxacodeunlimit?access_token='+token,that.data.token,
      {
        params: params,
        success: function (res){
          //success
         
        },
        fail:function(){
          //失败后的逻辑
         
        },
        complete: function(){
          wx.hideLoading()
        }
      })
  },
  selectStoreByCode: function (event){
    var that=this
    if(that.data.poss.length>2){
      wx.showModal({
        title: '提示',
        content: '只能选择三个哦',
        showCancel: false,
        success: function (res){
          if (res.confirm) {

          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
      return;
    }
    var index = event.currentTarget.dataset.index
    that.data.storelist[index].selpoint = !that.data.storelist[index].selpoint
    var num = 0
    var codeList=[]
    var postion = []
    console.log("len:" + that.data.poss.length)
    for (var j = 0; j < that.data.storelist.length; j++){
        if (that.data.storelist[j].selpoint){
          num = num + 1;
          codeList.push(that.data.storelist[j].storeCode);
          postion.push(that.data.storelist[j].index);
        }
      }
      that.setData({
        ids: codeList,
        poss: postion
      })
    
  

      var storelist = that.data.storelist;
      that.setData({
        storelist: storelist
      })
      if (num == that.data.cnum){
        that.setData({
          isshow: true
        })
      }else{
        that.setData({
          isshow: false
        })
      }
   
  
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
