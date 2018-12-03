

//登录界面
$(function() {
	
	//判断是否选择记住登录状态，显示上次登录信息
	var c_keep_his=$.cookie("cookiehistory");	
	if (c_keep_his) {	
		c_keep_his=JSON.parse(c_keep_his);
		$("#loginname").val(c_keep_his[0].name1);
		$("#loginpwd").val(c_keep_his[0].pwd);
	}
	
	
	//判断是否存在该用户(匹配用户名和密码是否都一致)
	//点击登录
	$("#login_confirm").click(function() {
		
		//存储已注册的用户cookie
		var users = $.cookie("users");
		if(users) {
			
			//解释jison字符串格式成对象
			users = JSON.parse(users);
			
			//遍历是否存在该用户
			var isExists = false; 
			for(var i = 0; i < users.length; i++) {
				
				if(users[i].name == $("#loginname").val() && users[i].pwd == $("#loginpwd").val()) {					
					
					//是否选择记住登录状态
					//true 新建一个cookie来存储
					var cookiekeep=$("#cookiekeep").prop("checked");
					if (cookiekeep) {
						var cookiehistory = $.cookie("cookiehistory") ? JSON.parse($.cookie("cookiehistory")) : [];
						var subhistory= {
							name1: $("#loginname").val(),
							pwd: $("#loginpwd").val()
						}
						//cookie里面第一个替换
						cookiehistory.splice(0,1,subhistory);
						
						//cookie解释为json字符串
						$.cookie("cookiehistory", JSON.stringify(cookiehistory), {expires: 22,path: "/"});

					}
					if (!cookiekeep) {
						var cookiehistory = [];
						var subhistory= {
							name1: "",
							pwd: ""
						};
						cookiehistory.push(subhistory);
						$.cookie("cookiehistory", JSON.stringify(cookiehistory), { expires: 22, path: "/" })
					}

					

					//登录成功，跳转index.html
					isExists = true;
					window.location.href="../shopping_index/s_index.html";
				}
			}

			if(!isExists) {
				alert("用户名或密码错误, 请重新输入!");
			}

		} else {
			alert("请先注册!");
		}
	})

})