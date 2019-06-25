package com.Ollie.Intrivia.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Intrivia {
	
	@Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String Nickname;
	private Integer Score;

	
	public Intrivia() 
	{
		
	}
	
	public Intrivia(Long id, String Nickname, Integer Score) 
	{
		this.id = id;
		this.Nickname = Nickname;
		this.Score = Score;
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNickname() {
		return Nickname;
	}

	public void setNickname(String Nickname) {
		this.Nickname = Nickname;
	}

	public Integer Score() {
		return Score;
	}

	public void Score(Integer Score) {
		this.Score = Score;
	}

	@Override
	public String toString() {
		return "Intrivia [id=" + id + ", Nickname=" + Nickname + ", Score=" + "]";
	}
}
