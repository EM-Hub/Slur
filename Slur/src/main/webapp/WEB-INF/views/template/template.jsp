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
	height: 90px;
}
#menu{
	width: 100%;
	height: 110px;
}
#body{
	width: 100%;
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
	height: 60px;
	box-sizing: border-box;
	padding-top: 20px;
}
#bodyContent{
	width: 100%;
	height: 90%;
	padding-top: 20px;
	box-sizing: border-box;
}
</style>
<script src="resources/js/jquery-1.10.2.js"></script>
<link rel="stylesheet" href="resources/fontello-e8ba038f/css/fontello-embedded.css">
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