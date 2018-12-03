//头部和尾部js jq 代码
$(function() {
	//微信下拉框
	$(".logo_left span:eq(3),#weixin").hover(function() {
		$("#weixin").show();
	}, function() {
		$("#weixin").hide();
	})

	//鼠标移动到logo right 的 a 标签时
	//我的信息
	$(".logo_right ul li:eq(0),#my_news1 ").hover(function() {
		$(".logo_right ul li:eq(0)").css({
			"background": "white",
			"position": "relative",
			"top": "1px"
		});
		$("#my_news1").show();
	}, function() {
		$(".logo_right ul li:eq(0)").css({
			"background": "none",
			"position": "static",
			"top": "0px"
		});
		$("#my_news1").hide();
	})
	//收藏夹
	$(".logo_right ul li:eq(3),#my_news2 ").hover(function() {
		$(".logo_right ul li:eq(3)").css({
			"background": "white",
			"position": "relative",
			"top": "1px"
		});
		$("#my_news2").show();
	}, function() {
		$(".logo_right ul li:eq(3) ").css({
			"background": "none",
			"position": "static",
			"top": "0px"
		});
		$("#my_news2").hide();
	})
	//商家支持
	$("#shangjia,#my_news4").hover(function() {
		$("#shangjia").css({
			"background": "white",
			"position": "relative",
			"top": "1px"
		});
		$("#my_news4").show();
	}, function() {
		$("#shangjia").css({
			"background": "none",
			"position": "static",
			"top": "0px"
		});
		$("#my_news4").hide();
	})
	
	$(".s_n_img2 ").hover(function  () {
		$(this).stop().animate({"opacity":0.3},1000);
	},function  () {
		$(this).stop().animate({"opacity":1},1000);
	})
})