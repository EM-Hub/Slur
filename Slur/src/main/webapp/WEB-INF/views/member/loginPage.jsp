<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/loginPage.css">
<script src="resources/js/loginPage.js"></script>
</head>
<body>
<div id="container" align="center">
	<div id="bodyTitle" align="left">
		<h2>로그인</h2>
	</div>
	<div id="bodyContent" align="center">
	<form action="login.do" method="post">
		<table>
			<colgroup>
				<col width="15%">
				<col width="85%">
			</colgroup>
			<tr>
				<td class="title">ID</td>
				<td><input type="text" id="memberId"></td>
			</tr>
			<tr>
				<td class="title">PW</td>
				<td><input type="password" id="memberPw"></td>
			</tr>
			<tr>
				<td colspan="2">
					<input type="button" value="로그인" id="loginBtn">
				</td>
			</tr>
		</table>
	</form>
	</div>
</div>
</body>
</html>