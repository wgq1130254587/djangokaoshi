

//首页搜索框的吸顶
$(function() {
	//获取吸取元素相对当前窗口的top
	var _boxTop = $(".banner").offset().top;
	$(window).scroll(function() {
		//获取window滚动的px
		var _scrollTop = $(window).scrollTop();
		//做判断：吸取置顶  还原
		if(_scrollTop >= _boxTop) {
			$("#s_xiding").slideDown();
		} else {
			$("#s_xiding").slideUp();
		}
	})
})

//点击回到顶部,缓冲效果
$(function() {
	$("#sidebar7").click(function  () {
//		$(window).scrollTop(0);
//		$(window).stop().animate({"scrollTop":"-=0"},2000);//jq中没有实现滚动条动画		
		var timer=0;
		var scrolltop=$(window).scrollTop();
		function scrollone () {						
			timer=setInterval(function  () {
				scrolltop-=100;
				if (scrolltop<=0) {
					$(window).scrollTop(0);
					clearInterval(timer);
				}
				$(window).scrollTop(scrolltop);
			},15);
		}
		scrollone();
	});
})