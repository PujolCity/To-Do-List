package com.todolist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.todolist.model.Item;
import com.todolist.service.api.ItemServiceApi;

@Controller
public class ItemController {
	
	@Autowired
	private ItemServiceApi itemServiceApi;
	
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("list", itemServiceApi.getAll());
		return "index";
	}
	
	@GetMapping("/save/{id}")
	public String showSave(@PathVariable("id") Long id, Model model) {
		if(id != null && id!= 0) {
			model.addAttribute("item", itemServiceApi.get(id));
		} else {
			model.addAttribute("item",new Item());
		}
		return "save";
	}
	
	@PostMapping("/save")
	public String save(Item item, Model Model) {
		itemServiceApi.save(item);
		return "redirect:/";
	}
	
	@GetMapping("/delete/{id}")
	public String delete(@PathVariable("id") Long id, Model model) {
		itemServiceApi.delete(id);
		return "redirect:/";
	}
}
