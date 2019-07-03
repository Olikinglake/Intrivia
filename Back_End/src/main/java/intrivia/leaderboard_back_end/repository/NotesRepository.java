package intrivia.leaderboard_back_end.repository;

import intrivia.leaderboard_back_end.model.Note;
import org.springframework.data.jpa.repository.JpaRepository;



public interface NotesRepository extends JpaRepository<Note, Long>{

}
