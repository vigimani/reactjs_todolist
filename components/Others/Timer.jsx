import {Flex, Text, Button} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Timer() {

    const [timer, setTimer]=useState(0)
    const [connectTime, setConnecttime]=useState(0)


    useEffect(()=>{
        const interval = setInterval(() => {
            setConnecttime(connectTime => connectTime+1)
          }, 1000);
          return () => clearInterval(interval);
    }, [])


    return (
        <Text>{connectTime} seconds have passed since mounting the page</Text>
    )
}