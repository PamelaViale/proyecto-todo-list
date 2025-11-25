import { useState } from "react";
import { VStack, Select, Text } from "@chakra-ui/react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos }) => {
  const [filter, setFilter] = useState("all");

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "pending") return !todo.completed;
    return true;
  });

  return (
    <VStack mt={6} spacing={4}>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        maxW="200px"
        mb={4}
      >
        <option value="all">Todas</option>
        <option value="completed">Completadas</option>
        <option value="pending">Pendientes</option>
      </Select>

      {filteredTodos.length === 0 && (
        <Text opacity={0.6}>No hay tareas para mostrar.</Text>
      )}

      {filteredTodos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </VStack>
  );
};

export default TodoList;