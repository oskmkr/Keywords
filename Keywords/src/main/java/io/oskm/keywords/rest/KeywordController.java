package io.oskm.keywords.rest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
public class KeywordController {
	
	private static final Logger LOG = LoggerFactory.getLogger(KeywordController.class);
		
	@RequestMapping("/add")
	public String add() {
	
		LOG.debug("use ACL : " + temp);
		
		
		return "add";
	}

	//@Value("${props.temp1}")
	private String temp;
}
