// pages/fenq/fenq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'fenqarr':[
      {
        'fqid':'1',
        'fqurl':'../../images/fj.png',
        'fenqtext':'番剧'
      },
      {
        'fqid': '2',
        'fqurl': '../../images/yc.png',
        'fenqtext': '原创'
      },
      {
        'fqid': '3',
        'fqurl': '../../images/wd.png',
        'fenqtext': '舞蹈'
      },
      {
        'fqid': '4',
        'fqurl': '../../images/ycc.png',
        'fenqtext': '娱乐'
      },
      {
        'fqid': '5',
        'fqurl': '../../images/yy.png',
        'fenqtext': '音乐'
      },
      {
        'fqid': '6',
        'fqurl': '../../images/ss.png',
        'fenqtext': '时尚'
      },
      {
        'fqid': '7',
        'fqurl': '../../images/yx.png',
        'fenqtext': '游戏'
      },
      {
        'fqid': '8',
        'fqurl': '../../images/kj.png',
        'fenqtext': '科技'
      },
      {
        'fqid': '9',
        'fqurl': '../../images/sh.png',
        'fenqtext': '生活'
      },
      {
        'fqid': '10',
        'fqurl': '../../images/dsj.png',
        'fenqtext': '电视'
      },
      {
        'fqid': '11',
        'fqurl': '../../images/dy.png',
        'fenqtext': '电影'
      },
      {
        'fqid': '12',
        'fqurl': '../../images/dh.png',
        'fenqtext': '动画'
      },
      {
        'fqid': '13',
        'fqurl': '../../images/gc.png',
        'fenqtext': '鬼畜'
      },
      {
        'fqid': '14',
        'fqurl': '../../images/gg.png',
        'fenqtext': '广告'
      },
      {
        'fqid': '15',
        'fqurl': '../../images/zb.png',
        'fenqtext': '直播'
      },
    ]
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

  },
  //跳转视频详情页
  upfq: function (e) {
    console.log('跳转分区页面');
    console.log('ID' + e.currentTarget.dataset['id']);
    let id = e.currentTarget.dataset['id'];
    wx.navigateTo({
      url: '/pages/fqym/fqym?id=' + id
    })
  }
})