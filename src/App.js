import './App.css';

function App() {
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
