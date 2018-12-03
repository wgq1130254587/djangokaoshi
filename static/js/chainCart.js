

//购物车功能
$(function() {
	
	//获取存储商品数据的cookie cart,判断是否存在商品cart
	var goodsList = $.cookie("cart");	
	if(goodsList) {
		
		//将json格式字符串的cookie解析
		goodsList = JSON.parse(goodsList);

		//遍历，创建添加节点，添加样式
		for(var i = 0; i < goodsList.length; i++) {
						
			//每个商品
			var goods = goodsList[i]; 
			var li1 = $("<li class='goodsli1' ><img class='goodsli1img' src='" + goods.img +"'/></li>");
			var li2 = $("<li class='goodsli2'>" + goods.name + "</li>");
			var li3 = $("<li class='goodsli3'>"+ goods.price + "</li>");
			var li4 = $("<li class='goodsli4'>" +goods.num + "</li>");
			var div=$("<div id='chain_sumdiv' class='clear'></div>");
			li1.appendTo(div);
			li2.appendTo(div);
			li3.appendTo(div);
			li4.appendTo(div);
			div.appendTo("#chainCart_li1");
		}

	}

	
	
	//清除购物车，cookie cart删除清空
	$("#clearCart").click(function() {
		
		//删除cookie cart
		$.cookie("cart", "", {expires: 0,path: "/"});
		
		
		//将存储购物车商品 还有结算 的节点给清空
		$("#chainCart_li1").empty();
		$("#chainPrice").empty();
		
	})
	
	
	
	//结算总价
	$("#priceButton").click(function  () {
		
		//点击前先清空
		$("#chainPrice").html("");
		
		
		//将价格里面的数字部分提取出来
		//遍历计算价格，添加
		var sumonprice=0;
		for (var i=0;i<goodsList.length;i++) {
			var goodsprice=goodsList[i].price.substring(0,6);
			var goodsnum=goodsList[i].num;
			var onprice=parseInt(goodsprice)*parseInt(goodsnum);
			sumonprice+=onprice;
		}
		var div= $("<span>￥"+sumonprice+".00</span>");
		div.appendTo("#chainPrice");
		
		
	})
	
	
})