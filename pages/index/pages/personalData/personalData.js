// pages/login/pages/personalData/personal data.js
import WxValidate from '../../../../assets/plugins/wx-validate/WxValidate'
import {getsystemMsg} from "../../../../api/user"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    radioOptions:[
      { name: '男', id: '1' ,checked:'true'},
      { name: '女', id: '2' },
    ],
    //学历
    educationalOptions:[],
    // 学历下拉的index
    educationalIndex:"",
    //所在地区
    customArray:[],
    onlyArray:[],
    //当前选中数组的下标值
    customIndex: [0, 0, 0],
    //当前选中数组
      onlyArray: [
        [],
        [],
        []
      ],
    //职称下拉的值
    titleOptions:[],
    titleIndex:"",
    //任教学段下拉的值
    levelOptions:[],
    xueduanIndex:"",
    //任教学科下拉的值
    courseOptions:[],
    subjectIndex:"",
    form:{
      //真实姓名
      truename:"",
      //联系地址
      address:"",
      //邮箱
      email:"",
      educational: "",
    },
    //省的id
    province_id:"",
    //市的id
    city_id:"",
    //县的id
    area_id:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //验证initValidate
    this.initValidate();
    this._getDc();
    //处理地区api
    this.op();
    //
    console.log(this.data.onlyArray,"多选的数组")
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
  //获取字典
  _getDc(){
    var dc = JSON.parse(wx.getStorageSync('dictionary_all'));
    var areaOptions = JSON.parse(wx.getStorageSync('area_all'));
   this.setData({
    titleOptions:dc.title,
    levelOptions:dc.level,
    courseOptions:dc.course,
    educationalOptions:dc.education,
    customArray:areaOptions
   }) 
  },
  //表单验证
  initValidate(){
    const rules = {
      //姓名
      truename: {
        required: true,
    },
    //联系地址
    address: {
        required: true,
    },
    //手机号
    tel: {
        required: true,
        tel:true    
    },
    email:{
      required: true
    },
    //职称
    titleIndex: {
        required: true
    },
    //学段
      xueduanIndex: {
        required: true,
    },
    //学科
    subjectIndex: {
        required: true
    },
    };
    // 验证字段的提示信息，若不传则调用默认的信息
    const messages = {
      truename: {
        required: '请输入你的真实姓名',
    },
    //联系地址
    address: {
        required: '请输入联系地址',
    },
    //手机号
    tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号',
    },
    //邮箱
    email: {
        required: '请输入邮箱'
    },
    //职称
    titleIndex: {
        required: '请选择职称'
    },
    //学段
    xueduanIndex: {
        required: '请选择学段'
    },
    //学科
    subjectIndex: {
        required: '请选择学科'
    },
    }
    // 创建实例对象
    this.WxValidate = new WxValidate(rules, messages); 
  },
  //输入姓名
  change_name(e){
    var str = "form.truename"
    this.setData({
      [str]: e.detail.value
    })
  },
  //输入地址
  change_address(e){
    var str = "form.address"
    this.setData({
      [str]: e.detail.value
    });
    console.log("改变了地址",this.data.form.address)
  },
  //输入手机号
  change_tel(e){
    var str = "form.tel"
    this.setData({
      [str]: e.detail.value
    })
  },
  //输入邮箱
  change_email(e){
    var str = "form.email"
    this.setData({
      [str]: e.detail.value
    })
  },
  //性别选择
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },
  //性别学历
  bindPickerChange: function (e) {
    console.log('携带value值为：', e.detail.value);
    var str =  'form.educational'
    this.setData({
      educationalIndex:e.detail.value,
      [str] : e.detail.value
    });
    
  },
  //选择职称
  bindPickerChange1: function (e) {
    console.log('携带value值为：', e.detail.value);
    this.setData({
      titleIndex : e.detail.value
    });
    
  },
  //选择学段
  bindPickerChange2: function (e) {
    console.log('携带value值为：', e.detail.value);
    this.setData({
      xueduanIndex:e.detail.value
    });
    
  },
  //选择学科
  bindPickerChange3: function (e) {
    console.log('携带value值为：', e.detail.value);
    this.setData({
      subjectIndex:e.detail.value,
    });
    
  },
  //地区选择
  bindCustomPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    var arr = e.detail.value;
    console.log(this.data.customIndex,e.detail.value)
    //根据下标来查找相对应的id
      var shen =  this.data.onlyArray[0][arr[0]];
     var  shi =  this.data.onlyArray[1][arr[1]];
     var  xiang =  this.data.onlyArray[2][arr[2]];
     console.log("选择的值",this.data.onlyArray[0][arr[0]],"省",this.data.onlyArray[1][arr[1]],"市",this.data.onlyArray[2][arr[2]],"县")
     this.data.customArray.map(item=>{
      if(item.name==shen){
        // console.log(item.id,"省的id")
        this.setData({
          province_id:item.id
        });
        //在拿省的id去查找市的id
        item.sub.map(item_shi=>{
          // console.log(item);
          if(item_shi.name==shi){
            // console.log(item_shi,"市的项")
            this.setData({
              city_id:item_shi.id
            });
            //最后匹配县的id
            item_shi.sub.map(item_xiang=>{
              if(item_xiang.name==xiang){
                // console.log(item_xiang,"县的项");
                this.setData({
                  area_id:item_xiang.id
                });
              }
            })
          }
        })
      }
      // console.log(this.data.province_id ,this.data.city_id,this.data.area_id,"省市县的id")
     })
  },
  //处理省市区
  op(){
    var data = {
      customArray: this.data.customArray,
      customIndex: this.data.customIndex,
      onlyArray: this.data.onlyArray,
    };
    for (var i = 0; i < data.customArray.length; i++) {
      data.onlyArray[0].push(data.customArray[i].name);
    }
    for (var j = 0; j < data.customArray[data.customIndex[0]].sub.length; j++) {
      data.onlyArray[1].push(data.customArray[data.customIndex[0]].sub[j].name);
    }
    for (var k = 0; k < data.customArray[data.customIndex[0]].sub[data.customIndex[1]].sub.length; k++) {
      data.onlyArray[2].push(data.customArray[data.customIndex[0]].sub[data.customIndex[1]].sub[k].name);
    }
    // console.log(data.onlyArray);
    this.setData({
      onlyArray:data.onlyArray
    })
  },
   //多列自创选择器换列方法
 bindCustomPickerColumnChange: function(e) {
  var customArray = this.data.customArray,
    customIndex = this.data.customIndex,
    onlyArray = this.data.onlyArray;

  customIndex[e.detail.column] = e.detail.value;
  // console.log(onlyArray);
  var searchColumn = () => {
    for (var i = 0; i < customArray.length; i++) {
      var arr1 = [];
      var arr2 = [];
      if (i == customIndex[0]) {
        for (var j = 0; j < customArray[i].sub.length; j++) {
          arr1.push(customArray[i].sub[j].name);
          if (j == customIndex[1]) {
            for (var k = 0; k < customArray[i].sub[j].sub.length; k++) {
              arr2.push(customArray[i].sub[j].sub[k].name);
            }
            onlyArray[2] = arr2;
          }
        }
        onlyArray[1] = arr1;
      }
    };
  }
  switch (e.detail.column) {
    case 0:
      customIndex[1] = 0;
      customIndex[2] = 0;
      searchColumn();
      break;
    case 1:
      customIndex[2] = 0;
      searchColumn();
      break;
  }
  // console.log(onlyArray,customIndex)
  this.setData({
    onlyArray: onlyArray,
    customIndex: customIndex
  });
},
  //确定（提交）
  submitForm(e) {
    const params = e.detail.value
    console.log(params);
    console.log(this.WxValidate)

    // 传入表单数据，调用验证方法
    if (!this.WxValidate.checkForm(params)) {
        const error = this.WxValidate.errorList[0]
        this.showModal(error)
        return false
    }
    this.showModal({
        msg: '提交成功',
    })
},
//模态框
showModal(error) {
  wx.showModal({
      content: error.msg,
      showCancel: false,
  })
},


})