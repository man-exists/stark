import React from 'react'

import { FaHome, FaMoon, FaSun, FaUser } from 'react-icons/fa'
import { HStack, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import TopIcon from './TopIcon'

function TopButtons() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <React.Fragment>
                <TopIcon
                    icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                    title="שינוי מצב תאורה"
                    onClick={toggleColorMode} />
                <Link to="/">
                    <TopIcon
                        icon={<FaHome />}
                        title="דף בית" />
                </Link>
        </React.Fragment>

    )
}

export default TopButtons
