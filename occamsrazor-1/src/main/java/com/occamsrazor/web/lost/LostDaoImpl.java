package com.occamsrazor.web.lost;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.occamsrazor.web.util.Data;
import com.occamsrazor.web.util.Messenger;

@Repository
public class LostDaoImpl implements LostDao {

	@Override
	public List<Lost> selectAll() {
		List<Lost> lostlist = new ArrayList<>();
		List<String> list = new ArrayList<>();
		try {
			BufferedReader reader = new BufferedReader(
							new FileReader(
							new File(Data.LOSTS.toString())));
			
			String message = "";
			while((message = reader.readLine()) != null) {
				list.add(message);
			}
			reader.close();
			
		} catch(Exception e) {
			System.out.println(Messenger.FILE_READ_ERROR);
			e.printStackTrace();
		}
		
		Lost l = null;
		for(String s : list) {
			l = new Lost();
			String[] arr = s.split(",");
			l.setLostId(arr[0]);
			l.setLostItem(arr[1]);
			l.setLostDate(arr[2]);
			l.setLostClass(arr[3]);
			l.setLostLoca(arr[4]);
			lostlist.add(l);
		}
		
		return lostlist;
	}
	
	

}
