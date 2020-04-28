package com.occamsrazor.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/member")
public class AdminController {
	@Autowired AdminService memberService;
	
	@PostMapping("/join")
	public Messenger add(@RequestBody Admin member) {
		int current = memberService.count();
		memberService.add(member);
//		int count = memberService.count();
//		Messenger result = null;
//		if(count == 1) {
//			result = Messenger.SUCCESS;
//		}else {
//			result = Messenger.FAIL;
//		}
		return (memberService.count() == (current+1))? Messenger.SUCCESS : Messenger.FAIL;
	}
	
	
	
	@PostMapping("/login")
	public Messenger login(@RequestBody Admin member) {
		return (memberService.login(member))? Messenger.SUCCESS : Messenger.FAIL;
	}
	
	@GetMapping("/list")
	public Admin[] list() {
		Admin[] returnMembers = new Admin[5];
		return returnMembers;
	}
	
	@GetMapping("/detail")
	public Admin detail(@RequestBody String userid) {
		Admin returnMember = new Admin();
		return returnMember;
	}
	
	@GetMapping("/count")
	public int count() {
		int count = 0;
		return count;
	}
	
}
