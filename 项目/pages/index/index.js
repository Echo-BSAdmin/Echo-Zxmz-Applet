//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    isShowAnimationContainer: true,
    dataLists: [],
    elements: [{
        title: '布局',
        name: 'layout',
        color: 'cyan',
        icon: 'newsfill'
      },
      {
        title: '背景',
        name: 'background',
        color: 'blue',
        icon: 'colorlens'
      },
      {
        title: '文本',
        name: 'text',
        color: 'purple',
        icon: 'font'
      },
      {
        title: '图标 ',
        name: 'icon',
        color: 'mauve',
        icon: 'icon'
      },
      {
        title: '按钮',
        name: 'button',
        color: 'pink',
        icon: 'btn'
      },
      {
        title: '标签',
        name: 'tag',
        color: 'brown',
        icon: 'tagfill'
      },
      {
        title: '头像',
        name: 'avatar',
        color: 'red',
        icon: 'myfill'
      },
      {
        title: '进度条',
        name: 'progress',
        color: 'orange',
        icon: 'icloading'
      },
      {
        title: '边框阴影',
        name: 'shadow',
        color: 'olive',
        icon: 'copy'
      },
      {
        title: '加载',
        name: 'loading',
        color: 'green',
        icon: 'loading2'
      },
    ],
  },
  nextpage(event) {
    var anmiaton = e.currentTarget.dataset.class;
    var that = this;
    that.setData({
      animation: anmiaton
    })
    setTimeout(function () {
      that.setData({
        animation: ''
      })
    }, 1000)
  },
  handletouchmove: function (A) {
    A.touches[0].pageX;
    this.opacityAnimate();
  },
  opacityAnimate: function (event) {
    let {
      animation
    } = this.data;
    animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease-in-out",
      delay: 0,
      transformOrigin: "50% 50% 0%"
    })
    animation.translate(0, -1300).step(),
      this.setData({
        animationData: animation.export()
      });
  },
})