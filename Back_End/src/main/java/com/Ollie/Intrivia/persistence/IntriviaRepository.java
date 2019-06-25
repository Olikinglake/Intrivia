package com.Ollie.Intrivia.persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.Ollie.Intrivia.domain.Intrivia;

@Repository
public interface IntriviaRepository extends JpaRepository<Intrivia, Long> {
	
}
