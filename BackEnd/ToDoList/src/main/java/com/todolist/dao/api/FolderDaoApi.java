package com.todolist.dao.api;

import org.springframework.data.repository.CrudRepository;

import com.todolist.model.Folder;

public interface FolderDaoApi extends CrudRepository<Folder, Long>{

}
