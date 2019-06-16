package me.kazechin.memorycard.repository;

import me.kazechin.memorycard.model.Brochure;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.annotation.Rollback;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

class IBrochureRepositoryTest extends RepositoryTest {

    @Autowired
    private IBrochureRepository brochureRepository;

    @Rollback
    @Test
    public void test() {
        List<Brochure> brochures = brochureRepository.list();
        assertTrue(brochures.size() > 0);

        Brochure brochure = brochures.get(0);
        brochure = brochureRepository.find(brochure.getId());
        assertTrue(brochure != null);

        brochure.setName("name");
        brochure.setDescription("des");
        brochureRepository.modify(brochure);

        brochure = brochureRepository.find(brochure.getId());
        assertTrue(brochure.getName().equals("name"));
        assertTrue(brochure.getDescription().equals("des"));

        brochureRepository.delete(brochure.getId());
        assertTrue(brochureRepository.find(brochure.getId()) == null);

        brochureRepository.save(brochure);
    }

}