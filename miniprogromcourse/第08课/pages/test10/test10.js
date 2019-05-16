const util = require("../../utils/util");
const  WxParse = require('../../wxParse/wxParse.js');
//index.js
//获取应用实例
const app = getApp()//index.js
var animationShowHeight = 300; 
var monitorInterval=null
Page({
  data:{
    motto:'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    showModalStatus:false,
    showDialogStatus:false,
    animationData:{},
    animationBottomData:{},
    playstatus:false,
    showtimestatus:false,
    opacityAnimationData:{},
    animationDialogData:{},
    menus: [{ mimg: "../images/night-style.png", mname: "夜间模式" }, { mimg: "../images/font.png", mname: "一键大字" }, { mimg: "../images/update-style.png", mname: "置顶音频" }],
    boxmenus: [{ boxmimg: "../images/elephant.png", boxmname: "大象" }, { boxmimg: "../images/lion.png", boxmname: "狮子" }, { boxmimg: "../images/chicken.png", boxmname: "母鸡" }, { boxmimg: "../images/dog.png", boxmname: "狗" }, { boxmimg: "../images/cat.png", boxmname: "猫" }, { boxmimg: "../images/goat.png", boxmname: "羊" }, { boxmimg: "../images/duck.png", boxmname: "鸭子" }, { boxmimg: "../images/pig.png", boxmname: "猪猪" }, { boxmimg: "../images/frog.png", boxmname: "青蛙" }],
    headerimgs: ["../images/elephant_white.png", "../images/lion_white.png", "../images/chicken_header.png", "../images/dog_white.png", "../images/cat_white.png", "../images/goat_white.png", "../images/duck_white.png", "../images/pig_white.png", "../images/frog_white.png"],
    headernames: ["大象的声音", "狮子的声音", "母鸡的声音", "狗子的声音", "猫儿的声音", "山羊的声音", "鸭子的声音", "猪猪的声音", "青蛙的声音"],
    musicurl: ["http://www.startplan.cn/music/elephant.mp3", "http://www.startplan.cn/music/lion.mp3","http://www.startplan.cn/music/chicken_voice.mp3",""],
    animationShowHeight:300,
    pointarray: ["5", "10", "15", "30", "∞"],
    selindex:2,
    classstr:"circle",
    classstrhover: "circlehover",
    mp3url:"",
    title:"",
    minute:"15",
    second:"00",
    mtime:15,
    himgurl:"../images/elephant_white.png",
    imgindex:0,
    bgstyle:"background-image:url(http://www.startplan.cn/img/wave_bg.png);",
    flag:true,
    fontstyle:"font-size:30rpx",
    fontflag:true
  },
  countTime: function (year, month, day, hour, mintue, second){
    var that=this
    var leftTime = (new Date(year, month, day, hour, mintue, second).getTime()) - (new Date().getTime()); //计算剩余的毫秒数 
    if (leftTime==0){
      clearInterval()
    }
    var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);//计算剩余的分钟 
    var seconds = parseInt(leftTime / 1000 % 60, 10);//计算剩余的秒数 
     minutes = that.checkTime(minutes);
     seconds = that.checkTime(seconds);
     that.setData({
       minute: minutes,
       second: seconds
     })
  },
  /**页面的初始数据*/
  onShareAppMessage: function (res){
    if (res.from === 'button') {
      //来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '小声音',
      path: 'pages/test10/test10',
      desc: '和宝宝一起认识各种小动物的声音',
      success: function (res) {
        //转发成功
      },
      fail: function (res) {
        //转发失败
      }
    }
  },
  selectImgHeader:function(e){
    var that=this
      that.setData({
        imgindex: e.currentTarget.dataset.id,
        mp3url: that.data.musicurl[e.currentTarget.dataset.id],
        minute: that.data.mtime,
        second: "00"
      }) 
  },
  listenerButtonPlay: function () {
    var that=this
    wx.playBackgroundAudio({
      //播放地址
      dataUrl: that.data.mp3url,
      //title 音乐名字
      title: that.data.title,
      //图片地址
      coverImgUrl: ''
    })
  },

  /**
   * 播放状态
   */
  listenerButtonGetPlayState: function (){
    wx.getBackgroundAudioPlayerState({
      success: function (res){
        console.log(res.status)
        //duration 总时长
        //currentPosition 当前播放位置
        //status 播放状态
        //downloadPercent 下载状况 100 即为100%
        //dataUrl 当前播放音乐地址
      }
    })
  },
  /**
   * 监听button暂停按钮
   */
  listenerButtonPause: function () {
    wx.pauseBackgroundAudio();
  },
  selectMenu:function(e){
    var that=this
    if (0 == e.currentTarget.dataset.id){
      var newmenu = that.data.menus
     
      if (that.data.flag){
        newmenu[0].mimg = "../images/day-night.png"
        newmenu[0].mname = "日间模式"
        that.setData({
          menus: newmenu,
          bgstyle: "background-image:url(http://www.startplan.cn/img/wave_bg_night.png);",
          flag: false
        })
     
    
      }else{
        newmenu[0].mimg = "../images/night-style.png"
        newmenu[0].mname = "夜间模式"
        that.setData({
          menus: newmenu,
          bgstyle: "background-image:url(http://www.startplan.cn/img/wave_bg.png);",
          flag: true
        })
       
      }
    } else if (1 == e.currentTarget.dataset.id){
        //一键大字
      var newmenu = that.data.menus
      console.log("hh:" + e.currentTarget.dataset.id)
      if (that.data.fontflag){
        newmenu[1].mimg = "../images/font.png"
        newmenu[1].mname = "默认字体"
        that.setData({
          menus: newmenu,
          fontflag: false,
          fontstyle: "font-size: 44rpx"
        })
      }else{
        newmenu[1].mimg = "../images/font.png"
        newmenu[1].mname = "一键大字"
        that.setData({
          menus: newmenu,
          fontflag: true,
          fontstyle: "font-size: 30rpx"
        })
  
      }
    } else if (2 == e.currentTarget.dataset.id){
       //置顶音频
      wx.setTopBarText({
        text: that.data.headernames[that.data.imgindex]
      })
    }
  },
  selectActive: function (event) {
    var that=this
    that.setData({
      selindex: event.currentTarget.dataset.num,
    })
    var minutestr=""
    var secondstr=""
    var m=15
    if (0 == event.currentTarget.dataset.num){
      minutestr="05"
      m=5
      secondstr="00"
    } else if (1 == event.currentTarget.dataset.num){
      minutestr = "10"
      m=10
      secondstr = "00"
    } else if (2 == event.currentTarget.dataset.num) {
      minutestr = "15"
      m=15
      secondstr = "00"
    } else if (3 == event.currentTarget.dataset.num) {
      minutestr = "30"
      m=30
      secondstr = "00"
    } else if (4== event.currentTarget.dataset.num) {
      minutestr = "~"
      secondstr = "00"
    }
    that.setData({
      minute: minutestr,
      second: secondstr,
      mtime:m
    })
  },
  /**
   * 设置进度
   */
  listenerButtonSeek: function () {
    wx.seekBackgroundAudio({
      position: 30
    })
  },
  /**
   *停止播放 
   */
  listenerButtonStop: function () { 
    wx.stopBackgroundAudio()
  },
  checkTime:function(i){ //将0-9的数字前面加上0，例1变为01 
     if (i < 10)  {
        i = "0" + i;
     }
     return i;
  }, 
  showTime: function () {
    var that=this
    that.setData({
      showtimestatus:true
    })
    that.hideBottomModel()
    that.opacityShowAnimation()
  },

  hideTime: function () {
    var that = this
    that.setData({
      showtimestatus: false
    })

    that.showBottomModel()
    that.opacityHideAnimation()
  },
    
  //消息提示框
  showHint:function(){
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
  },
  //模态弹窗
  showModel: function () {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      showCancel:true,
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  //加载弹窗
  showLoading: function () {
    wx.showLoading({
      title: '加载中',
    })
    
    //显示2秒
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  //操作菜单
  showMenu: function () {
    wx.showActionSheet({
      itemList: ['第一关', '第二关', '第三关'],
      success: function (res) {
        console.log(res.tapIndex)
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  },
  showDialog:function() {
      
  },
  //自定义动画弹框
  showActionModel: function () {
    var that=this
    var animation = wx.createAnimation({
      duration: 500,
      timingFunction: 'ease',
    })

    this.animation = animation

    animation.translateY(100).opacity(0).step()

    this.setData({
      animationData: animation.export(),
      showModalStatus: true 
    })

    setTimeout(function () {
      animation.translateY(0).opacity(1).step()
      that.setData({
        animationData: animation.export()
      })
    }, 200)

  },

  hideActionModel: function (){
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(0).opacity(1).step()
    this.setData({
      animationData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(100).opacity(0).step()
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 200)     
  },
  opacityShowAnimation:function(){
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.opacity(1).step()
    this.setData({
      opacityAnimationData: animation.export()
    })
    //显示2秒
    setTimeout(function () {
      animation.opacity(1).step()
    }, 2000)
  },
  opacityHideAnimation: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.opacity(0).step()
    this.setData({
      opacityAnimationData: animation.export()
    })
  },
  hideBottomModel: function () {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(15).opacity(1).step()
    this.setData({
      animationBottomData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(15).opacity(1).step()
      this.setData({
        animationBottomData: animation.export()
      })
    }.bind(this), 200)
  },
  
  showBottomModel: function () {
    // 隐藏遮罩层  
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation;
    animation.translateY(0).opacity(1).step()
    this.setData({
      animationBottomData: animation.export(),
    })
    setTimeout(function () {
      animation.translateY(0).opacity(1).step()
      this.setData({
        animationBottomData: animation.export()
      })
    }.bind(this), 200)
  },

  //自定义动画弹框
  showDialogModel: function () {
    var that = this
    var animation = wx.createAnimation({
      duration: 800,
      timingFunction: 'ease-out',
    })

    this.animation = animation
    animation.opacity(0.5).translateY(0).step()
    this.setData({
      animationDialogData: animation.export(),
      showDialogStatus: true
    })

    setTimeout(function () {
      animation.translateY(-animationShowHeight * 0.25).opacity(1).step()
      that.setData({
        animationDialogData: animation.export()
      })
    }, 200)
  },

  hideDialogModel: function () {
    var that = this
    // var animation = wx.createAnimation({
    //   duration:2000,
    //   timingFunction: 'ease-out',
    // })

    // this.animation = animation
    // animation.opacity(1).translateY(-animationShowHeight * 0.25).step()

    // that.setData({
    //   animationDialogData: animation.export(),
    //   showDialogStatus: true
    // })

    that.setData({
      showDialogStatus: false
    })
    // setTimeout(function () {
    //   animation.translateY(animationShowHeight).opacity(0).step()
    //   that.setData({
    //     animationDialogData: animation.export()
    //   })
    // }, 500)

  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '小声音'
    })
  },
  onLoad:function(){
     var that=this
     that.setData({
       mp3url: 'http://www.startplan.cn/music/elephant.mp3',
       //title 音乐名字
       title: '大象的声音'
     })
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
     });
     
     wx.onBackgroundAudioPlay(function () {
       console.log('onBackgroundAudioPlay')
       var year = new Date().getFullYear()
       var month = new Date().getMonth() + 1
       var day = new Date().getDay()
       var hour = new Date().getHours()
       var mintue = new Date().getMinutes() + parseInt(that.data.minute, 10);
       var second = new Date().getSeconds() + parseInt(that.data.second, 10);
       monitorInterval = setInterval(function () {
         that.countTime(year, month, day, hour, mintue, second)
       }, 1000); 
       that.setData({
         playstatus:true
       })
     })

     /**
      * 监听音乐暂停
      */
     wx.onBackgroundAudioPause(function () {
       console.log('onBackgroundAudioPause')
       if (monitorInterval) {
         clearInterval(monitorInterval)
         monitorInterval = null
       } 
       that.setData({
         playstatus: false
       })
     })

     /**
      * 监听音乐停止
      */
     wx.onBackgroundAudioStop(function () {
       console.log('onBackgroundAudioStop')
       if (monitorInterval) {
         clearInterval(monitorInterval)
         monitorInterval = null
       } 
       that.setData({
         minute: that.data.mtime,
         second: "00",
         playstatus: false
       })
     })
  },

  onShow:function(){
    var that=this
    wx.getSystemInfo({
      success: function (res) {
        animationShowHeight = res.windowHeight;  
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
