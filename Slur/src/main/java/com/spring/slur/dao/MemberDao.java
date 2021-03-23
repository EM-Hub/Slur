package com.spring.slur.dao;

import java.io.IOException;

import com.spring.slur.vo.MemberVo;

public interface MemberDao {
	
	public int insertMember(MemberVo memberVo) throws IOException;
	
	public String checkId(String memberId) throws Exception;
	
	public MemberVo loginMember(MemberVo memberVo) throws Exception;
}
