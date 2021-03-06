package com.spring.slur.service;

import java.io.IOException;

import com.spring.slur.vo.MemberVo;

public interface MemberService {

	public int insertMember(MemberVo memberVo) throws IOException;
	
	public String checkId(String memberId) throws Exception;
	
	public MemberVo loginMember(MemberVo memberVo) throws Exception;
	
	public MemberVo myInfo(String memberId) throws Exception;
}
