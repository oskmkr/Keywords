package io.oskm.keywords.exception;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpHeaders;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.AbstractHandlerExceptionResolver;

public class RestHandlerExceptionResolver extends AbstractHandlerExceptionResolver {

	/*
	@Override
	public ModelAndView resolveException(HttpServletRequest request, HttpServletResponse response, Object handle,
			Exception e) {

		Map<String, Object> model = new HashMap<>();
		model.put("errorCode", 500);
		model.put("errorMessage", "java.lang.Exception.. error");

		return new ModelAndView("exceptionView", model);
	}
	*/
	
	
	
	
	

	@Override
	protected ModelAndView doResolveException(HttpServletRequest request,
			HttpServletResponse response, Object paramObject, Exception paramException) {
		try {
			response.sendError(HttpServletResponse.SC_CONFLICT);
			String accept = request.getHeader("Accept");
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
        
		return new ModelAndView();
	}

}
