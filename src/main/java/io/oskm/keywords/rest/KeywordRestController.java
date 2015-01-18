package io.oskm.keywords.rest;

import io.oskm.keywords.core.Keyword;
import io.oskm.keywords.exception.ResourceNotFoundException;

import javax.servlet.http.HttpServletRequest;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class KeywordRestController {

	private static final Logger LOG = LoggerFactory.getLogger(KeywordRestController.class);

	@RequestMapping(value = "/add/{content}"/*
											 * , method = { RequestMethod.POST
											 * }, consumes = {
											 * "application/json" }, produces =
											 * { "application/xml" }
											 */)
	@ResponseBody
	public Keyword add(@PathVariable String content) throws Exception {

		LOG.debug("use ACL : " + temp + content);

		Keyword keyword = new Keyword();
		keyword.setContent(content);
		
		if(content.equals("exception")) {
			throw new Exception();
		}
		
		if(content.equals("resourceNotFound")) {
			throw new ResourceNotFoundException();
		}
		

		return keyword;
	}

	/*
	@ExceptionHandler
	public String handleException(Exception e, HttpServletRequest request) {
		
		LOG.error("# exception", e);
		
		return "exception";
		
	}
	
	*/

	//@Value("#{props.temp1}")
	private String temp;
}
