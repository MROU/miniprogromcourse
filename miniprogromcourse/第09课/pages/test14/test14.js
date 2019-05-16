const date = new Date()
const years = []
const months = []
const days = []
for (let i = 2014; i <= 2024; i++){
   years.push(i)
}
//1、3、5、7、8、10、12月每月31天
//2月闰年29天, 不是闰年就是28天. 其他的月份就是三十天每月.
if (date.getMonth() == 0 || date.getMonth() == 2 || date.getMonth() == 4 || date.getMonth() == 6 || date.getMonth() == 7 || date.getMonth() == 9 || date.getMonth() == 11) {
  for (let i = 1; i <= 31; i++) {
    days.push(i)
  }
} else if (date.getMonth() == 3 || date.getMonth() == 5 || date.getMonth() == 8 || date.getMonth() == 10) {
  for (let i = 1; i <= 30; i++) {
    days.push(i)
  }
} else {
  if (date.getFullYear() % 4 == 0 && date.getFullYear() % 100 != 0) {
    console.log('输入的年份是闰年')
    for (let i = 1; i <= 29; i++) {
      days.push(i)
    }
  } else if (date.getFullYear() % 400 == 0) {
    console.log('输入的年份是闰年')
    for (let i = 1; i <= 29; i++){
      days.push(i)
    }
  }
  else {
    console.log('输入的年份不是闰年')
    for (let i = 1; i <= 28; i++) {
      days.push(i)
    }
  }
}

for (let i = 1; i <= 12; i++){
    months.push(i)
}

// pages/test14/test14.js
Page({
  /**
   * 页面的初始数据
   */
  data:{
    years: years,
    year: date.getFullYear(),
    months: months,
    month: 2,
    days: days,
    day: 2,
    showFlag: true,
    weeks: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
    weekvals: [1, 2, 3, 4, 5, 6, 7],
    week: date.getDay(),
    year: date.getFullYear(),
    value: [4, 0, 11, date.getDay()]
  },
  bindChange: function (e) {
    const val = e.detail.value
    var days = []
    var dateval = this.data.years[val[0]] + "/" + this.data.months[val[1]] + "/" + this.data.days[val[2]]
    var day = new Date(dateval).getDay()
    //1、3、5、7、8、10、12月每月31天
    //2月闰年29天, 不是闰年就是28天. 其他的月份就是三十天每月.
    console.log("m:" + val[1])
    if (val[1] == 0 || val[1] == 2 || val[1] == 4 || val[1] == 6 || val[1] == 7 || val[1] == 9 || val[1] == 11) {
      for (let i = 1; i <= 31; i++) {
        days.push(i)
      }
    } else if (val[1] == 3 || val[1] == 5 || val[1] == 8 || val[1] == 10) {
      for (let i = 1; i <= 30; i++) {
        days.push(i)
      }
    } else {
      if (this.data.years[val[0]] % 4 == 0 && this.data.years[val[0]] % 100 != 0) {
        console.log('输入的年份是闰年')
        for (let i = 1; i <= 29; i++) {
          days.push(i)
        }
      } else if (this.data.years[val[0]] % 400 == 0) {
        console.log('输入的年份是闰年')
        for (let i = 1; i <= 29; i++) {
          days.push(i)
        }
      }
      else {
        console.log('输入的年份不是闰年')
        for (let i = 1; i <= 28; i++) {
          days.push(i)
        }
      }
    }

    console.log("year:" + this.data.years[val[0]] + ":" + this.data.months[val[1]] + ":" + this.data.days[val[2]])
    this.setData({
      year: this.data.years[val[0]],
      month: this.data.months[val[1]],
      day: this.data.days[val[2]],
      week: day,
      days: days,
      value: [val[0], val[1], val[2], day]
    })
  },
  hideModal: function (){
    var that = this
    that.setData({
      showFlag: false
    })
  },
  selectTime:function () {
    var that = this
    var dateTime = that.data.year +"/"+that.data.month+"/"+that.data.day
    var time = new Date(dateTime).getTime()
    that.setData({
      showFlag: false
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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