package io.oskm.keywords.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(reason="not found resource", value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {

	public ResourceNotFoundException() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ResourceNotFoundException(String paramString, Throwable paramThrowable, boolean paramBoolean1,
			boolean paramBoolean2) {
		super(paramString, paramThrowable, paramBoolean1, paramBoolean2);
		// TODO Auto-generated constructor stub
	}

	public ResourceNotFoundException(String paramString, Throwable paramThrowable) {
		super(paramString, paramThrowable);
		// TODO Auto-generated constructor stub
	}

	public ResourceNotFoundException(String paramString) {
		super(paramString);
		// TODO Auto-generated constructor stub
	}

	public ResourceNotFoundException(Throwable paramThrowable) {
		super(paramThrowable);
		// TODO Auto-generated constructor stub
	}

}
