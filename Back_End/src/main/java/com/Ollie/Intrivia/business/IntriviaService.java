package com.Ollie.Intrivia.business;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Ollie.Intrivia.domain.Intrivia;
import com.Ollie.Intrivia.persistence.IntriviaRepository;

@Service
public class IntriviaService implements IIntriviaService {
	
	@Autowired
	private IntriviaRepository IntriviaRepository;
	
	public List<Intrivia> getIntrivia() {
		return IntriviaRepository.findAll();
	}

	public void deleteIntrivia(Long id) {
		IntriviaRepository.deleteById(id);
		
	}

	public Intrivia addIntrivia(Intrivia intrivia) {
		return IntriviaRepository.save(intrivia);
	}

	public Optional<Intrivia> findById(long id) {
		return IntriviaRepository.findById(id);
	}
}
