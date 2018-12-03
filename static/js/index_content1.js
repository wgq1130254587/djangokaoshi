//主页商品列表content1 getJson 数据
$(function() {
	$.getJSON('index_json/index_content1.json', function(data) {
		//遍历数据
		for(var i = 0; i < data.length; i++) {
			//data JSON对象
			var obj = data[i];
			var div = $("<div><a class='shopid' href='#'><img src=" + obj.img + "/><p class='priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='price_c'>" + "<span class='pricename'>"+obj.pricename+"</span>"+ "<span class='price'>"+obj.price+"</span>" + "</p>"+ "</div>");
			div.addClass("conten1_b_left_div");
			$(".conten1_b_left").eq(0).append(div);
		}
	})
	$.getJSON('index_json/index_content1_1.json', function(data) {
		//遍历数据
		for(var i = 0; i < data.length; i++) {
			//data JSON对象
			var obj = data[i];
			var div = $("<div><a class='shopid' href='#'><img src=" + obj.img + "/><p class='priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='price_c'>" + "<span class='pricename'>"+obj.pricename+"</span>"+ "<span class='price'>"+obj.price+"</span>" + "</p>"+ "</div>");
			div.addClass("conten1_b_left_div");
			$(".conten1_b_left").eq(1).append(div);
		}
	})
	//初始化
	$(".conten1_b_left").eq(0).show();
	$(".conten1_top ul li").last().addClass("tab_li");
	//tab切换
	$(".conten1_top ul li").eq(1).mouseover(function  () {
		$(this).addClass("tab_li").siblings().removeClass("tab_li").last().addClass("tab_li");
		$(".conten1_b_left").eq(0).show().siblings(".conten1_b_left").hide();
	})
	$(".conten1_top ul li").eq(2).mouseover(function  () {
		$(this).addClass("tab_li").siblings().removeClass("tab_li").last().addClass("tab_li");
		$(".conten1_b_left").eq(1).show().siblings(".conten1_b_left").hide();
	})
	$(".conten1_top ul li").eq(0).mouseover(function  () {
		$(this).addClass("tab_li").siblings().removeClass("tab_li").last().addClass("tab_li");
	})
	$(".conten1_top ul li").eq(3).mouseover(function  () {
		$(this).addClass("tab_li").siblings().removeClass("tab_li").last().addClass("tab_li");
	})
	$(".conten1_top ul li").eq(4).mouseover(function  () {
		$(this).addClass("tab_li").siblings().removeClass("tab_li").last().addClass("tab_li");
	})
})