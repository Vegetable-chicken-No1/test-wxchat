// pages/fqym/fqym.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    'mz':'番剧',
    'fjarr':[
      {
        "fjid": "1",
        "fjurl": "../../images/tj1.jpg",
        "fjdes": "耗时168小时..算了，反正也不会火",
        "fjbf": "../../images/bf.png",
        "bfsum": "223.3万",
        "fjdz": "../../images/dz.png",
        "dzsum": "8888",
        "fjtime": "2019-12-3",
        // 用于区别3视频列表页传递的参数
        "qb": "tj1"
      },
      {
        "fjid": "2",
        "fjurl": "../../images/tj2.jpg",
        "fjdes": "猫和老鼠，永不褪色！",
        "fjbf": "../../images/bf.png",
        "bfsum": "245万",
        "fjdz": "../../images/dz.png",
        "dzsum": "1.3万",
        "fjtime": "2019-12-9",
        // 用于区别3视频列表页传递的参数
        "qb": "tj2"
      },
      {
        "fjid": "3",
        "fjurl": "../../images/tj3.jpg",
        "fjdes": "【数码宝贝20周年最后的进化】在无限延伸的梦想后面——当年渴望冒险的热情，但是看着曾经热爱至极的他们，似乎就能看见曾经的自己",
        "fjbf": "../../images/bf.png", "bfsum": "65万",
        "fjdz": "../../images/dz.png", "dzsum": "9876",
        "fjtime": "2019-11-3",
        // 用于区别3视频列表页传递的参数
        "qb": "tj3"
      },
      {
        "fjid": "4",
        "fjurl": "../../images/tj4.jpg",
        "fjdes": "我看这颗菠菜头，眼泪瞬间被引爆。。。",
        "fjbf": "../../images/bf.png",
        "bfsum": "1.2万",
        "fjdz": "../../images/dz.png",
        "dzsum": "5239",
        "fjtime": "2019-10-21",
        // 用于区别3视频列表页传递的参数
        "qb": "tj4"
      },
      {
        "fjid": "5",
        "fjurl": "../../images/tj5.jpg",
        "fjdes": "这个标题俺突然不知道改怎么写了，我赣！",
        "fjbf": "../../images/bf.png",
        "bfsum": "1.4万",
        "fjdz": "../../images/dz.png",
        "dzsum": "7643",
        "fjtime": "2019-11-21",
        // 用于区别3视频列表页传递的参数
        "qb": "tj5"
      },
      {
        "fjid": "6",
        "fjurl": "../../images/tj6.jpg",
        "fjdes": "献上你的膝盖吧，凡人！",
        "fjbf": "../../images/bf.png",
        "bfsum": "2.1万",
        "fjdz": "../../images/dz.png",
        "dzsum": "9898",
        "fjtime": "2019-12-22",
        // 用于区别3视频列表页传递的参数
        "qb": "tj6"
      }
    ]
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
  videoxq: function (e) {
    console.log('跳转详情页');
    console.log('视频ID' + e.currentTarget.dataset['id']);
    let id = e.currentTarget.dataset['id'];
    wx.navigateTo({
      url: '/pages/videoxq/videoxq?id=' + id
    })
  }
})