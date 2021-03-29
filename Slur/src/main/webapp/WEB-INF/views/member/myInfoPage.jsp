<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<div id="container" align="center">
	<div id="bodyTitle" align="left">
		<h2>내 정보</h2> 
	</div>
	<div id="bodyContent" align="center">
		<table>
			<tr>
				<td>
					<img src="localhost:8090/slur/img/${myInfo.memberPhoto }">
				</td>
				<td>${myInfo.memberId }</td>
				<td>${myInfo.memberName }</td>
				<td></td>
			</tr>
		</table>
	</div>
</div>
</body>
</html>