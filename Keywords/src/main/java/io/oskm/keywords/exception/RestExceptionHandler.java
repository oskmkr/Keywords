package io.oskm.keywords.exception;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;

@ControllerAdvice
public class RestExceptionHandler {

	private static final Logger LOG = LoggerFactory.getLogger(RestExceptionHandler.class);

	@ExceptionHandler(Exception.class)
	@ResponseBody
	public ResponseEntity<ErrorBody> handleException(Exception e) {
		LOG.error("# handle Logical Exception", e);

		ErrorBody errorBody = new ErrorBody();

		if (e instanceof LogicalException) {

			ErrorCode errorCode = ((LogicalException) e).getErrorCode();

			errorBody.setErrorCode(errorCode.getCode());
			errorBody.setErrorMessage(errorCode.getMessage());

			return new ResponseEntity<ErrorBody>(errorBody, HttpStatus.valueOf(errorCode.getStatusCode()));
		}

		errorBody.setErrorCode(ErrorCode.INTERNAL_SERVER_ERROR.getCode());
		errorBody.setErrorMessage(ErrorCode.INTERNAL_SERVER_ERROR.getMessage());

		return new ResponseEntity<ErrorBody>(errorBody, HttpStatus.valueOf(ErrorCode.INTERNAL_SERVER_ERROR
				.getStatusCode()));
	}

}
