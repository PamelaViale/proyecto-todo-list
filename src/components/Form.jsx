import { useState } from "react";
import "./Form.css";


const Form = ({ todos, setTodos }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validateTodo(inputValue, todos);

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
        onChange={(e) => {
          setInputValue(e.target.value);
          if (error) setError(""); // limpia error mientras escribe
        }}
      />

      <button className="btn" type="submit">
        Agregar
      </button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Form;

