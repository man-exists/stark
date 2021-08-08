import React from 'react'

import { FaHome, FaMoon, FaSun } from 'react-icons/fa'
import { HStack, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <HStack alignSelf='flex-end'>
            <TopIcon
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                title="Toggle Color Mode"
                onClick={toggleColorMode} />
            <Link to="/">
                <TopIcon
                    icon={<FaHome />}
                    title="Home Page" />
            </Link>
        </HStack>
    )
}

export default TopButtons
