const util = require("../../utils/util");
const  WxParse = require('../../wxParse/wxParse.js');
//index.js
//获取应用实例
const app = getApp()//index.js
Page({
  data:{
    motto: 'Hello World',
    userInfo:{},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    articles: { authimg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1512437530&di=d57274148c9872a69442c4a61940a8b7&imgtype=jpg&er=1&src=http%3A%2F%2Fww2.sinaimg.cn%2Flarge%2F85cccab3gw1etdfyy3lf1g20b4069e81.jpg', authName: '上海译文', isauth: true, articleimg: 'http://ppe.oss-cn-shenzhen.aliyuncs.com/palette/8293/1509946683146/thumb_Mon_Nov_06_2017.jpg', tag: 1, articledesc: "只有爱，才是终极哲学，才是我们活下去的理由", articlecontent: "过去一周，外面的世界纷扰不断，加之，又被胃和肠胃炎困扰，小编直接躺倒，可谓是...<image src='../images/auth.png' class='personauth'></image>", clicknum: 112, booknum: 2, likenum: 131, islike: true },
    content: ''
  },
  //事件处理函数
  bindViewTap:function(){
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '书评正文'
    })
  },
  onLoad:function(){
     var that=this
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
     var article = `
<div id="main" hh-in-viewport="" exited-view-callback="hhProposalMainCtrl.onSectionExited(direction,hhProposalMainCtrl.PROPOSAL_ANCHOR_OBJECT.MAIN)" enter-view-callback="hhProposalMainCtrl.onSectionEnter(direction,hhProposalMainCtrl.PROPOSAL_ANCHOR_OBJECT.MAIN)" class="ng-isolate-scope"><h4 class="heading"></h4><hh-summernote-view content="::hhProposalMainCtrl.courseItem.description" class="ng-isolate-scope"><p>投資人常常問：「哪一個股票可以買？」、「股價漲了，該不該賣掉？」、「股票跌了，該不該賣掉?」、「已經萬點了，還可不可以買股票？」投資應該要簡單，不要太多的煩惱，只要建立正確的投資觀念，就能做出成功的決定，同樣是上班族的你一定也能創造自己的被動收入。</p><p>這堂課程將由價值投資達人－林威岐教授，講師將分享自己如何一邊上班，一邊投資，創造千萬資產的投資經驗。這次將帶來比以往更豐富的課程內容，帶領大家從學習投資知識、挖掘好股票、計算合理股價，最後教你賣出股票的時機，由淺入深，讓沒有基礎的人都能上手。</p><p><img src="https://hahow.in/images/5a128a07152204001e1bd3de?width=600" class="lazy-load-img lazy-loaded" srcset="" data-src="https://hahow.in/images/5a128a07152204001e1bd3de?width=600"><br></p><h4>什麼是存股？又為什麼存股？<br></h4><p>股票投資人說的「存股」，大概可以分成兩種含義，一種是挑選能夠提供穩定配息的股票，每年領取比銀行定存多 3~6 倍的報酬。另一種是買入價值被低估的股票，長期持有，等股價上漲賺取獲利，也稱「價值投資」。<br></p><p>短期的股價通常會被市場的資訊、投資人的情緒或各種因素干擾，造成股價上上下下的波動。「存股」最重要的精神就是在「長期持有」，任何一家公司股價的長期走勢一定和獲利能力高度相關，運用長期投資，就能避開股價短期波動的風險，穩穩拿到該有的長期報酬。</p><h4>講師介紹</h4><p>7年級生的林威岐，平凡的上班族，沒有富爸爸，10 年來靠著上班陸續存下的180萬本金，將股神巴菲特的投資知識運用於台股，在股市中翻成千萬資產，平均年報酬率高達 25%。</p><p>從高中就開始接觸股票，一開始在股市中也是找不到獲利方式，直到接觸第一本投資書籍「巴菲特原則」，才開始了解投資。十幾年的投資過程中，不斷累積經驗與學習，在股票市場上不停的試驗，持續進步，也找到成功的投資模式。<br></p><p>他運用的投資方式非常簡單，不做財務槓桿、不盯盤、不看線圖，只用心在發掘好的股票，並牢牢的抱緊「長期持有」，這樣的方式讓他創造了不平凡的投資成績單，也希望以自身的投資經驗，給大家正確的投資知識，建立自己的獲利方式。<br></p><h4><b>講師接受今周刊 898 期專訪 賺一倍的股票這樣挑 &gt;&gt;&gt;<i>&nbsp;</i></b><a href="http://www.businesstoday.com.tw/article-content-80402-106244-%E8%B3%BA%E4%B8%80%E5%80%8D%E7%9A%84%E8%82%A1%E7%A5%A8%E9%80%99%E6%A8%A3%E6%8C%91" target="_blank">原文網址</a></h4><p><img src="https://hahow.in/images/59eedc1f4b1842001e219a21?width=600" class="lazy-load-img lazy-loaded" srcset="" data-src="https://hahow.in/images/59eedc1f4b1842001e219a21?width=600"></p><h4>儘早學習投資，讓錢幫你賺錢</h4><p>投資成功的三要素「知識」、「經驗」與「資金」，我們覺得最不容易的是「經驗」與「資金」，這兩個要素都需要時間的累積，當你愈早開始，成長的速度愈快。<br></p><p>以講師自己為例子，雖然很早從高中開始學習投資，卻沒有大筆資金操作，一次只能買入一張股票。剛開始投資的前幾年就是不斷累積經驗，直到出社會領了薪水存了錢，有更多的錢能用於投資，搭配已經熟練的投資技巧，資產才有爆發性的成長。<br></p><h4>上完這堂課可以學會什麼<br></h4><p>上完這堂課，學生就可以利用「價值投資」的原則在股市中發掘適合長期持有的股票，除了可以享受時間帶來的複利，因為買在合理價位，還能期待股價上漲帶來的獲利。<br></p><p></p><p>我們相信，善用簡單與輕鬆的理財方式，每個人都有機會打造屬於自己的現金流，最終達成實現財務自由的目標，追求自己想要的人生。</p><h4>課程內容<br></h4><p>★基礎財務與股票知識</p><p>帶你掃描財報重點，介紹股市術語，幫助初學者快速上手。</p><p>★股市賺錢的黃金準則</p><p>整理股市賺錢因子，先理解獲利來源，才能鎖定獲利。</p><p>★發現價值股</p><p>投資只做最好的選擇，挖掘業績穩健有護城河的存股標的，避開經營績效下跌的公司。</p><p>★ 做好資金配置</p><p>做好資金配置降低投資風險，勝兵先勝而後求戰，做對決策才能穩健獲利。</p><p>★計算合理股價</p><p>教你用簡單的方法，推估股價區間，從此買股買得安心，晚上睡得安穩。</p><p>★賣出股票的時機</p><p></p><p>會買股票的是徒弟，會賣股票的才是師傅。舞會要散場的時候，不要當最後一個離開的人。</p></hh-summernote-view></div>
    `;
    
     WxParse.wxParse('article', 'html', article, that, 5);
     that.setData({
       content: article
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
