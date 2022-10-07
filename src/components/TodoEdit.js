import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


function TodoEdit({todo, editTodo}) {
  const navigate = useNavigate()
  const [text, setText] = useState(todo.title)

  const saveTodo = () => {
    editTodo({...todo, title: text})
    setText('')
    navigate('/todo-list')
  }

  return (
    <div className="mb-3 new-todo">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Edit Todo Title</label>
      <textarea placeholder={'Enter a new Todo'} onChange={(e) => setText(e.target.value)} className="form-control"
                id="exampleFormControlTextarea1"
                rows="2" value={text} />
      <button onClick={saveTodo} className={'btn btn-primary mt-2'}>Save Todo</button>
    </div>
  );
}

export default TodoEdit;
