import axios from "axios";

const base_url = 'https://todo-sandra.herokuapp.com/todos'

// get all todos,
export const getAllTodos = async () => {
  try {
    const response = await axios.get(base_url)
    return response.data;
  } catch (e) {
    console.log(e)
  }
}

// post new todo,

export const addNewTodo = async (todo) => {
  try {
    await axios.post(base_url, todo)
  } catch (e) {
    console.log(e)
  }
}
// update todo state,

export const toggleTodo = async (todo) => {
  try {
    await axios.put(`${base_url}/${todo.id}`, todo)
  } catch (e) {
    console.log(e)
  }
}
// delete todo

export const deleteTodoApi = async (id) => {
  try {
    await axios.delete(`${base_url}/${id}`)
  } catch (e) {
    console.log(e)
  }
}
