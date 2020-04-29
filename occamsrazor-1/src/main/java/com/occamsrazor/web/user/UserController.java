package com.occamsrazor.web.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.occamsrazor.web.util.Messenger;

@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired UserService userService;
	
	@GetMapping("/list")
	public List<User> list(){
		return null;
		
	}
	@PostMapping("")
	public Messenger post(@RequestBody User user) {
		return Messenger.SUCCESS;
	}
	
	@GetMapping("/{userid}")
	public User detail(@PathVariable String userid) {
		return null;
	}
	
	@PutMapping("/update")
	public Messenger put(@RequestBody User user) {
		return Messenger.SUCCESS;
	}
	
	@DeleteMapping("/{userid}")
	public Messenger delete(@PathVariable String userid) {
		return Messenger.SUCCESS;
	}

}
