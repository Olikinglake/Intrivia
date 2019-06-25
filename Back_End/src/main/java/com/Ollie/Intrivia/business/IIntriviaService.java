package com.Ollie.Intrivia.business;

import java.util.List;
import java.util.Optional;

import com.Ollie.Intrivia.domain.Intrivia;

public interface IIntriviaService {

	List<Intrivia> getIntrivia();

	void deleteIntrivia(Long id);

	Intrivia addIntrivia(Intrivia intrivia);

	Optional<Intrivia> findById(long id);

}