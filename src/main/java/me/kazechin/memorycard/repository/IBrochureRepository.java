package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Brochure;

import java.util.List;

public interface IBrochureRepository {

	Brochure find(String brochureId);

	List<Brochure> list();

	Brochure save(Brochure brochure);

	Brochure modify(Brochure brochure);

	Brochure delete(String brochureId);


}
