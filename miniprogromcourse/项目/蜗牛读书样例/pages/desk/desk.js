Page({
  data: {
    list: [],
    indicatorDots:true,
    autoplay: false,
    interval: 2000,
    duration: 2000,
    indicatorColor: "#8a8a8a",//滑动圆点颜色  
    indicatorActiveColor:"#2c2c2c", //当前圆点颜色  
    bookname:""
  },
  onLoad:function(options){
    var that=this
    that.getBooks();
  },
  changeSwiper: function (e) {
    var that = this;
    var index = e.detail.current;
    that.setData({
      bookname: that.data.list[index].bookname
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '书桌'
    })
  },
  getBooks: function () {
    var that = this
    wx.request({
      url: 'http://localhost/dashboard/demo/getBooks.php', //仅为示例，并非真实的接口地址
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
            list: res.data.data.list,
            bookname: res.data.data.list[0].bookname
          })
        } else {
          wx.showModal({
            title: '提示',
            content: '返回数据有误',
          })
        }
      }
    })
  }
})