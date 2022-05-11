import "./App.css";
import Todolist from "./components/Todolist";
import Addtodolist from "./components/Addtodolist";
import { Heading } from "@chakra-ui/react";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";

function App() {
  const [todos, setTodos] = useState(
    () => JSON.parse(localStorage.getItem("todos")) || []
  );

  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  };

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <VStack p={8}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        pb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r,red.500,pink.300,blue.600)"
        bgClip="text"
      >
        To Do List
      </Heading>
      <Addtodolist addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} />
    </VStack>
  );
}

export default App;
