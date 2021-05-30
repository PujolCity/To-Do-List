package com.todolist.dao.api;

import org.springframework.data.repository.CrudRepository;

import com.todolist.model.Item;

public interface ItemDaoApi extends CrudRepository<Item, Long> {

	
}
