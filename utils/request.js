import {
  config
} from './config.js'

const app = getApp()
//封装GET
function Get (url, params) {
  // var login_info = wx.getStorageSync('login_info') ? JSON.parse(wx.getStorageSync('login_info')) : [];

  wx.showLoading({
    title: "",
    showCancel:true
  });
  return new Promise(function (resolve, reject) {
    wx.request({
      url: config.url + url,
      data: params,
      method: 'get',
      header: {
        'Content-Type': 'application/json',
        'token': "2afdeb95d8699ef42e6c8ce7e2be3e1a",
        'id': 8
      },
      success: res => {
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
          wx.hideLoading()
      },
      fail: res => {
        wx.hideLoading(2000)
        reject(res.data)
      }
    })
  });
}


//封装POST
function Post (url, params) {
  var login_info = wx.getStorageSync('login_info') ? JSON.parse(wx.getStorageSync('login_info')) : [];

  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url: config.url + url,
      data: params,
      method: 'POST',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'token': "2afdeb95d8699ef42e6c8ce7e2be3e1a",
        'id': 8
      },
      success: res => {
        resolve(res.data);
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
      },
      fail: res => {
        wx.hideLoading(500)
        reject(res.data)
      }
    })
  });
}
//封装DELETE
function DELETE (url, params) {
  var login_info = wx.getStorageSync('login_info') ? JSON.parse(wx.getStorageSync('login_info')) : [];

  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url: "http://v3.lt-edu.net/index.php" + url +`/?id=${params.id}`,
      data: params,
      method: 'DELETE',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'token': "2afdeb95d8699ef42e6c8ce7e2be3e1a",
        'id': 8
      },
      success: res => {
        resolve(res.data);
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
      },
      fail: res => {
        wx.hideLoading(500)
        reject(res.data)
      }
    })
  });
}
//封装PUT
function PUT (url, params) {
  var login_info = wx.getStorageSync('login_info') ? JSON.parse(wx.getStorageSync('login_info')) : [];

  return new Promise(function (resolve, reject) {
    wx.showLoading({
      title: '加载中...'
    });
    wx.request({
      url: config.url + url +`/?id=${params.id}`,
      data: params,
      method: 'PUT',
      header: {
        'content-Type': 'application/x-www-form-urlencoded',
        'token': "2afdeb95d8699ef42e6c8ce7e2be3e1a",
        'id': 8
      },
      success: res => {
        resolve(res.data);
        if (res.statusCode == 200) {
          resolve(res.data);
        } else {
          wx.showModal({
            title: '提示',
            content: res.data.msg,
            showCancel: false
          })
        }
        setTimeout(function () {
          wx.hideLoading()
        }, 500)
      },
      fail: res => {
        wx.hideLoading(500)
        reject(res.data)
      }
    })
  });
}
export {
  Get,
  Post,
  DELETE,
  PUT
}