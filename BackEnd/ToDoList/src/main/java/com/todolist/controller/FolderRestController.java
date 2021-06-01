package com.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.model.Folder;
import com.todolist.service.api.FolderServiceApi;

@RestController
@RequestMapping(value = "/api/folder")
@CrossOrigin(origins="http://localhost:3000")
public class FolderRestController {

	@Autowired
	private FolderServiceApi folderServiceApi;
	 
	@GetMapping(value = "/all")
	public List<Folder> getAll() {
		return folderServiceApi.getAll();
	}
	
	@GetMapping(value = "/find/{id}")
	public Folder find(@PathVariable Long id) {
		return folderServiceApi.get(id);
	}

	@PostMapping(value = "/save")
	public ResponseEntity<Folder> save(@RequestBody Folder folder) {
		Folder obj = folderServiceApi.save(folder);
		return new ResponseEntity<Folder>(obj, HttpStatus.OK);
	}
	
	@PostMapping(value = "/delete/{id}")
	public ResponseEntity<Folder> delete(@PathVariable Long id) {
		Folder obj = folderServiceApi.get(id);
		if (obj != null) {
			folderServiceApi.delete(id);
		} else {
			return new ResponseEntity<Folder>(obj, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return new ResponseEntity<Folder>(obj, HttpStatus.OK);
	}

	
}
