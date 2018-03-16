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


require(["check","jquery","jquery-cookie"],function(check,$){

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


            /*==============代码检测===========*/


			//添加 失去焦点事件   当失去焦点 进行判断
				$("#username").blur(function(){
                    check.check($("#username"),$("#notice"));
				});
			/*	
				用户名验证 使用cookie验证 
				输入文本框中的和cookie中的做对比
			*/
				//给登录按钮添加click事件
				$("#submit").click(function(){
					//当我点击 登录按钮  进行验证
					//如果验证成功 执行submit的默认的行为return true  否则 return false

                    var username = $("#username").val();
                    var psw = $("#psw").val();
					if($("#notice").attr("class") == "green"){
                        //获取该用户名的cookie
                        var str = eval($.cookie(username));
                        if(str){
                            //如果存在说明注册过 进一步核对密码
                            console.log(str);
                            if(psw == str.psw){
                                alert("登录成功");
                            }else{
                                alert("密码不正确");
                            }


                        }else{
                            alert("用户名不存在，请先注册");
                        }

						return false;
					}else{
						return false;
					}
				})



			
		})

})

// //要去调用index-login.js中的main函数
// require(["check"], function(check){
// 	console.log("成功");
// })
