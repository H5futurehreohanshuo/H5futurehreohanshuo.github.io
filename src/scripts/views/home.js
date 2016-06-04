var homeTpl = require('../tpl/home.string');
SPA.defineView('home',{
	html:homeTpl,
	
	plugins:['delegated',{
		name:'avalon',
		options: function(vm){
			vm.livelist = [];
		}
	}],
	
	bindEvents:{
		'beforeShow': function(){
			//mock数据
			var vm = this.getVM();
			$.ajax({
				url:'/api/getlivelist.php',
				success:function(res){
					var data = res.data;
					var tempArr=[];
					for(var i =0;i<Math.ceil(data.length/2);i++){
						tempArr[i] = [];
						tempArr[i][0] = data[2*i];
						tempArr[i][1] = data[2*i+1];
					}
					//console.log(tempArr);
					vm.livelist = tempArr;
				}
			});
			
			//swiper
			var mySwiper = new Swiper ('#index-banner', {
			    direction: 'horizontal',
			    loop: true,
			    autoplay: 4000,//可选选项，自动滑动
			    autoplayDisableOnInteraction:false,
			    // 如果需要分页器
			    pagination: '.swiper-pagination',
		   	});
		}
	},
});