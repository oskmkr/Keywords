package io.oskm.keywords.exception;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.apache.commons.collections.CollectionUtils;
import org.apache.commons.lang3.StringUtils;


/**
 * 
 * @author sungkyu.eo
 * 
 */
@SuppressWarnings("serial")
public class LogicalException extends Exception {
	private ErrorCode errorCode;
	private List<String> params = null;

	public LogicalException(ErrorCode errorCode) {
		this.errorCode = errorCode;
	}

	public LogicalException(ErrorCode errorCode, String param1) {
		this.errorCode = errorCode;
		this.params = new ArrayList<String>(1);
		this.params.add(param1);

	}

	public LogicalException(ErrorCode errorCode, String param1, String param2) {
		this.errorCode = errorCode;
		this.params = new ArrayList<String>(2);
		this.params.add(param1);
		this.params.add(param2);

	}

	public LogicalException(ErrorCode errorCode, String param1, String param2, String... params) {
		this.errorCode = errorCode;
		this.params = new ArrayList<String>(7);
		this.params.add(param1);
		this.params.add(param2);
		this.params.addAll(Arrays.asList(params));

	}

	public String getCode() {
		return errorCode.getCode();
	}

	@Override
	public String getMessage() {
		String message = errorCode.getMessage();

		if (CollectionUtils.isEmpty(params)) {
			return message;
		}

		int index = 0;

		for (String each : params) {
			if (StringUtils.isNotBlank(each)) {
				message = message.replace("{" + (index++) + "}", each);
			}
		}

		return message;
	}

	public int getStatusCode() {
		return errorCode.getStatusCode();
	}

	public ErrorCode getErrorCode() {
		return errorCode;
	}

}
