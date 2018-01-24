window.onload = function (){

	//点击事件
	var abtns = $("btns").getElementsByTagName("li");
	console.log(abtns);
	for(var i = 0;i < abtns.length;i++){
		abtns[i].onclick = function(){
			for(var j = 0;j < abtns.length; j++){
				abtns[j].className = "";
			}
			this.className = "focus"; 
		}
	}

	/* ----------------------------用户名验证---------------------------*/

	$("e-address").onblur = function (){
		//当input失去焦点时验证
		//1、去除空格 将"空格" 用""替换
		//字符串不能被更改该方法会,返回一个新的字符串
		var newStr = $("e-address").value.replace(/ /ig,"");
	
		$("e-address").value = newStr;
		//2、判断用户名是否为空  //通过length来判断

		if(!newStr.length){
			$("prompt").innerHTML = "用户名不能为空";
			$("prompt").className = "red";

		}else if(newStr.length > 18 || newStr.length < 6) {
		//3、判断用户名长度  若不符合6~18个字符
			$("prompt").innerHTML = "用户名的长度为6~18个字符";
			$("prompt").className = "red";

		}else if(/\d/.test(newStr[0])){
			//4、判断首位是否为数字 不可以为数字 如果是
			$("prompt").innerHTML = "用户名首位字符不可以为数字";
			$("prompt").className = "red";

		}else if (/_/.test(newStr[newStr.length - 1])){
			//5、最后一个字符不能为下划线
			$("prompt").innerHTML = "用户名末位字符不可以为下划线";
			$("prompt").className = "red";

		}else{
			//6、判断是不是都是数字、字母、下划线
			// for(var i = 0;i < newStr.length; i++){
				if(/\W/.test(newStr)){
					$("prompt").innerHTML = "用户名必须为数字、字母、下划线";
					$("prompt").className = "red";
				
				}else{
					$("prompt").innerHTML = "用户名验证成功";
					$("prompt").className = "green";
				}
			// }
		}	
	}
/*-----------------------------密码验证---------------------------*/

	$("pw").onblur = function(){
		//获取到输入的密码
		var psw = $("pw").value;
		//判断密码 是否是6~18个字符
		if(psw.length < "6" || psw.length > "18"){
			$("pwpro").innerHTML = "密码必须为6~18个字符";
			$("pwpro").className = "red";
		}else{
			//判断密码是否过于简单 数字+字母 是否全是数字 或全是字母			
			if(!/\D/.test(psw)){
				$("pwpro").innerHTML = "密码过于简单，请尝试“字母+数字”的组合";
				$("pwpro").className = "red";
			 	$("pw").className = "redBox";
			}else if(!/[^a-z]/ig.test(psw)){
				$("pwpro").innerHTML = "密码过于简单，请尝试“字母+数字”的组合";
				$("pwpro").className = "red";
			 	$("pw").className = "redBox";
			 }else{
			 	$("pwpro").innerHTML = "成功";
				$("pwpro").className = "green";
				$("pw").className = "";
			}
			 
			 
		}
	}
	//确认密码的检测
	$("dpw").onblur = function(){
		//获取确认密码
		var dpsw = $("dpw").value;
		if(dpsw.length == "0"){
			$("dpwpro").innerHTML = "请两次填入密码";
			$("dpwpro").className = "red";
			$("dpw").className = "redBox";
		}else{
			if(dpsw.length != $("pw").value.length){
				$("dpwpro").innerHTML = "两次输入的密码不一致";
				$("dpwpro").className = "red";
				$("dpw").className = "redBox";
			}else{
				if(dpsw != $("pw").value){
					$("dpwpro").innerHTML = "两次输入的密码不一致";
					$("dpwpro").className = "red";
					$("dpw").className = "redBox";
				}else{
					$("dpwpro").innerHTML = "成功";
					$("dpwpro").className = "green";
				}
			}
		}
			
	}
}


function $ (id){
	return document.getElementById(id);
}
