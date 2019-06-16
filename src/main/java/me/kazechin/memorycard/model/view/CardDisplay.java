package me.kazechin.memorycard.model.view;

import me.kazechin.memorycard.model.Card;
import me.kazechin.memorycard.model.MemoryCardInfo;

import java.util.Date;

public class CardDisplay {

	private Card card;

	private MemoryCardInfo cardInfo;

	public CardDisplay() {
	}

	public CardDisplay(Card card) {
		this.card = card;
		this.cardInfo = new MemoryCardInfo();
	}

	public CardDisplay(Card card, MemoryCardInfo cardInfo) {
		this.card = card;
		this.cardInfo = cardInfo;
	}

	public Long getId() {
		return card.getId();
	}

	public String getKey() {
		return card.getFront();
	}

	public void setKey(String key) {
		card.setFront(key);
	}

	public String getValue() {
		return card.getBack();
	}

	public void setValue(String value) {
		card.setBack(value);
	}

	public Integer getRemeber() {
		return cardInfo.getRemeber();
	}

	public void setRemeber(Integer remeber) {
		cardInfo.setRemeber(remeber);
	}

	public Integer getForget() {
		return cardInfo.getForget();
	}

	public void setForget(Integer forget) {
		cardInfo.setForget(forget);
	}

	public Date getLastTime() {
		return cardInfo.getLastTime();
	}

	public void setLastTime(Date lastTime) {
		cardInfo.setLastTime(lastTime);
	}

	@Override
	public String toString() {
		return "CardDisplay{" +
				"card=" + card +
				", cardInfo=" + cardInfo +
				'}';
	}
}
