import { Heading } from '@chakra-ui/react'
import React from 'react'

function StyledHeader(props) {
    return (
        <Heading
            pb='4'
            fontWeight='extrabold'
            size='2xl'
            bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
            bgClip='text' >
            { props.children }
        </Heading>
    )
}

export default StyledHeader
