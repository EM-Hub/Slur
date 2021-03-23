package com.spring.slur.service.impl;


import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.spring.slur.dao.MemberDao;
import com.spring.slur.service.MemberService;
import com.spring.slur.vo.MemberVo;

@Service
public class MemberServiceImpl implements MemberService{
	@Autowired
	MemberDao memberDao;
	
	@Override
	public int insertMember(MemberVo memberVo) throws IOException {
		return memberDao.insertMember(memberVo); 
	}

	@Override
	public String checkId(String memberId) throws Exception {
		return memberDao.checkId(memberId);
	}

	@Override
	public MemberVo loginMember(MemberVo memberVo) throws Exception {
		return memberDao.loginMember(memberVo);
	}

}
