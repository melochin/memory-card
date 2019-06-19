package me.kazechin.memorycard;

import me.kazechin.memorycard.interceptor.AccessInterceptor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.InterceptorRegistration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MemoryCardApplication implements WebMvcConfigurer {

	public static void main(String[] args) {
		SpringApplication.run(MemoryCardApplication.class, args);
	}

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		InterceptorRegistration registration =
				registry.addInterceptor(new AccessInterceptor());
		registration.addPathPatterns("/**");
	}
}
