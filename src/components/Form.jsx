import { useState } from "react";
import "./Form.css";

const Form = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const validate = (value) => {
    if (!value.trim()) return "La tarea no puede estar vacía.";
    if (value.trim().length < 3) return "Debe tener al menos 3 caracteres.";
    if (value.trim().length > 60) return "Debe tener menos de 60 caracteres.";
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate(inputValue);

    if (validation) {
      setError(validation);
      return;
    }

    const newTodo = {
      id: crypto.randomUUID(),
      text: inputValue.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
    setError("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        type="text"
        placeholder="Nueva tarea..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="btn" type="submit">
        Agregar
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Form;
