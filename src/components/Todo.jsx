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
    const confirmDelete = window.confirm("¿Seguro que querés borrar esta tarea?");
    if (!confirmDelete) return;
    setTodos(todos.filter((t) => t.id !== todo.id));
  };

  const saveEdit = () => {
    if (!editValue.trim()) {
      alert("La tarea no puede quedar vacía.");
      return;
    }

    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: editValue.trim() } : t
      )
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setEditValue(todo.text);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <div className="edit-actions">
            <button className="btn-action save-btn" onClick={saveEdit}>✔️</button>
            <button className="btn-action cancel-btn" onClick={cancelEdit}>✖️</button>
          </div>
        </>
      ) : (
        <>
          <p className={todo.completed ? "completed" : ""}>{todo.text}</p>
          <div className="icons">
            <button className="btn-action success" onClick={toggleCompleted}>✔</button>
            <button className="btn-action warning" onClick={() => setIsEditing(true)}>✏</button>
            <button className="btn-action danger" onClick={deleteTodo}>🗑</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Todo;


