import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import ColorScheme from '../assets/ColorScheme'

const SenderMessageItem = (props: any) => {
    
    return (
        <>
            <Box
            sx={{marginBottom: "0.5em", borderRadius: "15px", padding: "15px", 
            marginLeft: "auto", marginRight: "0px !important", float: "right", 
            backgroundColor: ColorScheme.PURPLE, }}>
                <Typography sx={{color: ColorScheme.WHITE}}>{props.message}</Typography>
            </Box>
            <Typography>Seen 22:12</Typography>
        </>
    )
}

export default SenderMessageItem
