//主页商品列表content7 getJson 数据
$(function  () {
	$.getJSON('index_json/index_content2_01.json',function  (data) {

		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con7_shopid' href='#'><img src=" + obj.img + "/><p class='con7_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con7_price_c'>" + "<span class='con7_pricename'>"+ obj.pricename +"</span><span class='con7_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con7_subgoods");
			$(".con7_goods").eq(0).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con7_shopid' href='#'><img src=" + obj.img + "/><p class='con7_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con7_price_c'>" + "<span class='con7_pricename'>"+ obj.pricename +"</span><span class='con7_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con7_subgoods");
			$(".con7_goods").eq(1).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_01.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con7_shopid' href='#'><img src=" + obj.img + "/><p class='con7_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con7_price_c'>" + "<span class='con7_pricename'>"+ obj.pricename +"</span><span class='con7_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con7_subgoods");
			$(".con7_goods").eq(2).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con7_shopid' href='#'><img src=" + obj.img + "/><p class='con7_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con7_price_c'>" + "<span class='con7_pricename'>"+ obj.pricename +"</span><span class='con7_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con7_subgoods");
			$(".con7_goods").eq(3).append(div);
		}
		goods_opacity();
	})
	//初始化
	$(".con7_goods").eq(0).fadeIn();
	$(".con7_list_li").eq(0).addClass("con7_tab_li");
	//tab切换
	$(".con7_list_li").mouseover(function  () {
		var index=$(this).index();
		$(this).addClass("con7_tab_li").siblings().removeClass("con7_tab_li");
		$(".con7_goods").eq(index).fadeIn().siblings(".con7_goods").hide();
	})
	
	//封装函数：移动到每个商品切换透明度的方法
	function goods_opacity () {
		//鼠标移动到每一个商品时候  注意  这个是在JSON获取的
		$(".con7_goods div").hover(function  () {
			$(this).css("opacity",1).siblings().css("opacity",0.2);
		},function  () {
			$(".con7_goods div").css("opacity",1);
		})
	}
})
