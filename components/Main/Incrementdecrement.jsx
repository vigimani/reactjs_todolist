import {Box, Flex, Text, Button} from '@chakra-ui/react'

export default function Incrementdecrement({number, setNumber}) {
    const increment = () => {
      setNumber(number + 1);
    };
    const decrement = () => {
      setNumber(number - 1);
    };
    return (
      <Flex justifyContent="space-between" direction="line">
        <Button colorScheme="green" ml="2rem"  onClick={() => increment()}>+</Button>
        <Box mt="9px" ml="2rem" >{number}</Box>
        <Button colorScheme="red" ml="2rem"  onClick={() => decrement()}>-</Button>
      </Flex>
    )
}