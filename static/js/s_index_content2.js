//主页商品列表content2 getJson 数据
$(function  () {
	$.getJSON('index_json/index_content2_01.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con2_shopid' href='../shopping_introduce/shop_introduce.html?"+obj.idname+"'><img src=" + obj.img + "/><p class='con2_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con2_price_c'>" + "<span class='con2_pricename'>"+ obj.pricename +"</span><span class='con2_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con2_subgoods");
			$(".con2_goods").eq(0).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con2_shopid' href='../shopping_introduce/shop_introduce.html'><img src=" + obj.img + "/><p class='con2_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con2_price_c'>" + "<span class='con2_pricename'>"+ obj.pricename +"</span><span class='con2_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con2_subgoods");
			$(".con2_goods").eq(1).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_01.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con2_shopid' href='../shopping_introduce/shop_introduce.html'><img src=" + obj.img + "/><p class='con2_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con2_price_c'>" + "<span class='con2_pricename'>"+ obj.pricename +"</span><span class='con2_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con2_subgoods");
			$(".con2_goods").eq(2).append(div);
		}
		goods_opacity();
	})
	$.getJSON('index_json/index_content2_02.json',function  (data) {
		//遍历添加  动态
		for (var i=0;i < data.length; i++) {
			//将传进来的对象赋值给一个新的变量
			var obj=data[i];
			var div = $("<div><a class='con2_shopid' href='../shopping_introduce/shop_introduce.html'><img src=" + obj.img + "/><p class='con2_priceid'>" + obj.id + "</p>"+ "</a>"+"<p class='con2_price_c'>" + "<span class='con2_pricename'>"+ obj.pricename +"</span><span class='con2_price'>"+obj.price+"</span>" + "</p></div>");
			div.addClass("con2_subgoods");
			$(".con2_goods").eq(3).append(div);
		}
		goods_opacity();
	})
	//初始化
	$(".con2_goods").eq(0).fadeIn();
	$(".con2_list_li").eq(0).addClass("con2_tab_li");
	//tab切换
	$(".con2_list_li").mouseover(function  () {
		var index=$(this).index();
		$(this).addClass("con2_tab_li").siblings().removeClass("con2_tab_li");
		$(".con2_goods").eq(index).fadeIn().siblings(".con2_goods").hide();
	})
	
	//封装函数：移动到每个商品切换透明度的方法
	function goods_opacity () {
		//鼠标移动到每一个商品时候  注意  这个是在JSON获取的
		$(".con2_goods div").hover(function  () {
			$(this).css("opacity",1).siblings().css({"opacity":0.2});
		},function  () {
			$(".con2_goods div").css({"opacity":1});
		})
	}
})
