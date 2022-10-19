import { Avatar, Box, Card, Divider } from '@mui/material'
import React from 'react'

import Typography from '@mui/material/Typography'

const MessageBlock = (props: any) => {

    const lastMessage = "Yoo That's super cool, I would be in town next week so we could potentially meet up."

    const openChat = () => {
        console.log("Chat opened")
    }

    //Needs more dynamic sizes instead of fixed ones => or just not have it responsive
    const truncateText = (text: string) => {
        return text.length > 30 ? text.substring(0, 45) + "..." : text;
    }

    return (
        <>
            <Box onClick={openChat}
            sx={{
            backgroundColor: 'black',
            padding: "0.5em",
            cursor: "pointer",
            flex: 1,
            }}>
                <Box sx={{display: "flex", alignItems: "center"}}>
                    <Avatar src={"https://i.imgur.com/oPj4A8u.jpeg"} alt="Avatar"/>
                    <Typography sx={{color: "white"}}>Janet, 38</Typography>
                </Box>
                <Typography sx={{color: 'white'}}>{truncateText(lastMessage)}</Typography>
            </Box>
            <Divider/>
        </>
    )
}

/*
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
*/

export default MessageBlock
