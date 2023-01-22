import {Flex, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'

export default function AddTodo({todos, setTodos}) {

    const[task, setTask] = useState('')

    const addTodo = () => {
      setTodos(current => [...current, {
          "id": crypto.randomUUID(),
          "name": task,
          "isDone": false}])
    }

    return (
      <Flex>
        <Input placeholder="To do to add" onChange={(e) => setTask(e.target.value)}/>
        <Button onClick={() => addTodo()}>Add</Button>
      </Flex>
    )
}