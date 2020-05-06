package com.occamsrazor.web.util;

import java.io.File;

public enum Data {
	USERS, ADMINS, LOSTS;
	
	@Override
	public String toString() {
		String path = "C:"+File.separator+"Users"+File.separator+"bit25"
				+File.separator+"git"+File.separator+"repository2"+File.separator+"occamsrazor-1"
				+File.separator+"src"+File.separator+"main"+File.separator+"resources"
				+File.separator+"static"+File.separator+"resources"+File.separator+"file"+File.separator;
		switch(this) {
		case ADMINS : path = path.concat("admin_list.csv"); break;
		case USERS : path = path.concat("user_list.csv"); break;
		case LOSTS : path = path.concat("lost_list.csv"); break;
		default: break;
		}
		return path;
	}
}
