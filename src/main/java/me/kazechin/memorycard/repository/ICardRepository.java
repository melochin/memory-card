package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Card;
import me.kazechin.memorycard.model.MemoryCardInfo;

import java.util.List;

public interface ICardRepository {

	List<Card> list(String brochureId);

	List<Card> listByWord(String word);

	List<Card> listMemory(String brochureId);

	Card find(String cardId);

	MemoryCardInfo findMemoryCardInfo(String brochureId, String cardId);

	void memoryRember(String brochureId, String cardId);

	void memoryForget(String brochureId, String cardId);

	void save(String brochureId, Card card);

	void modify(String brochureId, Card card);

	void delete(String brochureId, Card card);

	void swap(String brochureId, String firstCardId, String secondCardId);

	void swapBefore(String brochureId, String firstCardId, String secondCardId);

}