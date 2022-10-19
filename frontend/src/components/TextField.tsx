import React, { useState } from 'react'
import { Button, Card, CardMedia, Input, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab'
import { FiSend } from 'react-icons/fi'
import ColorScheme from '../assets/ColorScheme'

const TextField = (props: any) => {

    const [message, setMessage] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    //position: "fixed", bottom: 0,
    return (
        <>
            <Box
            sx={{flexDirection: "row", position: "absolute", bottom: "2%", 
            left: "5%", width: "90%", height: "8%"}}>
                <Box sx={{background: ColorScheme.WHITE, display: "flex", justifyContent: "space-between" ,alignItems: "center",
                width: "97.5%", marginRight: "1em", height: "90%", borderRadius: "25px", paddingLeft: "1em"}}>
                    <Input
                    inputProps={{'aria-label': 'description'}}
                    autoFocus
                    value={message}
                    onChange={handleChange}
                    sx={{width: "90%"}}
                    />
                    <Fab aria-label="send"
                    size="medium"
                    sx={{backgroundColor: ColorScheme.PURPLE, color: ColorScheme.WHITE, marginRight: "5px"}}
                    onClick={() => {
                        console.log("button pressed")
                        props.addMessageComponent(message)
                        setMessage("")
                    }}>
                        <FiSend/>
                    </Fab>
                </Box>
            </Box>
        </>
    )
}

export default TextField
