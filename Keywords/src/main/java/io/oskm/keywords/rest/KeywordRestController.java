package io.oskm.keywords.rest;

import io.oskm.keywords.core.Keyword;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
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
	public Keyword add(@PathVariable String content) {

		LOG.debug("use ACL : " + temp + content);

		Keyword keyword = new Keyword();
		keyword.setContent(content);

		return keyword;
	}

	//@Value("#{props.temp1}")
	private String temp;
}
