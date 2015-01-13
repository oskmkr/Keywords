package io.oskm.keywords.exception;

public enum ErrorCode {

	INVALID_PARAM("PLAY-1101", "Invalid parameter", 400),
	// unexpected error 코드
	INTERNAL_SERVER_ERROR("KWD-1500", "internal server error", 500);

	String code;
	String message;
	int statusCode;

	ErrorCode(String code, String message, int statusCode) {
		this.code = code;
		this.message = message;
		this.statusCode = statusCode;
	}

	public String getCode() {
		return code;
	}

	public String getMessage() {
		return message;
	}

	public int getStatusCode() {
		return statusCode;
	}

	public static ErrorCode find(String errorCode) throws Exception {

		for (ErrorCode each : values()) {
			if (each.getCode().equals(errorCode)) {
				return each;
			}
		}

		throw new Exception("can't find Error Code...");
	}

}
