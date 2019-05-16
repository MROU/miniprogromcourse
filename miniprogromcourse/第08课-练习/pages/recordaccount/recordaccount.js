
const network = require("../../utils/network");
const util = require("../../utils/util");
const qiniuUploader = require("../../utils/qiniuUploader");
var app = getApp();
Page({
  /**
   * 页面的初始数据
   */
  data: {
    token:"",
    storeCode:"",
    storename:"",
    total:0,
    date:"",
    time:"",
    milltime:0,
    index:0,
    array: ['代收款', '代付款'],
    storearray:[],
    selindex:0,
    storeslecode: "",
    storeSelName:"请选择",
    imageObject: [],
    ispic:false,
    qiniutoken:"",
    urlimg:"",
    paysum:"",
    remarks:""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var riqi = util.formatTimeYear(new Date())
    var hour = util.formatTimeHour(new Date())
    var oldTime = (new Date()).getTime(); //得到毫秒数 
    that.setData({
      date: riqi,
      time: hour,
      milltime: oldTime
    });
    try {
      var value = wx.getStorageSync('token')
      if (value) {
        // Do something with return value
        that.setData({
          token: value,
          storeCode: options.storeCode
        }); 
      }
    } catch (e) {
      // Do something when catch error
    }

  },
  getQiNiuToken: function(){
    var that = this
    //得到详情
    wx.request({
      url: app.globalData.host + RECORDACCOUNT_INTERFACE_GETTOKEN,
      data:{
      },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded', // 默认值
        'token': that.data.token//默认值
      },
      success: function (res) {
        if (res.data.code == '0000'){
          that.setData({
            qiniutoken: res.data.data.token
          });
          if (that.data.imageObject.length>0){
            that.uploadImg()
          }else{
            that.commitData();
          }
          
        }
      }
    })
  },
  /**
      * 监听普通picker选择器
      */
  listenerPickerSelected: function (e) {
    //改变index值，通过setData()方法重绘界面
    var that = this
    this.setData({
      index: e.detail.value
    });
  }, 
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    var that = this
    var oldTime = (new Date(e.detail.value + " " + that.data.time)).getTime(); //得到毫秒数 
    this.setData({
      date: e.detail.value,
      milltime: oldTime
    })
  },  
  preImg: function () {
    var that = this
    wx.previewImage({
      current: '', //当前显示图片的http链接
      urls: that.data.imageObject //需要预览的图片http链接列表
    })
  },
  didPressChooesImage: function () {
    var that = this
    // this.initQiniu();
    //微信 API 选文件
    wx.chooseImage({
      count: 1,
      success: function (res) {
        that.setData({
          ispic: true,
          imageObject: res.tempFilePaths
        })
      }
    })
  },
  /**
   * 监听普通picker选择器
   */
  listenerStorePickerSelected: function (e) {
    var that = this
    that.setData({
      selindex: e.detail.value,
      storeslecode: that.data.storearray[e.detail.value].code,
      storeSelName: that.data.storearray[e.detail.value].name
    });
  }, 
 

  bindTimeChange: function (e) {
    var that = this
    var oldTime = (new Date(that.data.date + " " + e.detail.value)).getTime(); //得到毫秒数 
    this.setData({
      time: e.detail.value,
      milltime: oldTime
    })
  },
 


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '记账'
    })
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
 
  commitRecordData: function (e) {
    var that = this
    console.log(e.detail.value.paysum)
    console.log(that.data.total)
    if (e.detail.value.paysum.length == 0) {
      wx.showModal({
        title: '请填写金额',
        showCancel: false
      })
      return;
    } else if (that.data.storeslecode.length == 0) {
      wx.showModal({
        title: '请选择门店',
        showCancel: false
      })
      return;
    }

    
    wx.showModal({
      title: '提示',
      content: '确认填写数据无误，提交后无法更改',
      showCancel: true,
      success: function (res) {
        if (res.confirm) {
          that.setData({
            paysum: e.detail.value.paysum,
            remarks: e.detail.value.remarks
          })
          that.getQiNiuToken()
        } else if (res.cancel){
          console.log('用户点击取消')
        }
      }
    })
  },
  uploadImg:function(){
      var that=this
      var filePath = that.data.imageObject[0];
      var timestamp = new Date().getTime();
      var imgName = timestamp + "_"+filePath.substr(30, 4);
      //交给七牛上传
      qiniuUploader.upload(filePath, (res) => {
        that.setData({
          urlimg: res.imageURL
        })
        that.commitData();
      }, (error) => {
        console.error('error: ' + JSON.stringify(error));
      }
        , {
          region: 'NCN', // 华北区
          // uptokenURL: 'https://upload-z1.qiniu.com',
          uptoken: that.data.qiniutoken,
          domain: 'https://fykz.menpad.cn',
          key: 'img_' + imgName
        }
      );
    
    // that.uploadImgAndText();
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },
  commitData:function(){
    var that=this
    // 写入参数
    var params = new Object()
    params.storeCode = that.data.storeslecode
    params.changeAmount = that.data.paysum
    params.payType = "1"
    // 2 代收款 3 代付款
    if (that.data.index == 0) {
      params.payTarget = "2"
    } else if (that.data.index == 1) {
      params.payTarget = "3"
    }
    params.remarks = that.data.remarks
    params.receiptTime = that.data.milltime
    params.receiptImageUrl = that.data.urlimg
    //发起请求
    network.POST(app.globalData.host + RECORDACCOUNT_INTERFACE_SAVE, that.data.token,
      {
        params: params,
        success: function (res) {
          //success
          if (res.data.code == '0000') {
            wx.showModal({
              title: '提示',
              content: '提交成功',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  wx.navigateBack();
                } else if (res.cancel) {
                  console.log('用户点击取消')
                }
              }
            })
          } else {
            wx.showModal({
              title: '提示',
              content: res.data.msg,
              showCancel: false,
              success: function (res) {

              }
            })
          }
        },
        fail: function () {
          //失败后的逻辑

        },
        complete: function () {

        }
      })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})