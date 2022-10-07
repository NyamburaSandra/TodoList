import React from 'react';
import {AiFillEdit, AiTwotoneDelete} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


function Todo({todo, toggleComplete, setTodoEdit, deleteTodo}) {
  const navigate = useNavigate()

  const editTodo = () => {
    setTodoEdit(todo)
    navigate('/edit-todo')
  }


  return (
    <li className="list-group-item todo">
      <input onChange={() => toggleComplete(todo.id)} className="form-check-input" type="checkbox" value=""
             id="flexCheckDefault" checked={todo.completed} />
      <label className="form-check-label" htmlFor="flexCheckDefault">
        {todo.title}
      </label>
      <div>
        <AiFillEdit onClick={editTodo} />
        <AiTwotoneDelete onClick={() => deleteTodo(todo.id)} />
      </div>
    </li>
  );
}

export default Todo;
