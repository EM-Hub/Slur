$(document).ready(function() {

	//로그인 버튼
	$(document).on('click', '#loginBtn', function() {
		var memberId = $("#memberId").val();
		var memberPw = $("#memberPw").val();
		
		if(memberId == null || memberId == ''){
			alert("id를 입력하세요!");
			$("#memberId").focus();
		} else if(memberPw == null || memberPw == ''){
			alert("비밀번호를 입력하세요!");
			$("#memberPw").focus();
		} else {
			$.ajax({
				url: "loginMember.do",
				datatype: "json",
				type: "POST",
				data: { 'memberId': memberId, 'memberPw': memberPw},
				success: function(data, textStatus, jqXHR) {
					if (data == "N") {
						alert("Id 혹은 비밀번호를 확인하세요.");
						$("#memberPw").val("");
						$("#memberPw").focus();
					}
					else {
						alert("로그인 성공!");
						location.href = 'mainPage.do';
					}

				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert("실패");
				}
			});
		}
	});


});
(function($) {



})(jQuery);