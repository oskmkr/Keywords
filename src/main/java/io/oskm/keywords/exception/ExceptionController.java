package io.oskm.keywords.exception;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ExceptionController {

	@RequestMapping("/error1")
	@ResponseBody
	public Map<String, Object> handle(HttpServletRequest request) {

		Map<String, Object> result = new HashMap<>();
		result.put("errorCode", 111);
		result.put("errorMessage", "error MEssage");

		return result;
	}

}
