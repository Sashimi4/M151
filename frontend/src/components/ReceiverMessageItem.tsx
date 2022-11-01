import { Box, Typography } from '@mui/material'
import React from 'react'
import ColorScheme from '../assets/ColorScheme'

const ReceiverMessageItem = (props: any) => {
    
    return (
        //If still time add a way to calculate the length of the message
        <>
            <Box
            sx={{marginBottom: "0.5em", borderRadius: "15px", padding: "15px", 
            marginLeft: "auto", marginRight: "0px !important", float: "left", 
            backgroundColor: ColorScheme.BLACK, }}>
                <Typography sx={{color: ColorScheme.WHITE}}>{props.message}</Typography>
            </Box>
            <Typography>Seen 22:12</Typography>
        </>
    )
}

export default ReceiverMessageItem
