import { Avatar, Box, Card, Divider } from '@mui/material'
import React from 'react'

import Typography from '@mui/material/Typography'
import TyporgaphyScheme from '../assets/TyporgaphyScheme'
import ColorScheme from '../assets/ColorScheme'

const MessageBlock = (props: any) => {

    const lastMessage = props.lastMessage

    const truncateText = (text: string) => {
        return text.length > TyporgaphyScheme.MAX_LAST_MESSAGE_LENGTH ? text.substring(0, TyporgaphyScheme.TRUNCATED_MESSAGE_LENGTH) + "..." : text;
    }

    return (
        <>
            <Box onClick={props.openChat}
            sx={{
            backgroundColor: 'black',
            padding: "0.5em",
            cursor: "pointer",
            flex: 1,
            }}>
                <Box sx={{display: "flex", alignItems: "center", paddingBottom: "0.5em"}}>
                    <Avatar src={"https://i.imgur.com/oPj4A8u.jpeg"} alt="Avatar"/>
                    <Typography sx={{color: ColorScheme.WHITE, marginLeft: "0.5em", fontSize: "20px"}}>Janet, 38</Typography>
                </Box>
                <Typography sx={{color: ColorScheme.WHITE, fontSize: "14px"}}>{truncateText(lastMessage)}</Typography>
            </Box>
            <Divider/>
        </>
    )
}

export default MessageBlock
