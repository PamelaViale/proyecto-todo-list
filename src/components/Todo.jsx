import { useState } from "react";
import "./Todo.css";

const Todo = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  // Modal delete
  const [showModal, setShowModal] = useState(false);

  const toggleCompleted = () => {
    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const saveEdit = () => {
    if (!editValue.trim()) return;

    setTodos(
      todos.map((t) =>
        t.id === todo.id ? { ...t, text: editValue.trim() } : t
      )
    );
    setIsEditing(false);
  };

  const cancelEdit = () => {
    setEditValue(todo.text);
    setIsEditing(false);
  };

  const openDeleteModal = () => {
    setShowModal(true);
  };

  const confirmDelete = () => {
    setTodos(todos.filter((t) => t.id !== todo.id));
    setShowModal(false);
  };

  const cancelDelete = () => {
    setShowModal(false);
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
            <button className="save-btn" onClick={saveEdit}>Guardar</button>
            <button className="cancel-btn" onClick={cancelEdit}>Cancelar</button>
          </div>
        </>
      ) : (
        <>
          <p className={todo.completed ? "completed" : ""}>{todo.text}</p>

          <div className="icons">
            <button className="btn-action success" onClick={toggleCompleted}>✔</button>
            <button className="btn-action warning" onClick={() => setIsEditing(true)}>✏</button>
            <button className="btn-action danger" onClick={openDeleteModal}>🗑</button>
          </div>
        </>
      )}

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>¿Seguro que querés eliminar esta tarea?</h3>
            <div className="modal-buttons">
              <button className="confirm-btn" onClick={confirmDelete}>
                Sí, borrar
              </button>
              <button className="cancel-btn" onClick={cancelDelete}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Todo;



