export const validateTodo = (value, todos) => {
  if (!value.trim()) return "La tarea no puede estar vacía.";
  if (value.trim().length < 3) return "Debe tener al menos 3 caracteres.";
  if (value.trim().length > 60) return "Debe tener menos de 60 caracteres.";

  // evitar duplicados
  const exists = todos.some(
    (t) => t.text.toLowerCase() === value.trim().toLowerCase()
  );
  if (exists) return "Esa tarea ya existe.";

  return "";
};
