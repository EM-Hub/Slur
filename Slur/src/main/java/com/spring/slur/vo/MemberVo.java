package com.spring.slur.vo;

import java.io.File;

public class MemberVo {
	// 회원번호 
    private int memberCode;
    // ID 
    private String memberId;
    // 비밀번호 
    private String memberPw;
    // 이름 
    private String memberName;
    // 주민등록번호 
    private String memberRrn;
    // 휴대폰번호 
    private String memberPhone;
    // 우편번호 
    private String zipCode;
    // 주소 
    private String memberAddr;
    // 가입일 
    private String joinDate;
    
    private String memberPhoto;
    
	public int getMemberCode() {
		return memberCode;
	}
	public void setMemberCode(int memberCode) {
		this.memberCode = memberCode;
	}
	public String getMemberId() {
		return memberId;
	}
	public void setMemberId(String memberId) {
		this.memberId = memberId;
	}
	public String getMemberPw() {
		return memberPw;
	}
	public void setMemberPw(String memberPw) {
		this.memberPw = memberPw;
	}
	public String getMemberName() {
		return memberName;
	}
	public void setMemberName(String memberName) {
		this.memberName = memberName;
	}
	public String getMemberRrn() {
		return memberRrn;
	}
	public void setMemberRrn(String memberRrn) {
		this.memberRrn = memberRrn;
	}
	public String getMemberPhone() {
		return memberPhone;
	}
	public void setMemberPhone(String memberPhone) {
		this.memberPhone = memberPhone;
	}
	public String getZipCode() {
		return zipCode;
	}
	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}
	public String getMemberAddr() {
		return memberAddr;
	}
	public void setMemberAddr(String memberAddr) {
		this.memberAddr = memberAddr;
	}
	public String getJoinDate() {
		return joinDate;
	}
	public void setJoinDate(String joinDate) {
		this.joinDate = joinDate;
	}
	public String getMemberPhoto() {
		return memberPhoto;
	}
	public void setMemberPhoto(String memberPhoto) {
		this.memberPhoto = memberPhoto;
	}
	@Override
	public String toString() {
		return "MemberVo [memberCode=" + memberCode + ", memberId=" + memberId + ", memberPw=" + memberPw
				+ ", memberName=" + memberName + ", memberRrn=" + memberRrn + ", memberPhone=" + memberPhone
				+ ", zipCode=" + zipCode + ", memberAddr=" + memberAddr + ", joinDate=" + joinDate + ", memberPhoto="
				+ memberPhoto + "]";
	}
    

}
