package io.oskm.keywords.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;

@Configuration
@PropertySource("classpath:application.properties")
public class DataSourceConfig {
	
	@Value("${mongodb.host}")
	public String db;
	
	@Value("${mongodb.port}")
	public int port;
	
	@Bean
	public PropertyPlaceholderConfigurer propertyPlaceholderConfigurer() {
		PropertyPlaceholderConfigurer propertyPlaceholderConfigurer = new PropertyPlaceholderConfigurer();
		return propertyPlaceholderConfigurer;
	}
}
