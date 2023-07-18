import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { addTodo, getAllTodo, updateTodo } from "./Apis";
import TodoItem from "./TodoItems";
import "react-toastify/dist/ReactToastify.css";

let updateTodoId = "todo0";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([]);
  const [todoInputValue, setTodoInputValue] = useState("");
  const [isUpdateTodo, setIsUpdateTodo] = useState(false);

  const todoValueChanged = (event) => {
    const { value } = event.target;
    setTodoInputValue(value);
  };
  console.log(typeof todoList);
  // useEffect(() => {
  //   getApi();
  // }, []);

  // const getApi = async () => {
  //   const response = await fetch(
  //     "https://official-joke-api.appspot.com/random_joke"
  //   );
  //   console.log(await response.json());
  //   console.log(123);
  // };

  useEffect(() => {
    getAllTodo(setTodoList);
  }, []);

  const saveInLocalStorage = () => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    toast("Todos saved in your Local-Storage", {
      autoClose: 2000,
    });
  };

  const onAddTodo = () => {
    if (todoInputValue === "") {
      alert("Enter Valid Text");
      return;
    }

    if (!isUpdateTodo) {
      const newTodo = {
        text: todoInputValue,
        isChecked: false,
      };
      addTodo(newTodo, setTodoList);
      setTodoInputValue("");
    } else {
      updateTodo({ _id: updateTodoId, text: todoInputValue }, setTodoList);
      setTodoInputValue("");
      setIsUpdateTodo(false);
    }
  };

  const onUpdateTodo = (_id) => {
    updateTodoId = _id;
    const todoToBeUpdated = todoList.find((todo) => todo._id === _id);
    setIsUpdateTodo(true);
    setTodoInputValue(todoToBeUpdated.text);
  };

  useEffect(() => {
    document.getElementById("todoUserInput").focus();
  });

  return (
    <div>
      <div id="todoItemsContainer">
        <input
          type="text"
          id="todoUserInput"
          className="todo-user-input"
          placeholder="What needs to be done?"
          value={todoInputValue}
          onChange={todoValueChanged}
          onKeyDown={(e) => (e.key === "Enter" ? onAddTodo() : null)}
        />

        <button className="button mb-3" onClick={onAddTodo}>
          {isUpdateTodo ? "Update Todo" : "Add Todo"}
        </button>
        <h1 className="todo-items-heading">
          My <span className="todo-items-heading-subpart">Tasks</span>
        </h1>
        <ul className="todo-items-container">
          {todoList.length && todoList[0].text !== "no data found" ? (
            todoList.map((todo) => (
              <TodoItem
                key={todo._id}
                todo={todo}
                setTodoList={setTodoList}
                onUpdateTodo={onUpdateTodo}
              />
            ))
          ) : (
            <h4 className="text-center mt-4">No Todo Found</h4>
          )}
        </ul>
        <button className="button" onClick={saveInLocalStorage}>
          Save
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default TodoApp;
