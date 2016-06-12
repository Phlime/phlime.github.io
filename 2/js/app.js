/*
 * Happy.js
 * Validate form in page signup and order
 * configs are followed
*/
var happy = {
  // http://caibaojian.com/regexp-example.html
  CNPhone: function (val) {
    return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(val)
  },
  // http://stackoverflow.com/questions/3026957/how-to-validate-a-domain-name-using-regex-php
  domain: function (val) {
    return /^(?!\-)(?:[a-zA-Z\d\-]{0,62}[a-zA-Z\d]\.){1,126}(?!\d+)[a-zA-Z\d]{1,63}$/.test(val)
  },
  // http://bbs.csdn.net/topics/390898733
  carLicense: function (val) {
    return /[\u4e00-\u9fa5]{1}[A-Z]{1}(?:(?![a-zA-Z]{5})[0-9a-zA-z]){5}$/.test(val)
  },
  minLength: function (val, length) {
    return val.length >= length
  },
  maxLength: function (val, length) {
    return val.length <= length
  },
  equalLength: function (val1, val2) {
    return (val1.length == val2)
  }
}


/*
 * For page buy
 * make page effect
 * use OwlCarousel.js2
*/
$(document).ready(function () {
  var pageBuyEffect = {
    init: function () {
      this.cacheElements()
      this.bindEvents()
    },
    cacheElements: function () {
      this.$pageBuy = $('body.buy')
      if (this.$pageBuy) {
        this.$owlCarousel = this.$pageBuy.find('.owl-carousel')
        // for choose menu
        this.$chooseMenu = this.$pageBuy.find('.choose-menu')
        this.$item = this.$chooseMenu.find('.item')
        // for price part
        this.$price = this.$pageBuy.find('.price')
        this.$priceNow = this.$price.find('.now strong')
        this.$priceOld = this.$price.find('.old small')
      }
    },
    bindEvents: function () {
      this.$owlCarousel && this.$owlCarousel.owlCarousel(this.owlCarouselOpts())
      this.$item && this.$item.on('click', this.chooseItems.bind(this))
    },
    chooseItems: function (e) {
      var $target = $(e.target)
      var nowPrice = $target.data('price')
      var oldPrice = $target.data('old')
      this.$chooseMenu.find('.active').removeClass('active')
      $target.addClass('active')
      this.$priceNow.html(nowPrice)
      this.$priceOld.html(oldPrice)
    },
    owlCarouselOpts: function () {
      return {
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
          0: {
            items: 1
          },
          600: {
            items: 3
          },
          1000: {
            items: 5
          }
        }
      }
    }
  }

  pageBuyEffect.init()
})

/*
 * For page order
 * validate the form `#orderForm`
 * use happy.js
*/
$(document).ready(function () {
  var validateSignup = {
    init: function () {
      this.cacheElements()
      this.bindEvents()
    },
    cacheElements: function () {
      this.$orderPage = $('body.order')
      if (this.$orderPage) {
        this.$orderForm = this.$orderPage.find('#orderForm')
        // this.$datetimeInput = this.$orderForm.find('[type=datetime-local]')
      }
    },
    bindEvents: function () {
      this.$orderForm.isHappy(this.sigupValidateOpts())
      // this.$datetimeInput.attr('max', this.convertDate())
    },
    getDate: function () {
      var time = new Date()
      var date = addPrefixZero(time.getDate())
      return date
    },
    addPrefixZero: function (value) {
      if (value > 10) {
        return value
      } else {
        return '0' + value
      }
    },
    sigupValidateOpts: function () {
      return {
        classes: {
          message: 'warning'
        },
        fields: {
          '#car-license': {
            required: true,
            message: '请正确填写邮编号码',
            test: happy.carLicense,
            errorTarget: '.error-msg'
          },
          '#address': {
            required: true,
            message: '请填写正确的详细地址',
            test: happy.minLength,
            arg: [5],
            errorTarget: '.error-msg'
          },
          '#date': {
            required: true,
            message: '请选择一周内的时间',
            test: function (val) {
              var valDate = new Date(val)
              var nowDate = new Date()
              var afterOneWeek = nowDate.getTime() + 7*24*60*60*1000  // a week time
              var compareWeek = new Date(afterOneWeek)
              if (valDate > compareWeek) {
                return false
              } else {
                return true
              }
            },
            errorTarget: '.error-msg'
          },
          '#phone': {
            required: true,
            message: '请正确填写手机号',
            test: happy.CNPhone,
            errorTarget: '.error-msg'
          },
          '#vscode': {
            required: true,
            message: '请填写收到的短信验证码',
            test: happy.equalLength,
            arg: [6],
            errorTarget: '.error-msg'
          }
        }
      }
    }
  }

  validateSignup.init()
})

/*
 * For page signup
 * validate the form `#signupForm`
 * use happy.js
*/
$(document).ready(function () {
  var validateSignup = {
    init: function () {
      this.cacheElements()
      this.bindEvents()
    },
    cacheElements: function () {
      this.$pageSignup = $('body.signup')
      if (this.$pageSignup) {
        this.$signupForm = this.$pageSignup.find('#signupForm')
      }
    },
    bindEvents: function () {
      this.$signupForm && this.$signupForm.isHappy(this.sigupValidateOpts())
    },
    sigupValidateOpts: function () {
      return {
        classes: {
          message: 'warning'
        },
        fields: {
          '#name': {
            required: true,
            message: '请正确填写姓名',
            test: happy.minLength,
            arg: [3],
            errorTarget: '.error-msg'
          },
          '#phone': {
            required: true,
            message: '请正确填写手机号',
            test: happy.CNPhone,
            errorTarget: '.error-msg'
          },
          '#vscode': {
            required: true,
            message: '请填写收到的短信验证码',
            test: happy.equalLength,
            arg: [6],
            errorTarget: '.error-msg'
          }
        }
      }
    }
  }

  validateSignup.init()
})
