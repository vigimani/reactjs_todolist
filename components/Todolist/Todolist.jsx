import {
  Flex,
  List,
} from "@chakra-ui/react";
import Todo from "./Todo";

export default function Todolist({ todos, setTodos }) {
  return (
      <Flex direction="column">
        <List>
          {todos.map((todo) => {
            return (
              <Todo
                todos={todos}
                setTodos={setTodos}
                key={todo.id}
                todo={todo}
              />
            );
          })}
        </List>
      </Flex>

  );
}
