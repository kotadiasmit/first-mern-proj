import axios from "axios";

const url = "http://localhost:2000";

const getAllTodo = (setTodoList) => {
  axios.get(`${url}/todos`).then(({ data }) => {
    setTodoList(data);
  });
};

const addTodo = (newTodo, setTodoList) => {
  axios.post(`${url}/todo/create`, newTodo).then(() => {
    getAllTodo(setTodoList);
  });
};

const updateTodoStatus = (todoData, setTodoList) => {
  axios.patch(`${url}/todo/updateStatus`, todoData).then(() => {
    getAllTodo(setTodoList);
  });
};

const updateTodo = (todoData, setTodoList) => {
  axios.patch(`${url}/todo/update`, todoData).then(() => {
    getAllTodo(setTodoList);
  });
};

const deleteTodo = (_id, setTodoList) => {
  axios.delete(`${url}/todo/delete`, { data: { _id } }).then(() => {
    getAllTodo(setTodoList);
  });
};

export { addTodo, deleteTodo, getAllTodo, updateTodo, updateTodoStatus };
