import { Box, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import ColorScheme from '../assets/ColorScheme'
import MessageBlock from './MessageBlock'

//Probably need a chat websocket
const MessageList = () => {

    return (
        <Box sx={{backgroundColor: ColorScheme.PURPLE, position: "absolute", top: 0, width: "33%", height: "100%"}}>
            {/* search bar here cause why not */}
            <Stack direction="column">
                <MessageBlock/>
                <MessageBlock/>
                <MessageBlock/>
                <MessageBlock/>
                <MessageBlock/>
            </Stack>
        </Box>
    )
}

export default MessageList
