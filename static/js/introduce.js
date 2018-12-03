

//获取对应idname,导入商品详情数据
$(function  () {
	
	//location.search来获取 ？...字符串
	var idname=location.search.substring(1);
	
	//json接口，数据进行idname对象分析匹配
	$.getJSON("../shopping_introduce/introduce.json",function  (data) {
		//遍历匹配，创建节点内容
		for (var i=0;i<data.length;i++) {
			if (data[i].idname==idname) {
				$("#introducePrice_text1").html(data[i].name);
				$("#introducePrice_text2").html(data[i].price);
				$("#bigImg").attr("src",data[i].img);
				$("#smallImg").css({"background":data[i].backgroundimg,"background-size":"cover"});
			}
		}
	})


})


//放大镜效果
$(function() {

	//获取四个JQ对象
	var smallImg = $("#smallImg");
	var smallArea = $("#smallArea");
	var bigImg = $("#bigImg");
	var bigArea = $("#bigArea");

	//给放大镜框的宽高赋值，根据比例
	smallArea.width(smallImg.width() / bigImg.width() * bigArea.width());
	smallArea.height(smallImg.height() / bigImg.height() * bigArea.height());

	//需要放大的倍数
	var space = bigImg.width() / smallImg.width();

	//鼠标移入到smallImg时放大镜
	smallImg.mousemove(function(e) {

		//计算放大镜框的位置
		var s_left = e.pageX - smallImg.offset().left - smallArea.width() / 2;
		var s_top = e.pageY - smallImg.offset().top - smallArea.height() / 2;

		//还要做个判断，放大镜的 left 和 top 不能超出当前框的边界
		if(s_left < 0) {
			s_left = 0;
		} else if(s_left > smallImg.width() - smallArea.width()) {
			s_left = smallImg.width() - smallArea.width();
		}
		if(s_top < 0) {
			s_top = 0;
		} else if(s_top > smallImg.height() - smallArea.height()) {
			s_top = smallImg.height() - smallArea.height();
		}

		//将放大镜的位置赋值  left top
		//并且经放大镜显示出来
		smallArea.fadeIn().css({
			"left": s_left,
			"top": s_top
		});
		bigArea.fadeIn();
		//将另一个框框也赋值显示
		bigImg.css({
			"left": -s_left * space,
			"top": -s_top * space
		});
	})

	//鼠标移出
	smallImg.mouseleave(function() {
		smallArea.fadeOut();
		bigArea.fadeOut();
	})
})


//加入购物车、查询购物车
$(function() {

	//点击加入购物车
	$("#cart").click(function() {
	
		//点击的商品加入购物车(cookie存储商品信息)
		
		
		//商品图片、商品名字、 商品价格
		var introduceimg=$(this).parents("#introducePrice").siblings("#bigArea").children("#bigImg").attr("src");
		var goodsName = $(this).siblings("#introducePrice_text1").html(); 
		var goodsPrice = $(this).siblings("#introducePrice_text2").html().substring(13);


		//第一次加入购物车(购物车中还没有商品, cookie中没有cart), 给一个空数组
		//第二次加入购物车(购物车中存在商品, cookie中有cart),则在cart的基础上再添加商品
		//取得cookie的时候要对cookie进行字符串解析，或者直接给一空数组
		var goodsList = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
		


		//判断购物车中是否存在即将添加的商品，遍历cookie里面存有的商品		
		var isExists = false; 
		for(var i = 0; i < goodsList.length; i++) {
			//如果存在相同的商品, 则把数量++, 不需要重新添加新的商品
			if(goodsName == goodsList[i].name) {
				goodsList[i].num++;
				//存在相同商品
				isExists = true; 
			}
		}

		//不存在相同商品, 则添加新商品
		if(!isExists) {
			//添加一个新商品到购物车
			var goods = {
				img:introduceimg,
				name: goodsName,
				price: goodsPrice,
				num: 1				
			}
			//添加到数组后面
			goodsList.push(goods);
		}
		console.log(goodsList);
		//将cookie转换成json字符串保存
		$.cookie("cart", JSON.stringify(goodsList), {expires:22,path:"/"});
		

	})



	//购物车查询、结算页面
	$("#chainCart").click(function() {
		location.href ="../shopping_chainCart/chainCart.html";
	})
	
	
})


//加入购物车,飞动效果（插件配置）
$(function() {
	
	//结束的地方的元素
	var offset = $("#end").offset();  
	
	 //是$("#cart")这个元素点击促发的 开始动画的位置就是这个元素的位置为起点
	$("#cart").click(function(event){  
		var addcar = $(this);
		var img = addcar.parents("#introducePrice").siblings("#bigArea").children("#bigImg").attr("src");
		var flyer = $('<img class="u-flyer" src="'+img+'">');
		flyer.fly({
			start: {
				left: event.pageX,
				top: event.pageY
			},
			end: {
				left: offset.left,
				top: offset.top,
				width: 0,
				height: 0
			},
			onEnd: function(){
				$("#msg").show().animate({width: '250px'}, 500).fadeOut(1000);
			}
		});
	});
  
})
