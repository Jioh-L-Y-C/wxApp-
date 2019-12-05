## 一个小程序分包搭建的基本架构

### 这样的一个基本的结构
![图片alt](图片地址 ''图片title'')

|-- app
|-- api //请求 api
| |-- user.js
|-- assets
|-- component //全局组件
| |-- common
|-- pages //页面
| |-- index //登录页
|-- home //首页下面的分包页面
| |-- myInfo //我的下面的模块页面（分包）
| | |-- pages
| |-- tabBar //主包 tab
| |-- component
| |-- index //首页
| |-- information //消息
| |-- mine //我的首页

    |-- static                                  //文件
    |-- utils  //工具库
