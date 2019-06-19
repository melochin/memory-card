package me.kazechin.memorycard.controller;

import me.kazechin.memorycard.model.Brochure;
import me.kazechin.memorycard.repository.IBrochureRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ApiBrochureController {

	@Autowired
	private IBrochureRepository brochureRepository;

	@GetMapping("/api/brochures")
	public List<Brochure> list() {
		return brochureRepository.list();
	}

	@GetMapping("/api/brochures/{brochureId}")
	public Brochure get(@PathVariable("brochureId") Long brochureId) {
		return brochureRepository.find(brochureId);
	}

	@PostMapping("/api/brochures")
	public Brochure save(@RequestBody Brochure brochure) {
		brochureRepository.save(brochure);
		return brochureRepository.find(brochure.getId());
	}

	@PutMapping("/api/brochures")
	public Brochure modify(@RequestBody Brochure brochure) {
		brochureRepository.modify(brochure);
		return brochureRepository.find(brochure.getId());
	}

	@DeleteMapping("/api/brochures/{brochureId}")
	public Brochure delete(@PathVariable("brochureId") Long brochureId) {
		brochureRepository.delete(brochureId);
		return null;
	}

}
