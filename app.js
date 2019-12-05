//app.js
App({
  // 顶部导航胶囊
  globalData: {
    userInfo: null,
    ro_logo: ""
  },
  onLaunch: function () {
    // wx.redirectTo({ url: './pages/login/login'})
    // 顶部导航胶囊信息
    this._getSystemInfo();

  },
  //获取设备信息
  _getSystemInfo () {
    // 顶部导航胶囊
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top,//胶囊按钮与顶部的距离
          //navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight)*2;//导航高度
          navHeight = 32;
        this.globalData.navHeight = navHeight;
        this.globalData.navTop = navTop;
        this.globalData.windowHeight = res.windowHeight;
      },
      fail (err) {
        console.log(err);
      }
    });
  }

})