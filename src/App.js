import { HStack, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import TopButtons from './components/TopButtons'
import Home from './pages/Home'
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {

    return (
        <HashRouter>
            <VStack
                divider={<StackDivider />}
                w='100%'
                p='4'
                alignItems='stretch' >
                <HStack>
                    <Text fontSize='4xl' fontFamily="'Suez One', serif">סטארק</Text>
                    <Spacer />
                    <TopButtons />
                </HStack>
            </VStack>
            <VStack p='2'>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </VStack>
        </HashRouter>
    )
}

export default App