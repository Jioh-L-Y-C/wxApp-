//index.js
// import { login } from "../../api/user.js"
// console.log(login,"登录的接口")
//获取应用实例
const app = getApp()
Page({
  data: {
    //胶囊的位置
    navTop: "",
    imgArr: [
      { title: '蓝天教育的成长历程', userName: '张立春', url: 'http://img4.imgtn.bdimg.com/it/u=3651882085,374121615&fm=26&gp=0.jpg', path: '' },
      { title: '蓝天教育的成长历程', userName: '张立春', url: 'http://img0.imgtn.bdimg.com/it/u=1563847232,2166245740&fm=26&gp=0.jpg', path: '' },
      { title: '蓝天教育的成长历程', userName: '张立春', url: 'http://img0.imgtn.bdimg.com/it/u=3674387189,1656152987&fm=26&gp=0.jpg', path: '' }
    ],
    //下载的进度条
    progress: "",
    downUrl:""
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    //获取胶囊离顶部的高
    var Top = app.globalData.navTop;
    this.setData({
      navTop: (Top) + 'px'
    })
    console.log(Top, "Top")
    // wx.setNavigationBarTitle({
    //   title: '蓝天小研首页'
    // }),
  },
  bindGetUserInfo (e) {
    console.log(e.detail.userInfo)
  },
  getUserInfo: function (e) {
    console.log(e, 666)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  //获取盒子到顶部的距离
  checktouchmove (event) {
    // var currentY = event.touches[0].pageY;
    // console.log(currentY)

    wx.createSelectorQuery().select('#home').boundingClientRect((rect) => {
      // rect.id      // 节点的ID
      // rect.dataset // 节点的dataset
      // rect.left    // 节点的左边界坐标
      // rect.right   // 节点的右边界坐标
      // rect.top     // 节点的上边界坐标
      // rect.bottom  // 节点的下边界坐标
      // rect.width   // 节点的宽度
      // rect.height  // 节点的高度
      // console.log(rect.top,"头部");
      var val = Math.abs(rect.top);
      // console.log(val)
      if (val > 200) {


      } else if (val < 200) {

      }
      // console.log(this.data.color)
    }).exec()
  },
  //下载文件测试
  downFile () {
    var that = this
    //下载测试
    const downloadTask = wx.downloadFile({
      url: 'https://dckj.ks3-cn-guangzhou.ksyun.com/test/20190929/eaebab15-9414-41fb-9886-edcac1223c25.txt', //仅为示例，并非真实的资源
      success (res) {
        // 只要服务器有响应数据，就会把响应内容写入文件并进入 success 回调，业务需要自行判断是否下载到了想要的内容
        if (res.statusCode === 200) {
          console.log(res, "下载的文件")
          const tempFilePath = res.tempFilePath;
          // 保存文件
          wx.saveFile({
            tempFilePath,
            success: function (res) {
              const savedFilePath = res.savedFilePath;
              console.log("保存成功",savedFilePath)
              // 打开文件
              that.setData({
                downUrl:savedFilePath
              })
              wx.openDocument({
                filePath: savedFilePath,
                success: function (res) {
                  console.log('打开文档成功')
                },
              });
            },
            fail: function (err) {
              console.log('保存失败：', err)
            }
          });

        }
      }
    });
    // downloadTask.onProgressUpdate((res) => {
    //   console.log('下载进度', res.progress)
    //   console.log('已经下载的数据长度', res.totalBytesWritten)
    //   console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    // })
    downloadTask.onProgressUpdate((res) => {
      console.log("下载的对象", res)
      this.setData({
        progress: res.progress
      })
      // console.log('下载进度', res.progress)
      // console.log('已经下载的数据长度', res.totalBytesWritten)
      // console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite)
    })
  }

})
