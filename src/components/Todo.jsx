import { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const toggleCompleted = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTodo = () => {
    if (confirm("¿Eliminar esta tarea?")) {
      setTodos(todos.filter((t) => t.id !== todo.id));
    }
  };

  const saveEdit = () => {
    if (!editValue.trim()) return alert("La tarea no puede quedar vacía.");

    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: editValue.trim() } : t
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <input
          className="edit-input"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={saveEdit}
          autoFocus
        />
      ) : (
        <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
      )}

      <div className="icons">
        <button className="icon-btn success" onClick={toggleCompleted}>✔</button>
        <button className="icon-btn warning" onClick={() => setIsEditing(true)}>✏</button>
        <button className="icon-btn danger" onClick={deleteTodo}>🗑</button>
      </div>
    </div>
  );
};

export default Todo;

