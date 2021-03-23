$(document).ready(function() {

	//프로필사진 업로드 버튼
	$(document).on('click', '#uploadBtn', function(e) {
		e.preventDefault();
		$("#photo").click();
	});
	$(document).on('change', '#photo', function() {
		setImageFromFile(this, '#baseImg');
	});

	//아이디
	$(document).on('keyup focusin focusout', '#memberId', function() {
		//id형식
		function checkId(str) {
			var reg1 = /^[a-z0-9]{4,12}$/;
			var reg2 = /[a-z]/g;
			var reg3 = /[0-9]/g;
			return (reg1.test(str) && reg2.test(str) && reg3.test(str));
		};
		if ($(this).val() == "") {
			$(this).parent().children().last().text("Id는 필수항목입니다!");
			$(this).css("border", "2px solid red");
		}
		else if (checkId($(this).val()) == false) {
			$(this).parent().children().last().text("Id는 영문+숫자 4~12자리입니다!");
			$(this).css("border", "2px solid red");
		}
		else {
			$(this).parent().children().last().text("");
			$(this).css("border", "1px solid #e5e5e5");
		}

	});
	$(document).on('change', '#memberId', function() {
		$("#checkId").val(2);
	});
	//id 중복체크
	$(document).on('click', '#checkBtn', function() {
		var checkId = $("#memberId").val();

		if (checkId == null || checkId == '') {
			alert("Id를 입력하세요!");
		} else {
			$.ajax({
				url: "checkId.do",
				datatype: "json",
				type: "POST",
				data: { 'memberId': checkId },
				success: function(data, textStatus, jqXHR) {
					if (data == "N") {
						alert("사용중인 Id입니다!");
						$("#checkId").val(1);
					}
					else {
						alert("사용가능한 Id입니다.");
						$("#checkId").val(0);
					}

				},
				error: function(jqXHR, textStatus, errorThrown) {
					alert("실패");
				}
			});
		}
	});


	//비밀번호
	$(document).on('keyup focusin focusout', '#memberPw', function() {
		//비밀번호 조합
		function checkPw(str) {
			var reg1 = /^[a-z0-9]{8,14}$/;    // a-z 0-9 중에 8자리 부터 14자리만 허용 한다는 뜻이구요
			var reg2 = /[a-z]/g;
			var reg3 = /[0-9]/g;
			return (reg1.test(str) && reg2.test(str) && reg3.test(str));
		};
		if ($(this).val() == "") {
			$(this).parent().children().last().text("비밀번호는 필수항목입니다!");
			$(this).css("border", "2px solid red");
		}
		else if (checkPw($(this).val()) == false) {
			$(this).parent().children().last().text("비밀번호는 영문+숫자 8~14자리입니다!");
			$(this).css("border", "2px solid red");
		}
		else {
			$(this).parent().children().last().text("");
			$(this).css("border", "1px solid #e5e5e5");
		}

	});
	//비밀번호 확인
	$(document).on('keyup focusin focusout', '#pwCheck', function() {
		if ($(this).val() == "") {
			$(this).parent().children().last().text("비밀번호확인은 필수항목입니다!");
			$(this).css("border", "2px solid red");
		}
		else if ($(this).val() != $("#memberPw").val()) {
			$(this).parent().children().last().text("비밀번호가 일치하지 않습니다!");
			$(this).css("border", "2px solid red");
		}
		else {
			$(this).parent().children().last().text("");
			$(this).css("border", "1px solid #e5e5e5");
		}

	});
	//이름
	$(document).on('keyup focusin focusout', '#memberName', function() {
		var name = RegExp(/^[가-힣]+$/);
		if ($(this).val() == "") {
			$(this).parent().children().last().text("이름은 필수항목입니다!");
			$(this).css("border", "2px solid red");
		}
		else if (!name.test($("#memberName").val())) {
			$(this).parent().children().last().text("이름형식에 맞게 입력하세요(한글만)!");
			$(this).css("border", "2px solid red");
		}
		else {
			$(this).parent().children().last().text("");
			$(this).css("border", "1px solid #e5e5e5");
		}

	});
	//주민등록번호
	$(document).on('keyup focusin focusout', '#memberRrn1, #memberRrn2', function() {
		var num = RegExp(/[0-9]/g);
		if ($(this).val() == "") {
			$(this).parent().children().last().text("주민등록번호는 필수항목입니다!");
			$(this).css("border", "2px solid red");
		}
		else {
			$(this).parent().children().last().text("");
			$(this).css("border", "1px solid #e5e5e5");
		}

	});
	$("#memberRrn1").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ""));
	});
	$("#memberRrn2").on("keyup", function() {
		$(this).val($(this).val().replace(/[^0-9]/g, ""));
	});

	/*휴대폰번호 자동 하이픈*/
	$(document).on("keyup", "#memberPhone", function() {
		$(this).val($(this).val().replace(/[^0-9]/g, "").replace(/([0-9]{3})?([0-9]{4})?([0-9]{4})/, "$1-$2-$3").replace("--", "-"));

	});

	//가입버튼 클릭시 유효성검사, 성공하면 insert
	$(document).on('click', '#joinBtn', function(event) {

		if (check() == false) {
			alert("회원가입 양식에 맞게 작성해주세요.");
			return;
		} else {
			var memberAddr = $("#sample4_roadAddress").val() + $("#addr2").val();
			var memberRrn = $("#memberRrn1").val() + $("#memberRrn2").val();
			var formData = new FormData($('#joinForm')[0]);
			formData.append("memberAddr", memberAddr);
			formData.append("memberRrn", memberRrn);
			formData.append("photo", $("#photo")[0].files[0]);

			$.ajax({
				url: "insertMember.do",
				datatype: "json",
				processData: false,
				contentType: false,
				type: "POST",
				data: formData,
				success: function(data, textStatus, jqXHR) {
					if (data > 0) {
						alert("회원가입성공");
						location.href = "mainPage.do";
					}
					else {
						alert("가입실패");
						return;
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
	check = function() {
		//id형식
		function checkId(str) {
			var reg1 = /^[a-z0-9]{4,12}$/;
			var reg2 = /[a-z]/g;
			var reg3 = /[0-9]/g;
			return (reg1.test(str) && reg2.test(str) && reg3.test(str));
		};
		//비밀번호 조합
		function checkPw(str) {
			var reg1 = /^[a-z0-9]{8,14}$/;    // a-z 0-9 중에 8자리 부터 14자리만 허용 한다는 뜻이구요
			var reg2 = /[a-z]/g;
			var reg3 = /[0-9]/g;
			return (reg1.test(str) && reg2.test(str) && reg3.test(str));
		};
		//이름 한글만 입력
		var name = RegExp(/^[가-힣]+$/);

		//id 공백확인
		if ($("#memberId").val() == "") {
			alert("Id는 필수항목입니다!");
			$("#memberId").focus();
			return false;
		}
		//id 형식확인
		if (checkId($("#memberId").val()) == false) {
			alert("Id는 영문+숫자 4~12자리입니다!");
			$("#memberId").focus();
			return false;
		}
		//id 중복여부
		if ($("#checkId").val() == 1) {
			alert("Id가 중복되었습니다!");
			$("#memberId").focus();
			return false;
		}
		//중복확인 미실시
		if ($("#checkId").val() == 2) {
			alert("Id 중복확인 해주세요!");
			$("#memberId").focus();
			return false;
		}
		//비밀번호 공백확인
		if ($("#memberPw").val() == "") {
			alert("비밀번호는 필수항목입니다!");
			$("#memberPw").focus();
			return false;
		}
		//비밀번호 형식확인
		if (checkPw($("#memberPw").val()) == false) {
			alert("비밀번호는 영문+숫자 8~14자리입니다!");
			$("#memberPw").val("");
			$("#memberPw").focus();
			return false;
		}
		//비밀번호확인 공백
		if ($("#pwCheck").val() == "") {
			alert("비밀번호확인은 필수항목입니다!");
			$("#pwCheck").focus();
			return false;
		}
		//비밀번호 일치확인
		if ($("#memberPw").val() != $("#pwCheck").val()) {
			alert("비밀번호가 일치하지 않습니다!");
			$("#pwCheck").val("");
			$("#pwCheck").focus();
			return false;
		}
		//이름 공백
		if ($("#memberName").val() == "") {
			alert("이름은 필수항목입니다!");
			$("#memberName").focus();
			return false;
		}
		//이름 한글만
		if (!name.test($("#memberName").val())) {
			alert("이름은 한글만 작성하세요!");
			$("#memberName").val("");
			$("#memberName").focus();
			return false;
		}
		//주민등록번호 공백
		if ($("#memberRrn1").val() == "" || $("#memberRrn2").val() == "") {
			alert("주민등록번호는 필수항목입니다!");
			$("#memberRrn1").focus();
			return false;
		}

	};



	//주소
	sample4_execDaumPostcode = function() {
		new daum.Postcode({
			oncomplete: function(data) {
				// 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

				// 도로명 주소의 노출 규칙에 따라 주소를 표시한다.
				// 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
				var roadAddr = data.roadAddress; // 도로명 주소 변수
				var extraRoadAddr = ''; // 참고 항목 변수

				// 법정동명이 있을 경우 추가한다. (법정리는 제외)
				// 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
				if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) {
					extraRoadAddr += data.bname;
				}
				// 건물명이 있고, 공동주택일 경우 추가한다.
				if (data.buildingName !== '' && data.apartment === 'Y') {
					extraRoadAddr += (extraRoadAddr !== '' ? ', ' + data.buildingName : data.buildingName);
				}
				// 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
				if (extraRoadAddr !== '') {
					extraRoadAddr = ' (' + extraRoadAddr + ')';
				}

				// 우편번호와 주소 정보를 해당 필드에 넣는다.
				document.getElementById('sample4_postcode').value = data.zonecode;
				document.getElementById("sample4_roadAddress").value = roadAddr;

			}
		}).open();
	}
	setImageFromFile = function(input, expression) {
		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function(e) {
				$(expression).attr('src', e.target.result);
			}
			reader.readAsDataURL(input.files[0]);
		}
	}

})(jQuery);