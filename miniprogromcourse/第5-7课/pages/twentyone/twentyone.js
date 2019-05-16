// pages/twentyone/twentyone.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:"",
    nickname:"",
    desc:"",
    pageIndex:0,
    list:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var that=this
     //请求数据
    // var userid="123456"
    // var name = "xiaoming"
    // that.getPerson(userid, name)

    //请求列表
    that.getOrderList()
  },
  getPerson: function (userid,name){
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getUserinfo.php', //仅为示例，并非真实的接口地址
      data: {
        //参数userid
        userid: userid,
        name: name
      },
      method:"POST",//可以配置POST、GET请求
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'token':"abcd"
      },
      success: function (res) {
        console.log(res.data)
        //200代表的是返回数据成功
        if (res.data.code==200){
           that.setData({
             imgurl: res.data.data.imgurl, 
             nickname: res.data.data.nickname,
             desc: res.data.data.desc
           })
        }else{
          wx.showModal({
            title: '提示',
            content: '返回数据有误',
          })
        }
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
    var that = this;
    that.setData({
      pageIndex: 0,
      list: []
    });
    
    that.getOrderList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    var that = this;
    var index = that.data.pageIndex;
    index = index + 1;
    that.setData({
      pageIndex: index
    });
    that.getOrderList()
  },
  getOrderList: function () {
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getStudentList.php', //仅为示例，并非真实的接口地址
      data: {
        //参数userid
        pageIndex: that.data.pageIndex,
        pageSize:5
      },
      method: "POST",//可以配置POST、GET请求
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res.data)
        //200代表的是返回数据成功
        if (res.data.code == 200) {
          var list = that.data.list;
          for (var i = 0; i < res.data.data.list.length;i++){
            list.push(res.data.data.list[i]);
          }
          that.setData({
            list:list
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

  commitData:function(e){
     console.log("您输入的手机号:"+e.detail.value.phone)
     console.log("您输入的验证码:" + e.detail.value.code)
    wx.request({
      url: 'http://localhost/dashboard/demo/login.php', //仅为示例，并非真实的接口地址
      data: {
        //参数userid
        phone: e.detail.value.phone,
        code: e.detail.value.code
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})