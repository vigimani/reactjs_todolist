import {Flex, Text, Button} from '@chakra-ui/react'
import Incrementdecrement from '../Main/Incrementdecrement'
import Timer from '../Others/Timer'

export default function Header({number, setNumber}) {
    return (
        <Flex p="2rem" justifyContent="space-between">
        <Text>Logo</Text>
        <Timer/>
        <Incrementdecrement number={number} setNumber={setNumber}/>
        <Button colorScheme="purple">Connect</Button>
        </Flex>
    )
}