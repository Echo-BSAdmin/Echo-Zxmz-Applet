const app = getApp();

Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    animation: null,
    isShowAnimationContainer: true,
    elements: [{
        title: '个人资料',
        name: 'profile',
        color: 'cyan',
        icon: 'profile'
      },
      {
        title: '工作经历',
        name: 'experience',
        color: 'purple',
        icon: 'addressbook'
      },
      {
        title: '项目经验',
        name: 'project',
        color: 'mauve',
        icon: 'qr_code'
      },
      {
        title: '职业技能',
        name: 'skill',
        color: 'pink',
        icon: 'selectionfill'
      }
    ],
  },
  handleTouchMove(event) {
    var self = this;
    event.touches[0].pageX;
    self.opacityAnimate();
    self.showIndexContainer();
  },
  opacityAnimate(event) {
    var self = this;
    let {
      animation
    } = self.data;
    animation = wx.createAnimation({
      duration: 1500,
      timingFunction: "ease-in-out",
      delay: 0,
      transformOrigin: "50% 50% 0%"
    });
    animation.translate(0, -1300).step();
    self.setData({
      animationData: animation.export()
    });
  },
  showIndexContainer() {
    var self = this;
    setTimeout(function () {
      self.setData({
        isShowAnimationContainer: false,
        toggleDelay: true
      });
     }, 1000);
  }
})