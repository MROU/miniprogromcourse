// pages/sixteen/sixteen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  bindIf: function (e) {
     var a="123456789"
     if(a.length>9){
        console.log("当a的字符长度大于9就输出")
     }
  },
  bindIfElse: function (e) {
    var a = "123456789"
    if (a.length > 9) {
      console.log("当a的字符长度大于9就输出")
    }else{
      console.log("当a的字符长度不大于9就输出")
    }
  },
  bindFor: function (e) {
    for (var i = 0; i < 9; i++) {
      console.log(i);
    }
  },
  bindForOne: function (e) {
    var arr=["hello","every","one"];
    for (var i = 0; i < arr.length; i++) {
       console.log(arr[i]);
    }
  },
  bindForTwo: function (e) {
    var data = { code: 10000, list: [{ name: "xiaomai", age: 18 }, { name: "xiaoming", age: 19}]}
    if (data!=null){
      for (var i = 0; i < data.list.length; i++) {
        console.log("name:" + data.list[i].name+"   age:"  + data.list[i].age);
      }
    }
  },
  bindMath: function (e) {
    //求绝对值 
    var a=Math.abs(-10)
    //求平方根
    var b = Math.sqrt(16)
    //四舍五入
    var c = Math.round(10.6)
    //0~1之间的随机数
    var d = Math.random()
    console.log("a="+a)
    console.log("b="+b)
    console.log("c="+c)
    console.log("d="+d)
  },
  bindDate:function(){
    var date=new Date()
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var week = date.getDay()
    console.log(year+"年:"+month+"月:"+day+"日"+hour+"时"+minute+"分"+second+"("+week+")")
    
    // var date1 = new Date("2018/08/08 05:13:14");
    // var date2 = new Date(1555834512000);

  },
  bindString: function () {
    var a="hello,everyone"
    console.log("length:"+a.length)
    //	提取字符串中两个指定的索引号之间的字符
    var b=a.substring(0, 4);
    console.log("b:" + b)
    //split() 方法用于把一个字符串分割成字符串数组
    var c = a.split(",");
  console.log("c数组的长度：" + c.length + "-----c数组中的第一个元素：" + c[0] +"-----c数组中的第二个元素："+c[1])
    //用于在字符串中用一些字符替换另一些字符
    var d = a.replace(",","/")
    console.log("d:" + d)
    //返回某个指定的字符串值在字符串中首次出现的位置
    var e=a.indexOf("one");
    console.log("e:" + e)
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