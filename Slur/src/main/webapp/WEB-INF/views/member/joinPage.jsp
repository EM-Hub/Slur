<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<link rel="stylesheet" type="text/css" href="resources/css/joinPage.css?ver=8">
<script src="resources/js/joinPage.js?ver=16"></script>
<!-- 우편번호 Api -->
<script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
</head>
<body>
<div id="container" align="center">
	<div id="bodyTitle" align="left">
		<h2>회원가입</h2>
	</div>
	<div id="bodyContent" align="center">
	<form id="joinForm" action="insertMember.do" method="post" enctype="multipart/form-data">
		<table id="joinTable">
			<colgroup>
				<col width="20%">
				<col width="10%">
				<col width="70%">
			</colgroup>
			<caption>
				<span class="req">*</span> 표시는 필수입력 항목입니다!
			</caption>
			<tr>
				<td rowspan="5" align="center">
					<img src="resources/images/picture.png" width="120" height="150" id="baseImg"><br>
					<input type="file" id="photo" name="photo">
					<input type="button" value="사진등록" id="uploadBtn">
				</td>
				<td class="title"><span class="req">*</span>ID</td>
				<td><input type="text" id="memberId" name="memberId">
					<input type="button" value="중복확인" id="checkBtn">
					<input type="hidden" value="1" id="checkId">
					<span class="req"></span>
				</td>
			</tr>
			<tr>
				<td class="title"><span class="req">*</span>PW</td>
				<td>
					<input type="password" id="memberPw" name="memberPw">
					<span class="req"></span>
				</td>
			</tr>
			<tr>
				<td class="title"><span class="req">*</span>PW확인</td>
				<td>
					<input type="password" id="pwCheck">
					<span class="req"></span>
				</td>
			</tr>
			<tr>
				<td class="title"><span class="req">*</span>이름</td>
				<td>
					<input type="text" id="memberName" name="memberName">
					<span class="req"></span>
				</td>
			</tr>
			<tr>
				<td class="title"><span class="req">*</span>주민등록번호</td>
				<td><input type="text" id="memberRrn1" maxlength="6"> - <input type="password" id="memberRrn2" maxlength="7">
					<span class="req"></span>
				</td>
			</tr>
			<tr>
				<td rowspan="4"></td>
				<td class="title">휴대폰번호</td>
				<td><input type="text" name="memberPhone" id="memberPhone" maxlength="13"></td>
			</tr>
			<tr>
				<td class="title">우편번호</td>
				<td><input type="text" placeholder="검색을 이용하세요 ▶" readonly id="sample4_postcode" name="zipCode">
					<input type="button" value="검색" onclick="sample4_execDaumPostcode()">
				</td>
			</tr>
			<tr>
				<td class="title">주소</td>
				<td><input type="text" style="width: 365px;" readonly id="sample4_roadAddress"></td>
			</tr>
			<tr>
				<td class="title">상세주소</td>
				<td><input type="text" style="width: 365px;" id="addr2"></td>
			</tr>
			<tr>
				<td colspan="3" align="right" style="padding-right: 50px;">
					<input type="button" value="가입" id="joinBtn">
				</td>
			</tr>
		</table>
	</form>
	</div>
</div>
</body>
</html>