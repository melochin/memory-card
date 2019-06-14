package me.kazechin.memorycard;

import me.kazechin.memorycard.repository.ICardRepository;
import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MemoryCardApplication {

	public static void main(String[] args) {
		SpringApplication.run(MemoryCardApplication.class, args);
	}


}
