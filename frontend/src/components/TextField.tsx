import React, { useState } from 'react'
import { Button, Card, CardMedia, Input, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'

const TextField = (props: any) => {

    const [message, setMessage] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }
    //position: "fixed", bottom: 0,
    return (
        <>
            <Box
            sx={{backgorundColor: 'black', flexDirection: "row", position: "absolute", bottom: 0,}}>
                <Input
                inputProps={{'aria-label': 'description'}}
                autoFocus
                value={message}
                onChange={handleChange}
                sx={{background: 'orange', width: '100%'}}
                />
                
                <Button onClick={() => {
                console.log("button pressed")
                props.addMessageComponent(message)
                setMessage("")
                }}
                sx={{backgroundColor: 'violet'}}
                variant="contained"
                >
                    Send
                </Button>
            </Box>
        </>
    )
}

export default TextField
