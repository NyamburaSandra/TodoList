import React from 'react';
import Todo from "./Todo";

function TodoList({todos, toggleComplete, setTodoEdit, deleteTodo}) {
  return (
    <ul className="list-group">
      {todos.map(todo => (
        <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleComplete={toggleComplete} setTodoEdit={setTodoEdit} />
      ))}
    </ul>
  );
}

export default TodoList;
