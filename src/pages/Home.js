import { Button, HStack, Input, Text, useToast, VStack } from '@chakra-ui/react'
import { FormControl } from '@material-ui/core'
import React, { useState } from 'react'

function Home() {

    const [word, setWord] = useState("")
    const toast = useToast()


    const changeIt = e => {
        setWord(e.target.value)
    }

    const sendIt = e => {
        toast({
            duration: 4000,
            description: "This will take a while",
            status: "info",
            title: "Loading image",
            isClosable: true
        })
        window.location = `https://europe-word-image-server.glutenmorgen.repl.co/${word}` 
    }

    return (
        <FormControl>
            <VStack
                p='4'
                alignItems='center'
                justifyContent='center'
                direction='column'
                maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '30vw' }}
            >
                <Text>
                    Please Input a word and we will generate a map of europe that shows
                    the translation of your word in each country on the europe map
                </Text>
                <HStack w="100%" >
                    <Input colorScheme="gray" variant="filled" placeholder="Word Here" onChange={changeIt} />
                    <Button colorScheme="pink" onClick={sendIt}>Submit</Button>
                </HStack>
            </VStack>
        </FormControl>
    )
}

export default Home
