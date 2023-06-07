package com.example.application;

import java.util.List;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import dev.hilla.Endpoint;
import dev.hilla.Nonnull;


@Endpoint 
@AnonymousAllowed 
public class TodoEndpoint {
  private TodoRepository repository;

  public TodoEndpoint(TodoRepository repository) { 
    this.repository = repository;
  }

  public @Nonnull List<@Nonnull Todo> findAll() { 
    return repository.findAll();
  }

  public Todo add(String task) {
    return repository.save(new Todo(task));
  }

  public Todo update(Todo todo) {
    return repository.save(todo);
  }
}