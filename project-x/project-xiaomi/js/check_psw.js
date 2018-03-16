define(["jquery"], function($){

	var check_psw = function(obj,notice){

		/*-----------------------------密码验证---------------------------*/

		
			//获取到输入的密码
			var oPsw = obj.val();
			//判断密码 是否是6~18个字符
			if(oPsw.length < "6" || oPsw.length > "18"){
				notice.html("密码必须为6~18个字符");
				notice.attr("class","red");
			}else{
				//判断密码是否过于简单 数字+字母 是否全是数字 或全是字母			
				if(!/\D/.test(oPsw)){
					notice.html("密码过于简单，请尝试“字母+数字”的组合");
					notice.attr("class","red");
				 	obj.attr("class","redBox");
				}else if(!/[^a-z]/ig.test(oPsw)){
					$("pwpro").html("密码过于简单，请尝试“字母+数字”的组合");
					notice.attr("class","red");
				 	obj.attr("class","redBox");
				 }else{
				 	notice.html("成功");
					notice.attr("class","green");
					obj.removeClass('redBox');
				}
				 
				 
			}
	}


	return {

		check_psw: check_psw

	}


})