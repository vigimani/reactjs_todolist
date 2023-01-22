import { ListItem, Flex, Text, Button } from "@chakra-ui/react";

export default function Todo({ todos, setTodos, todo }) {

    const tasksdone = (id) => {
        let myTodos = [...todos]
        let index = myTodos.findIndex(t => t.id === id)
        myTodos[index].isDone = true;
        setTodos(myTodos)
    }

    const deleteTodo = (id) => {
        let myTodos = [...todos]
        let updatedTodos = myTodos.filter(t => t.id !== id)
        setTodos(updatedTodos)
    }

  return (
    <ListItem mt="1rem">
        {todo.isDone ? (
                <strike>{todo.name}</strike>
            ) : (
                <>{todo.name}</>
            )}
        <Button ml="1rem" mr="1rem" onClick={() => tasksdone(todo.id)}>Done</Button>
        <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
    </ListItem>
  );
}
