// pages/car/car.js
const app =getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cars:[],
    total:0,
    yh:0

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
    //console.log(app.globalData.cars)
this.setData({
  cars: app.globalData.cars
})
    this.getTotal()
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
    this.getTotal()
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
  getTotal(){
    const total = this.data.cars.reduce((sum,a)=>{
      return a.num * a.price+sum
    }, 0)
    this.setData({
      total

    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  addcart(e){
    const { index } = e.currentTarget.dataset
 const carts = [...this.data.cars]
 carts[index].num +=1
 this.setData({
   cars: carts
 })
    app.globalData.cars = carts

    app.settabbar()
    this.getTotal()
  },
  removecart(e){
    const { index } = e.currentTarget.dataset
    const carts = [...this.data.cars]
    if (carts[index].num){
       carts[index].num -=1 
    }else{
      carts[index].num =0
    }
    this.setData({
      cars: carts
    })
    
    app.globalData.cars = carts
    console.log(app.globalData.cars)
    app.settabbar()
    this.getTotal()
  },
  delItem(e){
    
    const index = e.currentTarget.dataset.index;
    console.log(index)
    app.globalData.cars.splice(index,1)
    this.setData({
      cars: app.globalData.cars
    })
    this.getTotal()

  }
})