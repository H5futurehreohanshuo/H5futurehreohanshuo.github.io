var indexTpl = require('../tpl/index.string');

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  
  //子视图嵌套定义
  modules:[{
  	name: 'content',
  	container: '.m-index-container',
  	views: ['home','classify','order','my'],
  	defaultTag: 'home'
  }],
  
  bindActions: {
//  'exit': function () {
//    	this.hide();
//  }
		'switch.view': function(e){
			this.modules.content.launch(e.data.tag);
		},
		'toClassify':function(){
			this.modules.content.launch("classify");
		}
  },
  
  //视图的事件绑定
//	bindEvents:{
//		'beforeShow':function(){
//			var mySwiper = new Swiper ('#index-banner', {
//			    direction: 'horizontal',
//			    loop: true,
//			    autoplay: 4000,//可选选项，自动滑动
//			    autoplayDisableOnInteraction:false,
//			    // 如果需要分页器
//			    pagination: '.swiper-pagination',
//		   	});
//		}
//	}
});

window.addEventListener('mousemove',function(ev){
	ev.preventDefault();
});