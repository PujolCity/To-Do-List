package com.todolist.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.todolist.model.Item;
import com.todolist.service.api.ItemServiceApi;

@RestController
@RequestMapping(value = "/api/")
public class ItemRestController {
	@Autowired
	private ItemServiceApi itemServiceApi;

	@GetMapping(value = "/all")
	public List<Item> getAll() {
		return itemServiceApi.getAll();
	}
	
	@GetMapping(value = "/find/{id}")
	public Item find(@PathVariable Long id) {
		return itemServiceApi.get(id);
	}

	@PostMapping(value = "/save")
	public ResponseEntity<Item> save(@RequestBody Item item) {
		Item obj = itemServiceApi.save(item);
		return new ResponseEntity<Item>(obj, HttpStatus.OK);
	}

	@PostMapping(value = "/delete/{id}")
	public ResponseEntity<Item> delete(@PathVariable Long id) {
		Item obj = itemServiceApi.get(id);
		if (obj != null) {
			itemServiceApi.delete(id);
		} else {
			return new ResponseEntity<Item>(obj, HttpStatus.INTERNAL_SERVER_ERROR);

		}
		return new ResponseEntity<Item>(obj, HttpStatus.OK);
	}

}
