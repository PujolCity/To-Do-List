package com.todolist.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.todolist.commons.GenericServiceImpl;
import com.todolist.dao.api.ItemDaoApi;
import com.todolist.model.Item;
import com.todolist.service.api.ItemServiceApi;

@Service
public class ItemServiceImpl extends GenericServiceImpl<Item, Long> implements ItemServiceApi{

	@Autowired
	private ItemDaoApi itemDaoApi;
	
	@Override	
	public CrudRepository<Item, Long> getDao() {
		return itemDaoApi;
	}

}
