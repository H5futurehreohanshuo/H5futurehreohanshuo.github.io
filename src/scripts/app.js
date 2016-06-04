require('./lib/spa.min.js');
require("./lib/swiper-3.3.1.min.js");

require('./views/guide.js');
require('./views/index.js');
require('./views/classify.js');
require('./views/order.js');
require('./views/my.js');
require('./views/home.js');


//配置视图信息,默认为index
var indexView = SPA.util.storage('isVisited') ? 'index' : 'guide';
SPA.config({
	indexView : indexView  //选择第一个页面进哪个
});

window.onload = function(){
	var mySwiper = new Swiper ('#guide-swiper', {
	    direction: 'horizontal',
	    pagination: '.swiper-pagination'
   	});
};