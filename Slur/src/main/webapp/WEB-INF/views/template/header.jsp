<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
	font-size: 20px;
	font-weight: bold;
}
#logout:hover{
	color: red;
	transition: .5s;
	cursor: pointer;
}
.icon-home{
	font-size: 20px;
}
</style>
<script type="text/javascript">
$(document).on("click","#logout", function(){
	if(confirm("로그아웃 하시겠습니까?") == true){
		location.href = 'logout.do';
	}else{
		return;
	}
});
</script>
</head>
<body>
<div id="container">
	<div id="headerL">
		<a href="mainPage.do"><h1>Slur</h1></a>
	</div>
	<div id="headerR" align="right">
		<c:if test="${sessionScope.loginMember eq null }">
			<a href="mainPage.do"><i class="icon-home"></i></a>&emsp;
			<a href="loginPage.do"><span>Login</span></a>&emsp;
			<a href="joinPage.do"><span>Join</span></a>
		</c:if>
		<c:if test="${sessionScope.loginMember ne null }">
			${sessionScope.loginMember.memberName }님 반갑습니다!&emsp;
			<a href="mainPage.do"><i class="icon-home"></i></a>&emsp;
			<a href="myInfoPage.do"><span>마이페이지</span></a>&emsp;
			<span id="logout">Logout</span>
		</c:if>
	</div>
</div>
</body>
</html>