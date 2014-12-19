package io.oskm.keywords.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.BeansException;
import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.BeanFactoryAware;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController implements BeanFactoryAware {
	private static final Logger LOG = LoggerFactory.getLogger(HomeController.class);
	
	@RequestMapping("/")
	public String viewHome() {
		
		return "viewHome";
	}
	
	@Autowired
	private String myString;

	@Override
	public void setBeanFactory(BeanFactory context) throws BeansException {
		//LOG.debug(context.toString());
	}
}
