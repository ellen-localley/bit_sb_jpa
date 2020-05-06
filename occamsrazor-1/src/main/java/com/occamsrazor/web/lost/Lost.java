package com.occamsrazor.web.lost;

import org.springframework.stereotype.Component;

import lombok.Data;

@Component
@Data
public class Lost {
	private String lostId, lostItem, lostDate, lostClass, lostLoca;
}
