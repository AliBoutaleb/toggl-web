package src.main.java;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@SpringBootApplication
@Configuration
@ComponentScan({"src.main.java.controller"})
public class Application{
	
	private static final Logger log = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {

		//InSight Application
		SpringApplication.run(Application.class, args);
		
	}                                                                                                                
}