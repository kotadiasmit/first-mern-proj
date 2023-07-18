import TodoApp from "./TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="todos-bg-container">
      <div className="container">
        <h1 className="todos-heading">Todos</h1>
        <h1 className="create-task-heading">
          Create <span className="create-task-heading-subpart">Task</span>
        </h1>
        <TodoApp />
      </div>
    </div>
  );
}

export default App;
