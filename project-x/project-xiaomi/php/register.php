<?php
	header("content-type:text/html;charset='utf-8'");

	$username = $_POST["username"];
	$psw = $_POST["psw"];
	$repsw = $_POST['repsw'];

	//登录数据库
	//第一个参数：数据库的主机名  更改成ip地址
	//声明一个变量 接收一下连接的状态
	$con = mysql_connect("localhost","root",123456);

	//判断是否成功
	if(!$con){
		echo "error";
		exit;

	}else{
		echo "success";

	}
	//选择数据库的名字
	mysql_select_db('qd1705');
	//拼接语句  不要忘记分号
	$sql = "INSERT INTO users VALUES('$username','$psw','$repsw');";

	//将语句 丢给数据
	$is_ok = mysql_query($sql);

	if($is_ok == true){
		echo "恭喜你，添加成功";
	}else{
		echo "添加失败";
	}

?>