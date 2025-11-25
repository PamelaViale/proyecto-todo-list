import { useState } from "react";
import { HStack, Text, IconButton, Input } from "@chakra-ui/react";
import { FaCheck, FaTrash, FaEdit } from "react-icons/fa";

const Todo = ({ todo, setTodos, todos }) => {
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
    if (confirm("¿Eliminar esta tarea? Esta acción no se puede deshacer.")) {
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
    <HStack
      p={3}
      borderWidth="1px"
      borderRadius="lg"
      justifyContent="space-between"
    >
      {isEditing ? (
        <Input
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onBlur={saveEdit}
          autoFocus
        />
      ) : (
        <Text
          textDecoration={todo.completed ? "line-through" : "none"}
          opacity={todo.completed ? 0.6 : 1}
        >
          {todo.text}
        </Text>
      )}

      <HStack>
        <IconButton
          icon={<FaCheck />}
          colorScheme="green"
          size="sm"
          onClick={toggleCompleted}
        />

        <IconButton
          icon={<FaEdit />}
          colorScheme="yellow"
          size="sm"
          onClick={() => setIsEditing(true)}
        />

        <IconButton
          icon={<FaTrash />}
          colorScheme="red"
          size="sm"
          onClick={deleteTodo}
        />
      </HStack>
    </HStack>
  );
};

export default Todo;
