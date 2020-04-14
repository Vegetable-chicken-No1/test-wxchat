//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        console.log(res.userInfo);
        // this.data.a1 = res.userInfo;
        this.setData({
          userInfo: res.userInfo,
          a1: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo;
          console.log(res.userInfo);
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    // 用户信息
    console.log(e);
    app.globalData.userInfo = e.detail.userInfo
    console.log(e.detail.userInfo);
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  // 跳转页面
  enter:function(){
    var that=this;
    console.log(that.data.userInfo)
    wx.navigateTo({
      url: '/pages/index2/enter?user=' + that.data.userInfo,
    })
  }
})
