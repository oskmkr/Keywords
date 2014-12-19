package io.oskm.keywords.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.beans.factory.config.PropertyPlaceholderConfigurer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.io.ClassPathResource;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@Configuration
@PropertySource("classpath:application.properties")
@Import(DataSourceConfig.class)
@ComponentScan
@EnableWebMvc
public class ApplicationContextConfig {
	@Value("#{mongodb.host}")
	public String db;
	
	@Bean
	public static PropertyPlaceholderConfigurer propertyPlaceholderConfigurer() {
		
		PropertyPlaceholderConfigurer propertyPlaceholderConfigurer = new PropertyPlaceholderConfigurer();
		//propertyPlaceholderConfigurer.setLocation(new ClassPathResource("application.properties"));
		// Allow for other PropertyPlaceholderConfigurer instances.
        //propertyPlaceholderConfigurer.setIgnoreUnresolvablePlaceholders(true);
        
		return propertyPlaceholderConfigurer;
	}
}
