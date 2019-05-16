var requestHandler = {
    params:{},
    success: function(res){
        // success
    },
    fail: function() {
        // fail
    },
    complete: function () {
      // complete
    }
}

//GET请求
function GET(requestHandler) {
    request('GET',requestHandler)
}
//POST请求
function POST(url,token,requestHandler) {
  request(url, 'POST',token,requestHandler)
}

function request(url,method,token,requestHandler) {
    //注意：可以对params加密等处理
    var params = requestHandler.params;

    wx.request({
      url: url,
      data: params,
      method: method, // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
       header: {
         'content-type': 'application/x-www-form-urlencoded'//默认值
       }, // 设置请求的 header
      success: function(res){
        //注意：可以对参数解密等处理
        requestHandler.success(res)
      },
      fail: function() {
        requestHandler.fail()
      },
      complete: function() {
        // complete
        requestHandler.complete()
      }
    })
}

module.exports = {
  GET: GET,
  POST: POST
}

