var indexTpl = require('../tpl/index.string');
var Swiper = require("../lib/swiper-3.3.1.min.js");
window.onload = function(){
	var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: 4000,//可选选项，自动滑动
    // 如果需要分页器
    pagination: '.swiper-pagination',
 	});
};

SPA.defineView('index', {
  html: indexTpl,
  plugins: ['delegated'],
  bindActions: {
    'exit': function () {
      	this.hide();
    }
  }
});