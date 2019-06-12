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

	@PostMapping("/api/brochures")
	public Brochure save(@RequestBody Brochure brochure) {
		return brochureRepository.save(brochure);
	}

	@PutMapping("/api/brochures")
	public Brochure modify(@RequestBody Brochure brochure) {
		return brochureRepository.modify(brochure);
	}

	@DeleteMapping("/api/brochures/{brochureId}")
	public Brochure delete(@PathVariable("brochureId") String brochureId) {
		return brochureRepository.delete(brochureId);
	}

}
