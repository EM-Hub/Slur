<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<style type="text/css">
html, body{
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
}
#container{
	width: 100%;
	height: 100%;
}
#box{
	width: 100%;
	height: 100%;
}
#header{
	width: 100%;
	height: 10%;
}
#menu{
	width: 100%;
	height: 15%;
}
#body{
	width: 100%;
	height: 70%;
}
h1, h2{
	margin: 0;
}
a{
	text-decoration: none;
	color: black;
}
a:hover{
	color: red;
	transition: .5s;
}
#bodyTitle{
	width: 50%;
	height: 10%;
	box-sizing: border-box;
	padding-top: 20px;
}
#bodyContent{
	width: 100%;
	height: 90%;
}
</style>
<script src="resources/js/jquery-1.10.2.js"></script>
</head>
<body>
<div id="container">
	<div id="box">
		<div id="header">
			<tiles:insertAttribute name="header"/>
		</div>
		<div id="menu">
			<tiles:insertAttribute name="menu"/>
		</div>
		<div id="body">
			<tiles:insertAttribute name="body"/>
		</div>
	</div>
</div>
</body>
</html>