package io.oskm.keywords.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * themes 
 * @reference http://bootswatch.com/
 * @author oskm
 *
 */
@Controller
public class HomeController {

	/**
	 * http://bootstraptaste.com/theme/squadfree/
	 * @return
	 */
	@RequestMapping({"/", "/intro"})
	public String intro() {
		
		return "intro";
	}
	
	@RequestMapping({"/home"})
	public String viewHome() {
		return "home";
	}
	
	@RequestMapping({"/google_plus"})
	public String viewGooglePlus() {
		return "google_plus";
	}
	
	@RequestMapping({"/test"})
	public String viewTest() {
		return "test";
	}
}
