<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
#headerL{
	height: 100%;
	width: 70%;
	display: inline-block;
	padding: 20px;
	box-sizing: border-box;
}
#headerR{
	height: 100%;
	width: 30%;
	display: inline-block;
	float: right;
	padding-top: 20px;
	padding-right: 50px;
	box-sizing: border-box;
}
span{
	font-size: 23px;
	font-weight: bold;
}
</style>
</head>
<body>
<div id="container">
	<div id="headerL">
		<a href="mainPage.do"><h1>Slur</h1></a>
	</div>
	<div id="headerR" align="right">
		<a href="loginPage.do"><span>Login</span></a>&emsp;
		<a href="joinPage.do"><span>Join</span></a>
	</div>
</div>
</body>
</html>