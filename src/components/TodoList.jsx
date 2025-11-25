import { useState } from "react";
import Todo from "./Todo";
import "./TodoList.css";

const TodoList = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <div className="list-container">
      <select
        className="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </select>

      {filteredTodos.length === 0 && (
        <p className="empty">No hay tareas para mostrar.</p>
      )}

      {filteredTodos.map((todo) => (
        <Todo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default TodoList;
