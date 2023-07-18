import { BiEdit } from "react-icons/bi";
import { RiDeleteBinLine } from "react-icons/ri";
import { deleteTodo, updateTodoStatus } from "./Apis";

const TodoItem = (props) => {
  const { todo, onUpdateTodo, setTodoList } = props;
  const { _id, isChecked, text } = todo;

  const todoStatusChanged = () => {
    updateTodoStatus({ _id, isChecked: !isChecked }, setTodoList);
  };

  const deleteTodoClicked = () => {
    deleteTodo(_id, setTodoList);
  };

  const updateTodoClicked = () => {
    onUpdateTodo(_id);
  };

  return (
    <li
      className="todo-item-container d-flex flex-row align-items-center"
      id={_id}
    >
      <input
        type="checkbox"
        id={_id}
        checked={isChecked}
        onChange={todoStatusChanged}
        className="checkbox-input"
        title="check/uncheck todo"
      />
      <div
        className={`label-container d-flex flex-row ${
          isChecked ? "label-container-checked" : ""
        }`}
      >
        <label
          htmlFor={_id}
          className={`checkbox-label ${isChecked ? "checked" : ""}`}
        >
          {text}
        </label>
        <div className="delete-icon-container d-flex align-items-center">
          <BiEdit
            className="icon"
            title="edit todo"
            onClick={updateTodoClicked}
          />
          <RiDeleteBinLine
            className="icon"
            title="delete todo"
            onClick={deleteTodoClicked}
          />
        </div>
      </div>
    </li>
  );
};
export default TodoItem;
