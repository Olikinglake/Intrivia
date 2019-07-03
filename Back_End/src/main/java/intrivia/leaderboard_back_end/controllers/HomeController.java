package intrivia.leaderboard_back_end.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import intrivia.leaderboard_back_end.model.Note;
import intrivia.leaderboard_back_end.repository.NotesRepository;

import org.springframework.web.bind.annotation.RequestMethod;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/")
public class HomeController {
	
	@Autowired
	private NotesRepository notesRepository;
	 
	@RequestMapping(value = "", method = RequestMethod.GET)
    public List<Note> list(){
		return notesRepository.findAll();
	}
	
	@RequestMapping(value = "", method = RequestMethod.POST)
	public Note create(@RequestBody Note note) {
		return notesRepository.saveAndFlush(note);
	}
	
	@RequestMapping(value = "{id}", method = RequestMethod.GET)
	public Note getNote(@PathVariable Long id) {
		return notesRepository.findOne(id);
	}
	
}
