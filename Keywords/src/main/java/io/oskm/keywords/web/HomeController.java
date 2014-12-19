package io.oskm.keywords.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

	@RequestMapping("/Home")
	public String viewHome() {
		
		return "Home";
	}
}
