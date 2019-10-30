// pages/me/me.js
//index.js
//获取应用实例
const app = getApp()
//获取云数据库实例
const db = wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      userInfo: app.globalData.userInfo
    })
    //console.log(this.data.userInfo)
    
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
  getUserInfo: function (e) {
    // 需要openid

    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        e.detail.userInfo.openid = res.result.wxInfo.OPENID
        app.globalData.userInfo = e.detail.userInfo

        this.setData({
          userInfo: e.detail.userInfo
        })
        wx.setStorageSync('userInfo', e.detail.userInfo)
      }
    })
  },
  addMall() {
    wx.chooseImage({
      count: 1,
      success: function (res) {
        const filePath = res.tempFilePaths[0]
        const tempFile = filePath.split('.')
        const cloudPath = "my-shop-" + tempFile[tempFile.length - 2]
        //上传图片
        wx.cloud.uploadFile({
          cloudPath,
          filePath,
          success: res => {
            console.log(res)
            db.collection('emaill').add({
              data: {
                title: "耐克(NIKE)包 运动包 单肩包 斜跨包 小肩袋 Heritage Smit休闲包 BA5899-010 黑",
                price: 119.99,
                tags: ['show'],
                imge: res.fileID,
                optioncount:0
              },
              success: ret => {

                wx.showToast({
                  title: '添加',
                })
              }
            })
          }
        })
      },
    })
  }
})
 

