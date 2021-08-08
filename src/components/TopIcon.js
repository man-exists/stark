import React from 'react'

import { IconButton, Tooltip } from '@chakra-ui/react'

function TopIcon(props) {
    return (
        <Tooltip label={props.title}>
            <IconButton
            icon={ props.icon }
            isRound
            size='lg'
            onClick={ props.onClick } />
        </Tooltip>
    )
}

export default TopIcon
