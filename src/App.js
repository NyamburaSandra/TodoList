import './App.css';
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import {useCallback, useEffect, useState} from "react";
import NewTodo from "./components/NewTodo";
import TodoEdit from "./components/TodoEdit";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import {addNewTodo, deleteTodoApi, getAllTodos, toggleTodo} from "./api";
import {v4 as uuidv4} from 'uuid';

function App() {
  const [todos, setTodos] = useState([])
  const getTodos = async () => {
    const response = await getAllTodos()
    setTodos(response)
  }
  const memoizedCallback = useCallback(async () => {
    return await getAllTodos()
  }, [])


  useEffect(() => {
    memoizedCallback().then(r => setTodos(r))
  }, [memoizedCallback])

  const toggleComplete = async (id) => {
    const filteredTodo = todos.filter(todo => todo.id === id)
    const editedTodo = {...filteredTodo[0], completed: !filteredTodo[0].completed}
    await editTodo(editedTodo)
  }

  const addTodo = async (text) => {
    const newTodo = {
      id: uuidv4(),
      title: text,
      completed: false
    }

    await addNewTodo(newTodo)
    await getTodos()
  }

  const editTodo = async (editedTodo) => {
    await toggleTodo(editedTodo)
    await getTodos()
  }

  const deleteTodo = async (id) => {
    await deleteTodoApi(id)
    await getTodos()
  }

  const [todoEdit, setTodoEdit] = useState(todos[0])

  const setEdit = (todo) => {
    console.log(todo)
    setTodoEdit(todo)
  }

  return (<div className="App">
    <Navbar />
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/todo-list'}
               element={<TodoList deleteTodo={deleteTodo} setTodoEdit={setEdit} todos={todos}
                                  toggleComplete={toggleComplete} />} />
        <Route path={'/new-todo'} element={<NewTodo addTodo={addTodo} />} />
        <Route path={'/edit-todo'} element={<TodoEdit editTodo={editTodo} todo={todoEdit} />} />
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;