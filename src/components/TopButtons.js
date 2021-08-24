import React from 'react'

import { FaHome, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import { useColorMode, useDisclosure } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <>
            <TopIcon
                icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                title="Change Light"
                onClick={toggleColorMode} />
            <Link to="/">
                <TopIcon
                    icon={<FaHome />}
                    title="HomePage" />
            </Link>
        </>
    )
}

export default TopButtons
