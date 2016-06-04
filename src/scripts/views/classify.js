var classifyTpl = require('../tpl/classify.string');

SPA.defineView('classify',{
	html:classifyTpl,
	plugins:['delegated'],
	// 初始化视图属性和方法
	init: {
	  indexSwiper: null,
	  setActive: function (obj) {
	    obj.addClass('active').siblings().removeClass('active');
	  }
	},
	bindActions:{
		'switch.swiper':function(e){
			this.setActive($(e.el));
			$("#switch-list>li").eq($(e.el).index())
            .addClass('show').siblings().removeClass('show');
		}
	}
});