<?php
	<header("content-type:text/html;charset='utf-8'");

	$username = $_POST["username"];
	$psw = $_POST["psw"];
	$repsw = $_POST['repsw'];

	$con = mysql_connect("localhost","root",123456);

	if(!$con){
		echo "error";
		exit;
	}else{
		echo "success";
	}

	mysql_select_db("qd1705");

	$sql = "SELECT psw FROM users WHERE username='$username';";

	$psw_value = mysql_query($sql);

	//对返回的密码进行判断
	if($psw_value == $psw){

		echo "恭喜你,登录成功";

	}else{
		
		echo "登录失败,用户名或密码不正确";
	}
?>