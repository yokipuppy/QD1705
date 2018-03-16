//amd模块

define(["jquery","jquery-cookie"], function($){
	//声明一个主函数
	var check = function(obj,notice){
		//主页代码写在这里
		
			//首先要获取文本框中的内容 填写好密码和用户名 当我点击登录 进行和cookie的对比 对比两种
			//情况 没有这个用户名的cookie和  密码和用户名对不上
			// function checkName(){
				var username = obj.val();

					//当input失去焦点时验证
					//1、去除空格 将"空格" 用""替换
					//字符串不能被更改该方法会,返回一个新的字符串
					var newStr = obj.val().replace(/ /ig,"");
					obj.val(newStr);
					//2、判断用户名是否为空  //通过length来判断
					var len = newStr.length;
					if(!len){
						notice.html("用户名不能为空");
						notice.attr("class","red");

					}else if(len > 18 || len < 6) {
					//3、判断用户名长度  若不符合6~18个字符
						notice.html("用户名的长度为6~18个字符");
						notice.attr("class","red");

					}else if(/\d/.test(newStr[0])){
						//4、判断首位是否为数字 不可以为	数字 如果是
						notice.html("用户名首位字符不可以为数字");
						notice.attr("class","red");

					}else if (/_/.test(newStr[len-1])){
						//5、最后一个字符不能为下划线
						notice.html("用户名末位字符不可以为下划线");
						notice.attr("class","red");

					}else{
						//6、判断是不是都是数字、字母、下划线
						if(/\W/.test(newStr)){
							notice.html("用户名必须为数字、字母、下划线");
							notice.attr("class","red");
						
						}else{
							notice.html("成功");
							notice.attr("class","green");
							notice.removeClass("red");
						}
					}	
			// }

	


		
    }


		return{

			check: check

		}

})