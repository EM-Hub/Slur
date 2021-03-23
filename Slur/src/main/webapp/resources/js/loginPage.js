$(document).ready(function() {

	//로그인 버튼
	$(document).on('click', '#loginBtn', function() {
		var memberId = $("#memberId").val();
		var memberPw = $("#memberPw").val();
		
		if(memberId == null || memberId == ''){
			alert("id를 입력하세요!");
		} else if(memberPw == null || memberPw == ''){
			alert("비밀번호를 입력하세요!");
		} else {
			
		}
	});


});
(function($) {



})(jQuery);