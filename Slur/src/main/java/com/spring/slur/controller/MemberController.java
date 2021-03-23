package com.spring.slur.controller;

import java.io.File;
import java.io.IOException;
import java.util.Locale;

import javax.servlet.http.HttpSession;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.spring.slur.service.MemberService;
import com.spring.slur.vo.MemberVo;

/**
 * Handles requests for the application home page.
 */
@Controller
public class MemberController {
	@Autowired
	MemberService memberService;
	private static final Logger logger = LoggerFactory.getLogger(MemberController.class);
	
	//회원가입
	@ResponseBody
	@RequestMapping(value = "insertMember.do", method = RequestMethod.POST)
	public int insertMember(Locale locale, MemberVo memberVo, MultipartHttpServletRequest multi) throws IOException {
		logger.info("insertMember", locale);
		//첨부파일이 있을때
		if(multi != null) {
			//첨부파일에 대한 encoding 설정
			multi.setCharacterEncoding("UTF-8");		
			//multipartRequest에서 첨부파일에 대한 데이터를 받아온다
			MultipartFile mf = multi.getFile("photo");
			String originFileName = mf.getOriginalFilename();
			//실제 파일명을 현재날짜_원본파일 형태의 이름으로 지정
			String realName = originFileName;
			
			File file = new File("C:\\uploadFile\\");
			
			//첨부파일의 용량이 0이 아니면
			if(mf.getSize() != 0) {
				
				if(!file.exists()) {
					System.out.println("!!!!!!!");
					file.mkdirs();
				}
				//해당하는 경로에 첨부파일을 업로드한다
				mf.transferTo(new File("C:\\uploadFile\\" + realName));
			}
			memberVo.setMemberPhoto(realName);
		}
		
		return memberService.insertMember(memberVo);
	}
	
	//id 중복확인
	@ResponseBody
	@RequestMapping(value = "checkId.do", method = RequestMethod.POST)
	public String checkId(Locale locale, String memberId) throws Exception {
		logger.info("checkId", locale);
		
		return memberService.checkId(memberId);
	}
	//로그인
	@ResponseBody
	@RequestMapping(value = "loginMember.do", method = RequestMethod.POST)
	public String loginMember(Locale locale, MemberVo memberVo, HttpSession session) throws Exception {
		logger.info("loginMember", locale);
		
		String result = "Y";
		MemberVo loginMember = memberService.loginMember(memberVo);
		session.setAttribute("loginMember", loginMember);
		
		if(loginMember == null) {
			result = "N";
		}
		
		return result;
	}
	//로그아웃
	@RequestMapping(value = "logout.do", method = RequestMethod.GET)
	public String logout(Locale locale, HttpSession session) throws Exception {
		logger.info("loginMember", locale);
		
		session.removeAttribute("loginMember");
		
		return "redirect:mainPage.do";
	}
}
