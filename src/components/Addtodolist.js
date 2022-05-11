import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

function Addtodolist({ addTodo }) {
  const [content, setContent] = useState("");
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      toast({
        title: "Empty !!!",
        description: "To Dos cannot be empty",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const todo = {
      id: nanoid(),
      body: content,
    };

    addTodo(todo);
    setContent("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="4" mb="8">
        <Input
          variant="filled"
          focusBorderColor="pink.500"
          placeholder="Task To Do ...."
          fontWeight="bold"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add ToDo
        </Button>
      </HStack>
    </form>
  );
}

export default Addtodolist;
