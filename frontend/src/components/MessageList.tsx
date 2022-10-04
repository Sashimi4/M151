import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import MessageBlock from './MessageBlock'

//Probably need a chat websocket
const MessageList = () => {

    const [chats, setChats] = useState(["Sarah","Jimmy"])

    return (
        <Container>
            <p>Messages</p>
            <MessageBlock/>
            <MessageBlock/>
            <MessageBlock/>
        </Container>
    )
}

const Container = styled.div`
    flex: 2;
    background-color: red;
    padding-top: 1em;
    padding-bottom: 1em;
 `

export default MessageList
