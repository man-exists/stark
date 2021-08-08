import { VStack } from '@chakra-ui/react'
import React from 'react'
import TopButtons from './components/TopButtons'
import Home from './pages/Home'
import { HashRouter, Switch, Route } from 'react-router-dom'

function App() {

    return (
        <HashRouter>
            <VStack p={4}>
                <TopButtons />
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