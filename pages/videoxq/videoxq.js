// pages/videoxq/videoxq.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'path':'../../videos/alg.mp4',
    'videodes':'这一句巨魔正能量语录照亮你的心，看你怎么说？',
    // 动态切换样式的初始数据
    'num':1,
    'gk':'216.5次观看',
    'dz':'7.3万次点赞',
    'time':'2019-12-1',

    "tjsparr": [
      {
        "spid": "1",
        "spurl": "../../images/tj1.jpg",
        "spdes": "耗时168小时..算了，反正也不会火",
        "spbf": "../../images/bf.png",
        "bfsum": "223.3万",
        "spdz": "../../images/dz.png",
        "dzsum": "8888",
        "sptime": "2019-12-3",
        // 用于区别3视频列表页传递的参数
        "qb": "tj1"
      },
      {
        "spid": "2",
        "spurl": "../../images/tj2.jpg",
        "spdes": "猫和老鼠，永不褪色！",
        "spbf": "../../images/bf.png",
        "bfsum": "245万",
        "spdz": "../../images/dz.png",
        "dzsum": "1.3万",
        "sptime": "2019-12-9",
        // 用于区别3视频列表页传递的参数
        "qb": "tj2"
      },
      {
        "spid": "3",
        "spurl": "../../images/tj3.jpg",
        "spdes": "【数码宝贝20周年最后的进化】在无限延伸的梦想后面——当年渴望冒险的热情，但是看着曾经热爱至极的他们，似乎就能看见曾经的自己",
        "spbf": "../../images/bf.png", 
        "bfsum": "65万",
        "spdz": "../../images/dz.png",
         "dzsum": "9876",
        "sptime": "2019-11-3",
        // 用于区别视频列表页传递的参数
        "qb": "tj3"
      },
      {
        "spid": "4",
        "spurl": "../../images/tj4.jpg",
        "spdes": "我看这颗菠菜头，眼泪瞬间被引爆。。。",
        "spbf": "../../images/bf.png",
        "bfsum": "1.2万",
        "spdz": "../../images/dz.png",
        "dzsum": "5239",
        "sptime": "2019-10-21",
        // 用于区别视频列表页传递的参数
        "qb": "tj4"
      },
      {
        "spid": "5",
        "spurl": "../../images/tw1.jpg",
        "spdes": "我是舞蹈区第一个吧，嘿嘿嘿。。。",
        "spbf": "../../images/bf.png",
        "bfsum": "8943",
        "spdz": "../../images/dz.png",
        "dzsum": "3214",
        "sptime": "2019-10-21",
        // 用于区别视频列表页传递的参数
        "qb": "tj4"
      },
      {
        "spid": "6",
        "spurl": "../../images/tj2.jpg",
        "spdes": "这就是男孩子跳舞!",
        "spbf": "../../images/bf.png",
        "bfsum": "5.2万",
        "spdz": "../../images/dz.png",
        "dzsum": "2.3万",
        "sptime": "2019-10-21",
        // 用于区别视频列表页传递的参数
        "qb": "tj4"
      },
      {
        "spid": "7",
        "spurl": "../../images/tw3.jpg",
        "spdes": "帅到炸裂，冲冲冲。。。",
        "spbf": "../../images/bf.png",
        "bfsum": "1.0万",
        "spdz": "../../images/dz.png",
        "dzsum": "2314",
        "sptime": "2019-10-21",
        // 用于区别视频列表页传递的参数
        "qb": "tj4"
      },
      {
        "spid": "8",
        "spurl": "../../images/tw4.jpg",
        "spdes": "多人街舞一起来？",
        "spbf": "../../images/bf.png",
        "bfsum": "1.1万",
        "spdz": "../../images/dz.png",
        "dzsum": "6358",
        "sptime": "2019-10-21",
        // 用于区别视频列表页传递的参数
        "qb": "tj4"
      }
    ],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id)
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
    // 进入全屏显示
    // this.videoContext = wx.createVideoContext('myvideo', this);
    // this.videoContext.requestFullScreen({ direction: 90 });
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
  // 动态切换样式绑定的函数
  change: function (e) {
    console.log(e);
    this.setData({
      // 赋值data-xxx
      num: e.target.dataset.num
    })
  },
  //跳转视频详情页
  videoxq: function (e) {
    console.log('跳转详情页');
    console.log('视频ID' + e.currentTarget.dataset['id']);
    let id = e.currentTarget.dataset['id'];
    wx.navigateTo({
      url: '/pages/videoxq/videoxq?id=' + id
    })
  }
})