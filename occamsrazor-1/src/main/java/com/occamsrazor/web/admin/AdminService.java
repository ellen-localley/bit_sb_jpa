package com.occamsrazor.web.admin;

public interface AdminService {
	public void add(Admin member);
	public Admin[] list();
	public Admin[] searchByName(String name);
	public Admin[] searchByGender(String gender);
	public Admin detail(String userid);
	public int count();
	public boolean login(Admin member);
//	public int count(String name);
//	public Member login(Member member);
	public void update(Admin member);
	public void delete(Admin member);
}
