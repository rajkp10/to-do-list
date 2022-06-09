import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

function Todolist({ todos, deleteTodo }) {
  if (todos.length === 0) {
    return (
      <Badge colorScheme="pink" p="4" m="4" borderRadius="lg">
        No To-Dos Left !!!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="grey.100"
      borderWidth="2px"
      p="4"
      borderRadius="md"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack
          key={todo.id}
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Text fontWeight="bold">{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default Todolist;
