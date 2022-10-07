import './App.css';
import Navbar from "./components/Navbar";


function App() {
  let mTodos = [
    {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
    {
      "userId": 1,
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false
    },
    {
      "userId": 1,
      "id": 4,
      "title": "et porro tempora",
      "completed": true
    },
    {
      "userId": 1,
      "id": 5,
      "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
      "completed": false
    },
    {
      "userId": 1,
      "id": 6,
      "title": "qui ullam ratione quibusdam voluptatem quia omnis",
      "completed": false
    },
    {
      "userId": 1,
      "id": 7,
      "title": "illo expedita consequatur quia in",
      "completed": false
    },
    {
      "userId": 1,
      "id": 8,
      "title": "quo adipisci enim quam ut ab",
      "completed": true
    },
    {
      "userId": 1,
      "id": 9,
      "title": "molestiae perspiciatis ipsa",
      "completed": false
    },
    {
      "userId": 1,
      "id": 10,
      "title": "illo est ratione doloremque quia maiores aut",
      "completed": true
    },]

  const [todos, setTodos] = useState(mTodos)

  const toggleComplete = (id) => {
    setTodos((prevState) => {
      const filteredTodo = prevState.filter(todo => todo.id === id)
      const editedTodo = {...filteredTodo[0], completed: !filteredTodo[0].completed}

      const newTodos = prevState.filter(todo => todo.id !== id)
      const result = [...newTodos, editedTodo]
      return result.sort((a, b) => a.id - b.id);
    })
  }

  const addTodo = (text) => {
    const newTodo = {
      id: todos.length + 1,
      title: text,
      completed: false
    }

    setTodos((prevState) => {
      return [...prevState, newTodo]
    })
  }

  const editTodo = (editedTodo) => {
    setTodos((prevState) => {
      const existingTodos = prevState.filter(todo => todo.id !== editedTodo.id)
      return [...existingTodos, editedTodo].sort((a, b) => a.id - b.id);
    })
  }

  const deleteTodo = (id) => {
    setTodos(prevState => {
      const remainingTodos = prevState.filter(todo => todo.id !== id)
      return remainingTodos.sort((a, b) => a.id - b.id);
    })
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
               element={<TodoList deleteTodo={deleteTodo} setTodoEdit={setEdit} todos={todos} toggleComplete={toggleComplete} />} />
        <Route path={'/new-todo'} element={<NewTodo addTodo={addTodo} />} />
        <Route path={'/edit-todo'} element={<TodoEdit editTodo={editTodo} todo={todoEdit} />} />
      </Routes>
    </BrowserRouter>
  </div>);
}

export default App;
