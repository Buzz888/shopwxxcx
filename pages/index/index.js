// pages/index/index.js
const db = wx.cloud.database();
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: ["../../image/swper.jpg", "../../image/swper1.jpg", "../../image/swper2.jpg"],
    aryicon:[
      { title: "秒杀", url:"cloud://app-eo49r.6170-app-eo49r-1300528728/imageicon/naozhong.png"},
      { title: "衣服", url:"cloud://app-eo49r.6170-app-eo49r-1300528728/imageicon/pifu.png"},
      { title: "学习", url:"cloud://app-eo49r.6170-app-eo49r-1300528728/imageicon/xuewen.png"},
      { title: "电脑", url:"cloud://app-eo49r.6170-app-eo49r-1300528728/imageicon/diannao.png"}
    ],
    list:[],
    swiper:[]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中',
    })
    db.collection('emaill').get({
      success: res => {
        this.setData({
          list: res.data
        })
        wx.hideLoading()
      }
    })
  }


  ,

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
  seeshop(e){
    const id = e.currentTarget.id
    console.log(id)
    wx.navigateTo({
      url: '/pages/option/option?id=' + id,
      
    })
  },
  incar(e){
    const item = e.currentTarget.dataset.item;
    const i = app.globalData.cars.findIndex(v=>v._id==item._id)
    if(i>-1){
      //数量加1
      app.globalData.cars[i].num +=1
    }else{
item.num =1
      app.globalData.cars.push(item)
    }
    app.settabbar()
  }
})