package io.oskm.keywords.exception;


@SuppressWarnings("serial")
public class InvalidParamException extends LogicalException {

	public InvalidParamException() {
		super(ErrorCode.INVALID_PARAM);
	}

	public InvalidParamException(String param) {
		super(ErrorCode.INVALID_PARAM, param);
	}
}