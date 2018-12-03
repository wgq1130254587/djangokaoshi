//主页商品列表content2 getJson 数据
$(function  () {
	$.getJSON('index_json/index_content2_01.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con3_shopid' href='#'><img src=" + obj.img + "/><p class='con3_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con3_price_c'>" + "<span class='con3_pricename'>"+ obj.pricename +"</span><span class='con3_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con3_subgoods");
			$(".con3_goods").eq(0).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con3_shopid' href='#'><img src=" + obj.img + "/><p class='con3_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con3_price_c'>" + "<span class='con3_pricename'>"+ obj.pricename +"</span><span class='con3_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con3_subgoods");
			$(".con3_goods").eq(1).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_01.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con3_shopid' href='#'><img src=" + obj.img + "/><p class='con3_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con3_price_c'>" + "<span class='con3_pricename'>"+ obj.pricename +"</span><span class='con3_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con3_subgoods");
			$(".con3_goods").eq(2).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con3_shopid' href='#'><img src=" + obj.img + "/><p class='con3_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con3_price_c'>" + "<span class='con3_pricename'>"+ obj.pricename +"</span><span class='con3_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con3_subgoods");
			$(".con3_goods").eq(3).append(div);
		}
		goods_opacity();
	})
	//初始化
	$(".con3_goods").eq(0).fadeIn();
	$(".con3_list_li").eq(0).addClass("con3_tab_li");
	//tab切换
	$(".con3_list_li").mouseover(function  () {
		var index=$(this).index();
		$(this).addClass("con3_tab_li").siblings().removeClass("con3_tab_li");
		$(".con3_goods").eq(index).fadeIn().siblings(".con3_goods").hide();
	})
	
	//封装函数：移动到每个商品切换透明度的方法
	function goods_opacity () {
		//鼠标移动到每一个商品时候  注意  这个是在JSON获取的
		$(".con3_goods div").hover(function  () {
			$(this).css("opacity",1).siblings().css("opacity",0.2);
		},function  () {
			$(".con3_goods div").css("opacity",1);
		})
	}
})
