require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"jquery-cookie":"jquery.cookie",
		"check":"check"
	},
	//处理依赖
	shim:{
		"jquery-cookie":["jquery"]
	}
})


require(["jquery","check"],function($,check){

		$(function(){

			/*=========================选项卡功能=========================*/

			//获取账号登录这个按钮
			//给按钮添加点击事件
			$("#btn").find("a").click(function(){
				//alert(1);
				//当我点击
				//将其他的按钮的class颜色清空
				$("#btn").find("a").removeClass("orange");
				//获取到两个选项卡 让他们隐藏
				$("#tab").find("article").css("display","none");
				//console.log($(this));
				$(this).addClass("orange");
				//将#tab 下的对应div显示
				//console.log($("#tab").find("article").eq($(this).index()));
				$("#tab").find("article").eq($(this).index()).css("display","block");
			})


			//添加 失去焦点事件   当失去焦点 进行判断
				$("#username").blur(function(){
					check.check($("#username"),$("#notice"));
				});
			/*	
				用户名验证 使用cookie验证 
				输入文本框中的和cookie中的做对比
			*/
				//添加click事件
				$("#submit").click(function(){
					//当点击登录按钮跟cookie对比
					//获取cookie
					var first = $.cookie("username") == null ? true : false;
					if(first){
						$("#notice").html("用户名或密码不正确");
						$("#notice").attr("class","red");
					}else{
						//如果有这个cookie

					}
				})

			
		})

})

//要去调用index-login.js中的main函数
require(["check"], function(check){
	console.log("成功");
})
