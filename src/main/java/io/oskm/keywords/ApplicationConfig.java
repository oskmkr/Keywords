package io.oskm.keywords;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * http://www.slideshare.net/arawnkr/spring-camp-2013-java-configuration
 * @author oskm
 *
 */
@Configuration
public class ApplicationConfig {

	@Bean(name={"myString"})
	public String getString() {
		return "string";
	}
}
