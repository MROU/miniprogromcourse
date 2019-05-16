// pages/reportfrom/reportfrom.js
import {
  EXPENSEACCOUNT_INTERFACE_GETUSER
} from '../../utils/constants.js'
const util = require("../../utils/util");
var wxCharts = require('../../utils/wxcharts.js');
const network = require("../../utils/network");
var app = getApp();
var lineChart = null;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    timeday:false,
    weekday: false,
    monthday: false,
    date:"",
    milltime:0,
    begindate:"",
    persons: [],
    nameStr: "",
    uphone: ""
  },
  listenerNamePickerSelected: function (e) {
    var that = this
    that.setData({
      selindex: e.detail.value,
      uphone: that.data.persons[e.detail.value].phone,
      nameStr: that.data.persons[e.detail.value].name
    });
    //加载数据
   // that.getOrderList(app.globalData.host + ACCOUNTBOOKS_INTERFACE);
  }, 
  touchHandler: function (e) {
    lineChart.showToolTip(e, {
      // background: '#7cb5ec',
      format: function (item, category) {
        return category + ' ' + item.name + ':' + item.data
      }
    });
  }, 


 
  
  createSimulationData:function () {

    var that = this
    var params = new Object()
    //1 年 2 月 3 日
    params.dateType ="1"
    params.startTime = "1"
    params.endTime = "1"
    //发起请求
    network.POST(app.globalData.host + "/api/report/finance", that.data.token,
      {
        params: params,
        success: function (res) {
          if (res.data.code == '0000') {
            var categories = [];
            var data = [];
            for (var i = 0; i < res.data.data.length; i++) {
              categories.push(res.data.data[i].reportTime);
              data.push(res.data.data[i].amount);
            }
            // data[4] = null;
            return {
              categories: categories,
              data: data
            } 
          } else {
            wx.showModal({
              title: res.data.msg,
              showCancel: false
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
  updateData:function(){
    var simulationData = this.createSimulationData();
    var series = [{
      name: '成交量1',
      data: simulationData.data,
      format: function (val, name) {
        return val.toFixed(2) + '万';
      }
    }];
    lineChart.updateData({
      categories: simulationData.categories,
      series: series
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:function(options){
    var that=this
    var endriqi = util.formatSimpleTime(new Date())
    var beginriqi = util.formatSimpleTime(new Date(that.getDateStr(-30)))
    var oldTime = (new Date()).getTime(); //得到毫秒数 
    that.setData({
      date: endriqi,
      begindate: beginriqi,
      milltime: oldTime
    });

    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }

    //获取报销人数据
    that.getPersons();

    var simulationData = this.createSimulationData();
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: simulationData.categories,
      animation: true,
      // background: '#f5f5f5',
      series: [{
        name: '报销日期',
        data: simulationData.data,
        format: function (val, name) {
          return val.toFixed(2) + '万';
        }
      }],
      xAxis: {
        disableGrid: true
      },
      yAxis: {
        title: '报销金额 (元)',
        format: function (val) {
          return val.toFixed(2);
        },
        min: 0
      },
      width: windowWidth,
      height: 200,
      dataLabel: false,
      dataPointShape: true,
      extra: {
        lineStyle: 'curve'
      }
    });
  },
  getDateStr:function(addDayCount){
    var dd = new Date();
    dd.setDate(dd.getDate() + addDayCount);//获取AddDayCount天后的日期  
    var y = dd.getFullYear();
    var m = (dd.getMonth() + 1) < 10 ? "0" + (dd.getMonth() + 1) : (dd.getMonth() + 1);//获取当前月份的日期，不足10补0  
    var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();//获取当前几号，不足10补0  
    return y + "-" + m + "-" + d; 
  },
  //  点击日期组件确定事件  
  beginTime:function (e){
    var that = this
    var simpledate = util.formatSimpleTime(new Date(e.detail.value))
    var oldTime = (new Date(simpledate + " " + that.data.time)).getTime(); //得到毫秒数 
    that.setData({
      date: simpledate,
      milltime: oldTime
    })
  },
  endTime: function (e) {
    var that = this
    var simpledate = util.formatSimpleTime(new Date(e.detail.value))
    var oldTime = (new Date(simpledate + " " + that.data.time)).getTime(); //得到毫秒数
    that.setData({
      date: simpledate,
      milltime: oldTime
    })
  },
  slectTimeDay:function(){
      var that=this
      if (that.data.timeday){
        that.setData({
           timeday: false
        })
      }else{
        that.setData({
            timeday: true,
            weekday: false,
            monthday: false
        })
      }
  },

  slectTimeWeek: function () {
    var that = this
    if (that.data.weekday){
      that.setData({
        weekday: false
      })
    } else {
      that.setData({
        timeday: false,
        weekday: true,
        monthday: false
      })
    }
  },

  slectTimeMonth:function(){
    var that = this
    if (that.data.monthday){
      that.setData({
        monthday:false
      })
    }else{
      that.setData({
        timeday: false,
        weekday: false,
        monthday: true
      })
    }
  },
  getPersons: function () {
    var that = this
    var params = new Object()
    // params.src = that.data.src
    //发起请求
    network.POST(app.globalData.host + EXPENSEACCOUNT_INTERFACE_GETUSER, that.data.token,
      {
        params: params,
        success: function (res) {
          if (res.data.code == '0000') {
            that.setData({
              persons: res.data.data
            })
          } else {
            wx.showModal({
              title: res.data.msg,
              showCancel: false
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