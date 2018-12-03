//注册界面
//存在该用户, 不能注册、不存在则注册, 保存到cookie(cookie存储)
$(function() {	
		
	var users = $.cookie("users") ? JSON.parse($.cookie("users")) : [];
	
	$("#submit").click(function() {
		//是否阅读同意条款
		var checkboxOn=$("#checkbox").prop("checked");
		if (!checkboxOn) {
			$(".span_show").eq(0).html("*请您好好阅读用户协议");
			alert("没有阅读用户协议！");
			return;
		}
		else{
			$(".span_show").eq(0).html("");
		}
		
		
		//判断是否满足所有正则限定条件
		if (name_true&&email_true&&confirm_true&&qq_true&&phone_true&&code_true) {
			//注册用户
			var user = {
				name: $("#name").val(),
				emial: $("#emila").val(),
				QQ: $("#QQ").val(),
				phone: $("#phone").val(),
				pwd: $("#pwd").val()
			}
			users.push(user);	
			$.cookie("users", JSON.stringify(users), {expires: 22,path: "/"});
			$("#success_reg").slideDown(1000);
			//3秒页面刷新
			window.setTimeout(function  () {
				//跳转到登录界面
				window.location.href="../shopping_login/shopping_login.html";
//				window.location.assign("../shopping_login/shopping_login.html");
				//刷新当前页面
//				location.reload();
			},5000);
		}else{
			alert("输入信息格式有误，请重新输入！");
		}
		
	})


	//表单验证
	var name_true;//用户名
	var email_true;//邮件
	var confirm_true;//密码
	var qq_true;//qq
	var phone_true;//电话
	var code_true;//验证码
	//用户名
	$("#name").blur(function  () {
		var name=$(this).val();
		//判断是否存在该用户
		for(var i = 0; i < users.length; i++) {
			if(users[i].name == $("#name").val()) {
				$(".p_show").eq(0).html("*该用户名已经存在");
				name_true=false;
				return;
			}
		}
		//判断长度，给用户名长度一个限定条件
		if (name.length<3) {
			$(".p_show").eq(0).html("*用户名长度不能小于3");
			name_true=false;
		}
		else{
			$(".p_show").eq(0).html("*可以注册");
			name_true=true;
		}
	})
	
	//邮箱
	$("#emial").blur(function  () {
		var email=$(this).val();
		//邮箱格式正则表达式
		var reg=/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
		if (!reg.test(email)) {
			$(".p_show").eq(1).html("*请输入正确的邮箱");
			email_true=false;
		}
		else{
			$(".p_show").eq(1).html("*邮箱可以使用");
			email_true=true;
		}
	})
	//密码 以及确认密码
	$("#pwd").blur(function  () {
		var pwd=$(this).val();
		//判断长度，给用户名长度一个限定条件
		if (pwd.length<6) {
			$(".p_show").eq(2).html("*密码长度不能小于6");
		}
		else{$(".p_show").eq(2).html("*可以注册");}
	})
	//密码确认
	$("#confirm_pwd").blur(function  () {
		var pwd=$("#pwd").val();
		var confirm_pwd=$(this).val();
		//密码没输入为空时，不做判断
		if (pwd!="") {
			if (pwd==confirm_pwd) {
				$(".p_show").eq(3).html("*密码确认正确");
				confirm_true=true;
			}
			else{
				$(".p_show").eq(3).html("*密码输入不一致");
				confirm_true=false;
			}
		}
	})
	
	//qq验证
	$("#QQ").blur(function  () {
		var qq=$(this).val();
		var reg= /^[1-9]\d{4,9}$/;
		if (!reg.test(qq)) {
			$(".p_show").eq(4).html("*请输入正确的qq格式");
			qq_true=false;
		}
		else{
			$(".p_show").eq(4).html("*可以注册");
			qq_true=true;
		}
	})
	
	//手机格式验证
	$("#phone").blur(function  () {
		var phone=$(this).val();
		var reg=/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
		if (!reg.test(phone)) {
			$(".p_show").eq(5).html("*请输入正确手机格式");
			phone_true=false;
		}
		else{
			$(".p_show").eq(5).html("*可以注册");
			phone_true=true;
		}
	})
	
	//加载生成验证码方法
	$.idcode.setCode();
	$("#Txtidcode").blur(function  () {
	 var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
            $(".p_show").eq(6).html("*可以注册");
            code_true=true;
        }else {
            $(".p_show").eq(6).html("*验证码输入不正确");
            code_true=false;
        }
	})
})