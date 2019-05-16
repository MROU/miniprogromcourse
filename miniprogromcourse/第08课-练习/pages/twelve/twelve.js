// pages/twelve/twelve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    article: { authorimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555480439117&di=59c04d4d6655c9f8837bca52bbf2225f&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F1104%2F5714BD3F041943E254246661D20ED5F913AC462B_size199_w640_h640.jpeg", authorname: "苏轼", articleimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597729891,1907107295&fm=26&gp=0.jpg", title: "人生如逆旅，我亦是行人", desc:"词的上片写与友人久别重逢。元祐初年，苏轼朝为起居舍人，钱穆父为中书舍人..."},
    arr: [{ authorimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555480439117&di=59c04d4d6655c9f8837bca52bbf2225f&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F1104%2F5714BD3F041943E254246661D20ED5F913AC462B_size199_w640_h640.jpeg", authorname: "小麦", articleimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597729891,1907107295&fm=26&gp=0.jpg", title: "人生如逆旅，我亦是行人", desc: "词的上片写与友人久别重逢。元祐初年，苏轼朝为起居舍人，钱穆父为中书舍人..." }, { authorimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555480439117&di=59c04d4d6655c9f8837bca52bbf2225f&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F1104%2F5714BD3F041943E254246661D20ED5F913AC462B_size199_w640_h640.jpeg", authorname: "小米", articleimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597729891,1907107295&fm=26&gp=0.jpg", title: "人生如逆旅，我亦是行人", desc: "词的上片写与友人久别重逢。元祐初年，苏轼朝为起居舍人，钱穆父为中书舍人..." }, { authorimg: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1555480439117&di=59c04d4d6655c9f8837bca52bbf2225f&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F1104%2F5714BD3F041943E254246661D20ED5F913AC462B_size199_w640_h640.jpeg", authorname: "苏轼", articleimg: "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1597729891,1907107295&fm=26&gp=0.jpg", title: "人生如逆旅，我亦是行人", desc: "词的上片写与友人久别重逢。元祐初年，苏轼朝为起居舍人，钱穆父为中书舍人..." }]


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("接收到：" + options.name)
    console.log("接收到：" + options.age1)
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