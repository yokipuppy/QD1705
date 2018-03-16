require.config({
	paths:{
		"jquery":"jquery-1.11.1",
		"jquery-cookie":"jquery.cookie",
		"check":"check",
		"check_psw":"check_psw"
	},
	//处理依赖
	shim:{
		"jquery-cookie":["jquery"]
	}
})



require(["jquery","check","check_psw"],function($,check,check_psw){

	$(function(){
		$("#username").blur(function(){
			//alert(1);
			//检测用户名
			 check.check($("#username"),$("#notice"));
		});
		$("#psw").click(function(){
			check_psw.check_psw($("#psw"),$("#notice1"));
		})
	})

})


require(["jquery"],function($){
	$(function(){
		$("#repsw").blur(function(){
			
			//console.log($("#psw").val().length);
			//获取确认密码
			var dpsw = $("#repsw").val();
			var notice = $("#notice2");
			if(dpsw.length == "0"){
				notice.html("请两次填入密码");
				notice.attr("class","red");
				$("#repsw").attr("class","redBox");
			}else{
				if(dpsw.length != $("#psw").val().length){
					$("dpwpro").html("两次输入的密码不一致");
					notice.attr("red");
					$("#repsw").attr("class","redBox");
				}else{
					if(dpsw != $("#psw").val()){
						notice.html("两次输入的密码不一致");
						notice.attr("red");
						$("#repsw").attr("class","redBox");
					}else{
						notice.html("成功");
						notice.attr("class","green");
					}
				}
			}
				
		})
	})

})

require(["jquery","jquery-cookie"], function($){

	$(function(){
		//给立即注册按钮添加点击事件
		$("#btn_r").click(function(){
				
			
			if($("#notice").attr("class") == "green" && $("#notice1").attr("class") == "green" && 
				$("#notice2").attr("class") == "green"){

                var username = $("#username").val();
                var psw = $("#psw").val();

			    //先判断有没有被注册过
                var str = $.cookie(username);
                if(str){
                    //如果存在
                    alert("用户名已经存在");
                }else{
                    //创建一条cookie
                    $.cookie(username,psw,{
                        expires:7
                    });
                    alert("恭喜你，注册成功");
                }
			    return false;
			}else{
				return false;
			}


	    })


	})

})
	
		


	



