// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //用户信息
    userInfo:{},
    // 培训
    trainData:[{
      id: 0,
      name:"培训项目",
      className:'blue',
      url:'../../myInfo/pages/trainProject/trainProject',
      imgSrc:"/static/my/training.png"
    },
    {
      id: 1,
      name:"我的课程",
      className:'green',
      url:'../../myInfo/pages/myCourse/myCourse',
      imgSrc:"/static/my/time.png"
    },
    {
      id: 2,
      name:"我的资源",
      className:'red',
      url:"/pages/myInfo/pages/myResources/myResources",
      imgSrc:"/static/my/resources.png"
    },
    {
      id: 3,
      name:"学习档案",
      className:'orange',
      url:'../../myInfo/pages/myFiles/myFiles',
      imgSrc:"/static/my/archives.png"
    }],
    //账户
    accountData:[{
      id: 0,
      name:"账户明细",
      iconName:"iconaccount",
      url:'/pages/myInfo/pages/accountDetails/accountDetails'
    },{
      id: 1,
      name:"我的发票",
      iconName:"iconticket",
      url:'/pages/myInfo/pages/myInvoice/myInvoice'
    },{
      id: 2,
      name:"我的积分",
      iconName:"icontop-up_1",
      integral:"6897积分",
      url:"/pages/myInfo/pages/myIntegral/myIntegral"
    },{
      id: 3,
      name:"积分充值",
      iconName:"icontop-up_",
      url:"/pages/myInfo/pages/myIntegral/pages/recharge/recharge"
    }],
    // 意见反馈
    feedbackData:[
    {
      id: 0,
      name:"绑定手机",
      link_name:"18312331680",
      iconName:"iconiPhone",
      url:"/pages/myInfo/pages/replace/replace?state=1"
    },
    {
      id: 1,
      name:"绑定邮箱",
      link_name:"snayuanshe@163.com",
      iconName:"iconEmile",
      url:"/pages/myInfo/pages/replace/replace?state=2"
    },
    {
      id: 2,
      name:"修改密码",
      iconName:"iconmovie",
      url:"/pages/myInfo/pages/replace/replace?changePassword=1"
    },
    {
      id: 3,
      name:"关于我们",
      iconName:"iconproblem_1",
      url:"/pages/myInfo/pages/aboutUs/aboutUs"
    },
    {
      id: 4,
      name:"意见反馈",
      iconName:"iconfeedback",
      url:"/pages/myInfo/pages/aboutUs/pages/feedback/feedback"
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取用户信息
    this._getUserInfo();
  },
  _getUserInfo(){
     wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        var val =JSON.parse(res.data);
       this.setData({
         userInfo: val
       }) 
       console.log(this.data.userInfo,5)

      }
    });
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

  }
})