import React from 'react'
import styled, { css } from 'styled-components'

const MessageBlock = (props: any) => {

    const lastMessage = "Yoo That's super cool, I would be in town next week so we could potentially meet up."

    const openChat = () => {
        console.log("Chat opened")
    }

    //Needs more dynamic sizes instead of fixed ones => or just not have it responsive
    const truncateText = (text: string) => {
        return text.length > 30 ? text.substring(0, 25) + "..." : text;
    }

    return (
        <Wrapper onClick={openChat}>
            <ChatTitle>Janet, 38</ChatTitle>
            <br/>
            <LastMessage>{truncateText(lastMessage)}</LastMessage>
        </Wrapper>
    )
}

    const Wrapper = styled.div`
        background: transparent;
        border: 1px solid grey;
        background-color: black;
        padding: 1em;
        color: white;
    `

    const ChatTitle = styled.h3`
        //background-color: blue;
        margin-top: 0em;
        margin-bottom: 2px;
    `

    const LastMessage = styled.span`
        //background-color: blue;
        padding: 0em;
        overflow: hidden;
        text-overflow: ellipsis;
    `

export default MessageBlock
