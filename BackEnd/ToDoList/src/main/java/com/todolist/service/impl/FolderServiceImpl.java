package com.todolist.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

import com.todolist.commons.GenericServiceImpl;
import com.todolist.dao.api.FolderDaoApi;
import com.todolist.model.Folder;
import com.todolist.service.api.FolderServiceApi;

@Service
public class FolderServiceImpl extends GenericServiceImpl<Folder, Long> implements FolderServiceApi{

	@Autowired
	private FolderDaoApi folderDaoApi;

	@Override
	public CrudRepository<Folder, Long> getDao() {
		return folderDaoApi;
	}
}
