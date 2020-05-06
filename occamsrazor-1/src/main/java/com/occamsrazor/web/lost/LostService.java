package com.occamsrazor.web.lost;

import java.util.List;

import org.springframework.stereotype.Component;

@Component
public interface LostService {

	public List<Lost> findAll();
	
	
}
