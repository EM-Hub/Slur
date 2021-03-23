package com.spring.slur.dao.impl;

import java.io.IOException;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.spring.slur.dao.MemberDao;
import com.spring.slur.vo.MemberVo;

@Repository
public class MemberDaoImpl implements MemberDao{
	@Autowired
	private SqlSession sqlSession;
	
	@Override
	public int insertMember(MemberVo memberVo) throws IOException {
		return sqlSession.insert("insertMember", memberVo);
	}

	@Override
	public String checkId(String memberId) throws Exception {
		String check;
		
		if(sqlSession.selectOne("checkId", memberId) == null) {
			check = "Y";
		} else {
			check = "N";
		}
		
		return check;
	}
	
}
