const qiniuUploader = require("../../utils/qiniuUploader");
const util = require("../../utils/util");
const network = require("../../utils/network");
var app = getApp();
var imglist = [];
Page({
  data: {
    ispic: false,
    qiniutoken:'',
    userNote:'',
    installStatus:'',
    token:'',
    // text:"这是一个页面"
    array: [],
    storecode:'',
    time: '',
    rvalue:0,
    milltime:0,
    index:0,
    pindex:0,
    addr:"点击选择",
    date: '请选择时间',
    province: ['北京市', '天津市', '上海市', '重庆市', '河北省', '山西省', '辽宁省', '吉林省', '黑龙江省', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '海南省', '四川省', '贵州省', '云南省', '陕西省', '甘肃省', '青海省', '台湾省', '内蒙古自治区', '广西壮族自治区', '西藏自治区', '宁夏回族自治区', '新疆维吾尔自治区', '香港特别行政区', '澳门特别行政区']
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '新建'
    })
  },
  onLoad: function (options){
    var that = this;
    that.data.installSn = options.installSn
    var riqi = util.formatTimeYear(new Date())
    var hour = util.formatTimeHour(new Date())
    var oldTime = (new Date()).getTime(); //得到毫秒数 

    that.setData({
      date: riqi,
      time: hour,
      milltime:oldTime
    });
  },
  bindTimeChange: function (e) {
    var that = this
    console.log("时间1：" + that.data.date + " " + e.detail.value)
    var oldTime = (new Date(that.data.date + " " + e.detail.value)).getTime(); //得到毫秒数 
    this.setData({
      time: e.detail.value,
      milltime: oldTime
    })
  },
  onShow: function () {
    var that = this;
    try {
      var value = wx.getStorageSync('token')
      var addr = wx.getStorageSync('addr')

      if (value) {
        // Do something with return value
        that.setData({
          token: value,
          addr: addr
        });
        //加载详
        that.getStoreList();
      }
    } catch (e) {
      // Do something when catch error
    }
  },

  onHide: function () {
    var that=this
    try {
      wx.setStorageSync('addr', "选择地址")
    } catch (e) {
    }
  },
  /**
   * 监听checkbox事件
   */
  listenCheckboxChange:function (e){
    var that = this
    //打印对象包含的详细信息
    that.setData({
      installPerson: e.detail.value
    });
  },
  //  点击日期组件确定事件  
  bindDateChange: function (e) {
    var that = this
    console.log("时间：" + e.detail.value + " " + that.data.time)
    var oldTime = (new Date(e.detail.value + " " + that.data.time)).getTime(); //得到毫秒数 
    this.setData({
      date: e.detail.value,
      milltime: oldTime
    })
  },  
  /**
   * 监听普通picker选择器
   */
  listenerPickerSelected: function (e) {
    var that = this
    that.setData({
      index: e.detail.value,
      storecode: that.data.array[e.detail.value].code
    });
  }, 
  toAddrSelect:function () {
    var that = this;  
    wx.navigateTo({
      url: "/pages/selectpoiaddr/selectpoiaddr",
    }) 
  },
  dispatchPerson: function () {
    //获取Token
    var that = this;
    if (that.data.installPerson.length==0){
      wx.showModal({
        title: '提示',
        content: '请选择您需要指派的安装师傅',
        showCancel: false
      })
    } else if (that.data.index == 0){
      wx.showModal({
        title: '提示',
        content: '请选择您需要指派的送货师傅',
        showCancel: false
      })     
    } else if (that.data.index == 0) {
      wx.showModal({
        title: '提示',
        content: '请选择您需要指派的送货师傅',
        showCancel: false
      })
    }
  },
  /**
   * 点击radio切换
   */
  swiperChange: function(e){
    var that = this;
    var radioValue = e.detail.value;
    that.setData({
      rvalue: radioValue
    })
  },  

  /**
   * 监听普通picker选择器
   */
  listenerProvincePickerSelected: function (e) {
    var that = this
    //改变index值，通过setData()方法重绘界面
    this.setData({
      pindex: e.detail.value
    });
    
  }, 
  getStoreList: function () {
    var that = this
    // 写入参数
    var params = new Object()
    //发起请求
    network.POST(app.globalData.host + '/api/store/getList',that.data.token,
      {
        params: params,
        success: function (res) {
          //success
          if (res.data.code == '0000') {
            var temparr = [];
            temparr.push({ "code": "000000", "name": "请选择门店名称" });
            for (let i = 0; i < res.data.data.length; i++) {
              temparr.push(res.data.data[i]);
            }
            that.setData({
              array: temparr
            });
          } else if (res.data.code == '0011') {
            //去绑定 0011 有token但是没有绑定上 由于操作将手机删除，token还在缓存中
            that.checkUser();
            return;
          }
        },
        fail: function () {
          //失败后的逻辑

        },
        complete: function () {
        
        }
      })
  },
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '门派',
      path: 'pages/detail/detail?installSn=' + that.data.installSn,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  checkUser: function () {
    var that = this;
    wx.showModal({
      title: '提示',
      content: '请先绑定手机号',
      showCancel: false,
      success: function (res) {
        if (res.confirm) {
          wx.navigateTo({
            url: "/pages/bindphone/bindphone"
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  preImg: function() {
    var that=this
    wx.previewImage({
      current: '', //当前显示图片的http链接
      urls: that.data.imageObject //需要预览的图片http链接列表
    })
  },
  commitBuildData:function(e){
    var that = this;
    if (that.data.index == 0){
      wx.showModal({
        title: '提示',
        content: '请选择门店名称',
        showCancel: false
      })
      return;
    } else if (that.data.date == '请选择时间'){
      wx.showModal({
        title: '提示',
        content: '请选择安装时间',
        showCancel: false
      })
      return;
    } else if (e.detail.value.ordernum.length == 0) {
      wx.showModal({
        title: '提示',
        content: '请填写门店安装单号',
        showCancel: false
      })
      return;
    } else if (e.detail.value.ordercontent.length == 0) {
      wx.showModal({
        title: '请填写安装内容',
        showCancel: false
      })
      return;
    }else if (e.detail.value.wujincontent.length == 0) {
      wx.showModal({
        title: '请填写五金信息',
        showCancel: false
      })
      return;
    }else if (e.detail.value.tihuocontent.length == 0){
      wx.showModal({
        title: '请填写提货信息',
        showCancel: false
      })
      return;
    } else if (e.detail.value.daishoukuancontent.length==0){
      wx.showModal({
        title: '请填写代收款金额',
        showCancel: false
      })
      return;
    } else if (that.data.rvalue == 0) {
      wx.showModal({
        title: '请选择性别(男或女)',
        showCancel: false
      })
      return;
    } else if (e.detail.value.username.length == 0) {
      wx.showModal({
        title: '请填写客户姓名',
        showCancel: false
      })
      return;
    } else if (e.detail.value.userphone.length == 0) {
      wx.showModal({
        title: '请填写客户电话',
        showCancel: false
      })
      return;
    } else if (e.detail.value.useraddress.length == 0) {
      wx.showModal({
        title: '请填写客户地址',
        showCancel: false
      })
      return;
    }

    wx.showModal({
      title: '提示',
      content: '已核实您的新建信息，是否确认创建',
      showCancel: true,
      success: function (res){
        if (res.confirm){
          wx.showLoading({
            title: '提交中',
          })
          var buildtime = that.data.milltime;
          var str = util.formatTime(new Date(buildtime));

          //提交调度操作
          that.commitOrder(e.detail.value.ordernum, e.detail.value.ordercontent, e.detail.value.userphone, e.detail.value.useraddress, e.detail.value.username, that.data.rvalue, buildtime, that.data.storecode, e.detail.value.daishoukuancontent, e.detail.value.wujincontent, e.detail.value.tihuocontent);
        }else if (res.cancel){
             
        }
      }
    })
  },
  //提交函数
  commitOrder: function (ordernum, ordercontent, orderCustomerPhone, orderCustomerAddress, orderCustomeName, orderCustomerGender, orderEstimateTime, orderStoreCode, orderReplaceReceipt, orderHardware, orderTakeDeliveryInfo){
      var that=this
      var addr = that.data.province[that.data.pindex] + orderCustomerAddress
      // 写入参数
      var params = new Object()
      params.installThirdSn = ordernum
      params.installNote = ordercontent
      params.customerPhone = orderCustomerPhone
      params.customerAddress = addr
      params.customerName = orderCustomeName
      params.customerGender = orderCustomerGender
      params.estimateTime = orderEstimateTime
      params.storeCode = orderStoreCode
      params.replaceReceipt = orderReplaceReceipt
      params.hardware = orderHardware
      params.takeDeliveryInfo = orderTakeDeliveryInfo

      //发起请求
      network.POST(app.globalData.host + '/api/order/save', that.data.token,
        {
          params: params,
          success: function (res) {
            //success
            wx.hideLoading();
            if (res.data.code == '0000') {
              wx.showModal({
                title: '提示',
                content: '提交成功',
                showCancel: false,
                success: function (res) {
                  if (res.confirm) {
                    wx.switchTab({
                      url: '../index/index'
                    })
                  } else if (res.cancel) {
                    console.log('用户点击取消')
                  }
                }
              })
            } else {
              wx.showModal({
                title: '提示',
                content: '提交失败',
                showCancel: true
              })
            }
          },
          fail: function () {
            //失败后的逻辑

          },
          complete: function () {
          
          }
        })
  }
});


