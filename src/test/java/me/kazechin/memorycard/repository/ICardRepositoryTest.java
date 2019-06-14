package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.MemoryCardApplication;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(classes = MemoryCardApplication.class)
class ICardRepositoryTest {

    @Autowired
    ICardRepository cardRepository;

    @Test
    void list() {
        cardRepository.list("1");
    }
}