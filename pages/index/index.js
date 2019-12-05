
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isLogin:wx.getStorageSync('isLogin')||""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    if(this.data.isLogin){
      wx.switchTab({ url: "/pages/tabBar/index/index" });
    };

  },
  bindGetUserInfo: function (e) {
    var that =this;
    if (e.detail.userInfo) {
      // 登录
      wx.login({
        success: res => {
          console.log(res,"登录");
         // 发送 res.code 请求后端登录接口 到后台换取 openId, sessionKey,
          // 登录成功后绑定身份和完善信息才跳到首页
          wx.switchTab({ url: "../tabBar/index/index" });
     
        
          //获取用户信息
          wx.getUserInfo({
            success: function(res) {
              var userInfo = res.userInfo
              var nickName = userInfo.nickName
              var avatarUrl = userInfo.avatarUrl
              var gender = userInfo.gender //性别 0：未知、1：男、2：女
              var province = userInfo.province
              var city = userInfo.city
              var country = userInfo.country
              // console.log(res,"userInfo");
              wx.setStorage({
                key:"userInfo",
                data: JSON.stringify(userInfo)
              })
            }
          })
        }
      })
      //用户按了允许授权按钮
      // 登录成功后跳到首页
      wx.switchTab({ url: "../tabBar/index/index" });
      //把openid和session_key存到本地（有oppenid的直接跳到首页）;
    wx.setStorageSync('isLogin', true)
    } else {
      //用户按了拒绝按钮
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }
  },
    //获取字典
    get_dc(){
      console.log(2)
      // 展示本地存储能力（所有类型的字典）
      dictionaryAll().then(res=>{
        if(res.code==900){
          var dictionary_all =  JSON.stringify(res.data);
          wx.setStorageSync('dictionary_all',dictionary_all)
        }
      });
      //获取地区api
      areaAll().then(res=>{
        if(res.code==900){
          var area_all =  JSON.stringify(res.data);
          wx.setStorageSync('area_all',area_all)
        }
      });
      }
})
