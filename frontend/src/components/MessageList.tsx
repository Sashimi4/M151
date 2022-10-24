import { Box, Paper, Stack } from '@mui/material'
import React, { useState } from 'react'
import AppState from '../assets/AppStates'
import ColorScheme from '../assets/ColorScheme'
import MessageBlock from './MessageBlock'

//Probably need a chat websocket
const MessageList = (props: any) => {

    const [appState, setAppState] = useState(AppState.CHAT)

    const navigateShelf = (state: AppState) => {
        props.updateAppState(state)
    }

    const openChat = () => {
        setAppState(AppState.CHAT)
        navigateShelf(appState)
    }

    return (
        <Box //onClick={navigateChat}
        sx={{backgroundColor: ColorScheme.PURPLE, position: "absolute", top: 0, width: "33%", height: "100%"}}>
            {/* search bar here cause why not */}
            <Stack direction="column">
                <MessageBlock openChat={openChat}/>
                <MessageBlock/>
                <MessageBlock/>
                <MessageBlock/>
                <MessageBlock/>
            </Stack>
        </Box>
    )
}

export default MessageList
