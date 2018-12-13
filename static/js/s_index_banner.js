//index 主页 banner 左边下拉框
$(function  () {
	//移动到的时候显示下拉框
	//安福电商城
	$(".b_l_xiala:eq(0),#banner_xiala1").mouseover(function  () {
		$(".b_l_xiala:eq(0)").css({"border":"#C40000 solid 1px","border-right":"2px solid white","position":"relative"});
		$("#banner_xiala1").show();
	})
	$(".b_l_xiala:eq(0),#banner_xiala1").mouseout(function  () {
		$(".b_l_xiala:eq(0)").css({"border":"none","border-right":"none","border-bottom":"solid 1px #999999","position":"static"});
		$("#banner_xiala1").hide();
	})
	//特产汇
	$(".b_l_xiala:eq(1),#banner_xiala2").mouseover(function  () {
		$(".b_l_xiala:eq(1)").css({"border":"#C40000 solid 1px","border-right":"2px solid white","position":"relative"});
		$("#banner_xiala2").show();
	})
	$(".b_l_xiala:eq(1),#banner_xiala2").mouseout(function  () {
		$(".b_l_xiala:eq(1)").css({"border":"none","border-right":"none","border-bottom":"solid 1px #999999","position":"static"});
		$("#banner_xiala2").hide();
	})
	//
	$(".b_l_xiala:eq(2),#banner_xiala3").mouseover(function  () {
		$(".b_l_xiala:eq(2)").css({"border":"#C40000 solid 1px","border-right":"2px solid white","position":"relative"});
		$("#banner_xiala3").show();
	})
	$(".b_l_xiala:eq(2),#banner_xiala3").mouseout(function  () {
		$(".b_l_xiala:eq(2)").css({"border":"none","border-right":"none","border-bottom":"solid 1px #999999","position":"static"});
		$("#banner_xiala3").hide();
	})
})


//index 主页 banner 轮播图  上层
$(function() {
	//获取数据 将轮播图 上层top 动态获取
	$.getJSON("index_json/banner_lunbo1.json", function(data) {
		//遍历, 添加li
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			$("#list_lunbo").append(li).addClass("hidden");
		}
	})
	//轮播图
	var i=0;
	var timer=window.setInterval(function  () {
		i++;
		show();
	},4000);
	//封装一个方法，让图片改变
	function show () {
		var list_max=$("#list_lunbo li");
		if (i==list_max.length) {
			i=0;
		}
		list_max.eq(i).fadeIn(200).siblings().fadeOut(100);
		$("#list_button li").eq(i).css("background","#ff3300").siblings().css("background","grey");
	}
	//鼠标点击轮播图小按钮的时候
	$("#list_button li").eq(0).css("background","#ff3300");
	$("#list_button li").click(function  () {
		clearInterval(timer);
		var index=$(this).index();
		i=index;
		show();
		timer=window.setInterval(function  () {
			i++;
			show();
		},4000);
	})
})
//index 主页 banner 轮播图  下层
$(function() {
	//获取数据 将轮播图 上层top 动态获取
	$.getJSON("index_json/banner_lunbo2.json", function(data) {
		//遍历, 添加li
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			var li = $("<li><img src=" + obj.img + " /></li>");
			li.css("float","left");
			$("#lunbo_bottom").append(li).addClass("hidden");
		}

		//移入移出效果要放在里面，不然获取不到值
		//移入移出改变透明度,并且停止轮播，移出恢复正常，启动轮播
		$("#lunbo_bottom li").hover(function  () {
			clearInterval(timer);
			$(this).siblings().css("opacity",0.4);
		},function  () {
			$("#lunbo_bottom li").css("opacity",1);
			timerShow();
		})
	})


	//移动的函数
	function move() {
		//!!!注意size在外边取不到
		var size = $("#lunbo_bottom li").length;

		//如果超出了最后的图片
		if(x >=size) {
			$("#lunbo_bottom").stop().animate({
			   left: "+=0"
			}, 1000);
			x = 0; //即将移动到第2张图(x=1)
		}
		//移动到第i张图
		$("#lunbo_bottom").stop().animate({
			left: -x * 256
		}, 800);
	}
	//封装定时器方法
	//轮播图
	 function timerShow () {
		 timer=window.setInterval(function  () {
			x++;
			move();
		},4000);
	}
	//加载完调用
	var x=0;
	var timer=0;
	timerShow();
})
