import {bind_id} from "../../../../api/user.js"
var app = getApp()
// pages/login/pages/idCard/idCard.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idCard:""
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
  showModal(content) {
    wx.showModal({
      content: content,
      showCancel: false,
    })
  },
  submitHandle(){
    console.log(this.data.idCard)
    if(this.data.idCard==""){
      this.showModal("请输入你的身份证号码");
      return
    };
    //发送请求
    var params = {
      idnum: this.data.idCard,
      openid : app.globalData.ro_logo
    }
    bind_id(params).then(res=>{
     if(res.code==900){
       wx.showToast({
         title: res.msg,
         icon: 'success',
         duration: 2000
       });
       //绑定成功
       //跳到完善信息页面
       wx.navigateTo({url:'/pages/index/pages/personalData/personalData'})
     }else{
      wx.showModal({
        title: '提示',
        content:  res.msg
      })
     }
    }).catch((err)=>{
        console.log(err,"err")
    })
  },
  //实时更新
  bindKeyInput(e){
    this.setData({
      idCard: e.detail.value
    })
  }
})