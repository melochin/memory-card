package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Card;
import me.kazechin.memorycard.model.MemoryCardInfo;
import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface ICardRepository {

	@Select("select * from card")
	List<Card> listAll();

	@Select("select * from card where brochure_id = #{brochureId}")
	List<Card> list(@Param("brochureId") String brochureId);

	List<Card> listByWord(String word);

	List<Card> listMemory(String brochureId);

	@Select("select * from card where id = #{cardId}")
	Card find(String cardId);

	@Update("update card set remembers = remembers + 1 where id = #{cardId}")
	void memoryRemember(@Param("cardId") Long cardId);

	@Update("update card set forgets = forgets + 1 where id = #{cardId}")
	void memoryForget(@Param("cardId") Long cardId);

	@Options(useGeneratedKeys = true, keyColumn = "id")
	@Insert("insert into card (brochure_id, front, back) " +
				"values (#{brochureId}, #{card.front}, #{card.back})")
	int save(@Param("brochureId") long brochureId, @Param("card") Card card);

	@Update("update card set key = #{card.key}, value = #{card.value) where id = #{card.id}")
	void modify(String brochureId, Card card);

	@Delete("delete from card where brochure_id = #{brochureId} and id = #{cardId}")
	void delete(@Param("brochureId") long brochureId, @Param("cardId") long cardId);

	@Deprecated
	void swap(String brochureId, String firstCardId, String secondCardId);

	@Deprecated
	void swapBefore(String brochureId, String firstCardId, String secondCardId);

	@Deprecated
	MemoryCardInfo findMemoryCardInfo(String brochureId, Long cardId);
}
