import { Avatar, Box, Typography } from '@mui/material'
import React from 'react'
import ColorScheme from '../assets/ColorScheme'

function ChatHeader() {
    return (
        <Box sx={{backgroundColor: ColorScheme.BLACK, zIndex: 999, position: "relative", width: "auto", marginBottom: "2em"}}>
            <Box sx={{display: "flex", alignItems: "center", paddingBottom: "0.5em"}}>
                    <Avatar src={"https://i.imgur.com/oPj4A8u.jpeg"} alt="Avatar"/>
                    <Typography sx={{color: ColorScheme.WHITE, marginLeft: "0.5em", fontSize: "20px"}}>Janet, 38</Typography>
            </Box>
        </Box>
    )
}

export default ChatHeader
