import { Box, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import MessageBlock from './MessageBlock'

//Probably need a chat websocket
const MessageList = () => {

    const [chats, setChats] = useState(["Sarah","Jimmy"])

    return (
        <Box sx={{position: "absolute", top: 0, width: "30%"}}>
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
