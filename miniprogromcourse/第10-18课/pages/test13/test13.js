Page({
  data: {
    imgUrls:[
      'http://0img.hitv.com/preview/sp_images/2017/zongyi/318221/4127813/20171007213207255.jpg',
      'http://4img.mgtv.com/preview/cms_icon/2017/07/20170708201844963.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots:true,
    autoplay: false,
    interval: 2000,
    duration: 1000,
    indicatorColor: "white",//滑动圆点颜色  
    indicatorActiveColor: "blue", //当前圆点颜色  
    bg:"",
    markers: [{
      iconPath: "../images/bycle.png",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      callout: {
        content: "我是小乐狗，派单去啦",
        color: "#ff0000",
        fontSize: "16",
        borderRadius: "20",
        bgColor: "#ffffff",
        padding: "20",
        display: "BYCLICK"
      }
    }, {
        iconPath: "../images/dog.png",
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      callout: {
        content: "我是小乐狗，派单去啦",
        color: "#ff0000",
        fontSize: "16",
        borderRadius: "20",
        bgColor: "#ffffff",
        padding: "20",
        display: "BYCLICK"
      }
    }],
    controls: [{
      id: 1,
      iconPath: '../images/dog.png',
      position:{
        left: 10,
        top:  50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
    wx.navigateTo({
      url: '../test12/test12',
    })
  },
  controltap(e) {
    console.log(e.controlId)
  },
  changeIndicatorDots: function (e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeSwiper: function (e) {
    var that = this;
    var index = e.detail.current;
    that.setData({
      bg: that.data.imgUrls[index]
    })
  },
  changeAutoplay: function (e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange: function (e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange: function (e) {
    this.setData({
      duration: e.detail.value
    })
  }
})