import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

function NewTodo({addTodo}) {
  const [text, setText] = useState('')
  

  const saveTodo = () => {
    addTodo(text)
    setText('')
    navigate('/todo-list')
  }

  return (
    <div className="mb-3 new-todo">
      <label htmlFor="exampleFormControlTextarea1" className="form-label">Todo Title</label>
      <textarea placeholder={'Enter a new Todo'} onChange={(e) => setText(e.target.value)} className="form-control"
                id="exampleFormControlTextarea1"
                rows="3" value={text} />
      
    </div>
  );
}

export default NewTodo;
