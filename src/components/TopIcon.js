import { IconButton, Tooltip } from '@chakra-ui/react'
import React from 'react'

function TopIcon(props) {
    return (
        <Tooltip label={props.title}>
            <IconButton
            icon={ props.icon }
            isRound
            alignSelf='flex-end'
            size='lg'
            onClick={ props.onClick } />
        </Tooltip>
    )
}

export default TopIcon
