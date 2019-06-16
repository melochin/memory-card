package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Card;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


public class ICardRepositoryTest extends RepositoryTest {

    @Autowired
    ICardRepository cardRepository;

    @Rollback
    @Test
    void test() {
        List<Card> cards = cardRepository.listAll();
        assertTrue(cards.size() > 0);
        Card card = cards.get(0);

        cardRepository.memoryRemember(card.getId());
        cardRepository.memoryForget(card.getId());
    }
}