var orderTpl = require('../tpl/order.string');

SPA.defineView('order',{
	html:orderTpl,
	plugins: ['delegated'],
	// 初始化视图属性和方法
	init: {
	  mySwiper: null,
	  setActive: function (obj) {
	    obj.addClass('active').siblings().removeClass('active');
	  }
	},
	bindActions:{
		'switch.order':function(e){
			this.setActive($(e.el));
			this.mySwiper.slideTo($(e.el).index()-1);
		}
	},
	bindEvents:{
		'beforeShow': function(){
			//swiper
			this.mySwiper = new Swiper ('#order-swiper', {
			    direction: 'horizontal',
			    loop: false,
			    onSlideChangeStart: function (swiper) {
		          $('.order-menu').eq(swiper.activeIndex)
		            .addClass('active').siblings().removeClass('active');
		        }
		   	});
		}
	}
});