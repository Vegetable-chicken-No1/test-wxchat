// 获取全局数据
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "bnrUrl": [{
      "url": "../../images/lbo5.jpg"
    }, {
        "url": "../../images/lbo2.jpg"
    }, {
        "url": "../../images/lbo3.jpg"
    }, {
        "url": "../../images/lbo4.jpg"
    }],
    // 推荐数据
    "tjarr":[
      { 
        "tjid": "1",
        "tjurl": "../../images/tj1.jpg", 
        "tjdes": "耗时168小时..算了，反正也不会火",
        "tjbf": "../../images/bf.png",
        "bfsum": "223.3万",
        "tjdz": "../../images/dz.png", 
        "dzsum": "8888",
        "tjtime":"2019-12-3",
        // 用于区别3视频列表页传递的参数
         "qb":"tj1"
      },
      { "tjid": "2", 
      "tjurl": "../../images/tj2.jpg",
       "tjdes": "猫和老鼠，永不褪色！",
        "tjbf": "../../images/bf.png", 
        "bfsum": "245万", 
        "tjdz": "../../images/dz.png", 
        "dzsum": "1.3万",
        "tjtime": "2019-12-9",
        // 用于区别3视频列表页传递的参数
        "qb": "tj2"
         },
      { "tjid": "3",
       "tjurl": "../../images/tj3.jpg", 
       "tjdes": "【数码宝贝20周年最后的进化】在无限延伸的梦想后面——当年渴望冒险的热情，但是看着曾经热爱至极的他们，似乎就能看见曾经的自己", 
       "tjbf": "../../images/bf.png", "bfsum": "65万", 
       "tjdz": "../../images/dz.png", "dzsum": "9876" ,
        "tjtime": "2019-11-3",
        // 用于区别3视频列表页传递的参数
        "qb": "tj3"
       },
      { "tjid": "4", 
      "tjurl": "../../images/tj4.jpg", 
      "tjdes": "我看这颗菠菜头，眼泪瞬间被引爆。。。", 
      "tjbf": "../../images/bf.png", 
      "bfsum": "1.2万",
       "tjdz": "../../images/dz.png", 
       "dzsum": "5239",
        "tjtime": "2019-10-21",
        // 用于区别3视频列表页传递的参数
        "qb": "tj4"
        }
    ],
    // 舞蹈区数据
    "wdarr":[
      {
        "wdid": "1",
        "wdurl": "../../images/tw1.jpg",
        "wddes": "我是舞蹈区第一个吧，嘿嘿嘿。。。",
        "wdbf": "../../images/bf.png",
        "wdsum": "1.2万",
        "wddz": "../../images/dz.png",
        "wdsum": "5239",
        "wdtime": "2019-12-6",
        "qb": "wd1"
      },
      {
        "wdid": "2",
        "wdurl": "../../images/tw2.jpg",
        "wddes": "这就是男孩子跳舞!",
        "wdbf": "../../images/bf.png",
        "wdsum": "25万",
        "wddz": "../../images/dz.png",
        "wdsum": "9.8万",
        "wdtime": "2019-11-12",
        "qb": "wd2"
      },
      {
        "wdid": "3",
        "wdurl": "../../images/tw3.jpg",
        "wddes": "帅到炸裂，冲冲冲。。。",
        "wdbf": "../../images/bf.png",
        "wdsum": "17万",
        "wddz": "../../images/dz.png",
        "wdsum": "9987",
        "wdtime": "2019-05-23",
        "qb": "wd3"
      },
      {
        "wdid": "4",
        "wdurl": "../../images/tw4.jpg",
        "wddes": "多人街舞一起来？",
        "wdbf": "../../images/bf.png",
        "wdsum": "1.1万",
        "wddz": "../../images/dz.png",
        "wdsum": "6538",
        "wdtime": "2019-11-11",
        "qb": "wd4"
      }
    ],
    // 原创数据
    'ycarr':[
      {
        "ycid": "1",
        "ycurl": "../../images/yc1.jpg",
        "ycdes": "巨魔陪你过圣诞，哈哈哈",
        "ycbf": "../../images/bf.png",
        "ycsum": "152万",
        "ycdz": "../../images/dz.png",
        "ycsum": "11.5万",
        "yctime": "2019-03-6",
        "qb": "yc1"
      },
      {
        "ycid": "2",
        "ycurl": "../../images/yc2.jpg",
        "ycdes": "现在是时崎狂三洗脑时间!",
        "ycbf": "../../images/bf.png",
        "ycsum": "12万",
        "ycdz": "../../images/dz.png",
        "ycsum": "5万",
        "yctime": "2018-05-14",
        "qb": "yc2"
      },
      {
        "ycid": "3",
        "ycurl": "../../images/yc3.jpg",
        "ycdes": "[dack]大碗宽面等你来！",
        "ycbf": "../../images/bf.png",
        "ycsum": "132.5万",
        "ycdz": "../../images/dz.png",
        "ycsum": "6.2万",
        "yctime": "2019-07-16",
        "qb": "yc3"
      },
      {
        "ycid": "4",
        "ycurl": "../../images/yc4.jpg",
        "ycdes": "大场面，龙族主题曲来辽！",
        "ycbf": "../../images/bf.png",
        "ycsum": "1.1万",
        "ycdz": "../../images/dz.png",
        "ycsum": "6538",
        "yctime": "2019-08-6",
        "qb": "yc4"
      }


    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(app.globalData.userInfo);
    console.log('视频ID' + this.data.tjarr)
    // console.log(this.data.tjarr)
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
    console.log("下拉");
    var that=this;
    // that.onLoad();
    that.onReady();
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
  // 结束跳转分区页面
  end:function(){
    wx.reLaunch({
      url: '/pages/fenq/fenq'
    })
  },
  //跳转视频详情页
  videoxq:function(e){
    console.log('跳转详情页');
    console.log('视频ID' + e.currentTarget.dataset['id']);
    let id = e.currentTarget.dataset['id'];
    wx.navigateTo({
      url: '/pages/videoxq/videoxq?id='+id
    })
  }
})