package me.kazechin.memorycard.model;

import java.io.Serializable;
import java.util.UUID;

public class Card implements Serializable {

	private final static long serialVersionUID = -7305157881878994897L;

	private Long id;

	private String front;

	private String back;

	public Card(){ }

	public Card(String front, String back) {
		this();
		this.front = front;
		this.back = back;
	}

	public Long getId() {
		return id;
	}

	public String getFront() {
		return front;
	}

	public void setFront(String front) {
		this.front = front;
	}

	public String getBack() {
		return back;
	}

	public void setBack(String back) {
		this.back = back;
	}


	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Card card = (Card) o;

		return id != null ? id.equals(card.id) : card.id == null;
	}

	@Override
	public int hashCode() {
		return id != null ? id.hashCode() : 0;
	}
}
