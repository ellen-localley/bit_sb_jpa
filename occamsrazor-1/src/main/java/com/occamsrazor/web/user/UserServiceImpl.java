package com.occamsrazor.web.user;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.util.ArrayList;
import java.util.List;

import javax.swing.JOptionPane;

import org.springframework.stereotype.Service;

import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Service
public class UserServiceImpl implements UserService {
	
	@Override
	public void add(User user) {
		try {
			File file = new File(Data.USER_PATH.toString()+Data.LIST+Data.CSV.toString());
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(new FileWriter(file, true));
					String message = user.toString();
					writer.write(message);
					writer.newLine();
					writer.flush();
		} catch(Exception e) {
			System.out.println("파일 입력 시 에러 발생");
		}
		
	}

	@Override
	public int count() {
		return 0;
	}

	@Override
	public User login(User user) {
		User returnUser = null;
		
		return returnUser;
	}

	@Override
	public User detail(String userid) {
		
		return null;
	}

	@Override
	public boolean update(User user) {
		return true;
	}

	@Override
	public boolean remove(String userid) {
		return true;
	}
	
	@Override
	public List<User> list() {
		List<User> userlist = new ArrayList<>();
		List<String> list = new ArrayList<>();
		try {
			File file = new File(Data.USER_PATH.toString()+Data.LIST+Data.CSV);
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message); 
			}
			reader.close();
		} catch(Exception e) {
			
		}
		User u = null;
		for(int i =0;i < list.size(); i++) {
			u = new User();
			String[] arr = list.get(i).split(",");
			u.setUserid(arr[0]);
			u.setPasswd(arr[1]);
			u.setName(arr[2]);
			u.setSsn(arr[3]);
			u.setAddr(arr[4]);
			userlist.add(u);
		}
		return userlist;
	}

	@Override
	public boolean duplicate(String userid) {
		boolean ok = true;
		List<User> list = list();
		for(int i=0; i<list.size(); i++) {
			if(userid.equals(list.get(i).getUserid())) {
				ok = false;
				break;
			}
		}
		return ok;
	}

	@Override
	public void saveFile(User user) {
		try {
			File file = new File(Data.USER_PATH.toString()+Data.LIST+Data.CSV.toString());
			@SuppressWarnings("resource")
			BufferedWriter writer = new BufferedWriter(new FileWriter(file, true));
					String message = user.toString();
					writer.write(message);
					writer.newLine();
					writer.flush();
		} catch(Exception e) {
			System.out.println(Messenger.FILE_WRITE_ERROR.toString());
		}
		
	}

	@Override
	public List<User> readFile() {
		List<User> userlist = new ArrayList<>();
		List<String> list = new ArrayList<>();
		try {
			File file = new File(Data.ADMIN_PATH.toString()+Data.LIST+Data.CSV.toString());
			BufferedReader reader = new BufferedReader(new FileReader(file));
			String message = "";
			while ((message = reader.readLine()) != null) {
				list.add(message);
			}
			JOptionPane.showMessageDialog(null, list);
			reader.close();

		} catch (Exception e) {
			System.out.println(Messenger.FILE_READ_ERROR.toString());
		}
		User u = null;
		for(int i=0; i<list.size(); i++) {
			u = new User();
			String[] arr = list.get(i).split(",");
			u.setUserid(arr[0]);
			u.setPasswd(arr[1]);
			u.setName(arr[2]);
			u.setSsn(arr[3]);
			u.setAddr(arr[4]);
			userlist.add(u);
		}
		return userlist;
	}

}
