import { Paper } from '@mui/material'
import React, { useState } from 'react'
import MessageBlock from './MessageBlock'

//Probably need a chat websocket
const MessageList = () => {

    const [chats, setChats] = useState(["Sarah","Jimmy"])

    return (
        <Paper elevation={0}>
            <p>Messages</p>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
        </Paper>
    )
}

export default MessageList
