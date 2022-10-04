import React, { useState } from 'react'
import { Button, Input, Stack } from '@mui/material'
import Box from '@mui/material/Box'

const TextField = () => {

    const [message, setMessage] = useState("Burger")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    return (
        <Stack direction="row" spacing={2}>
            <p>Sent message: {message}</p>
            <Box
            component="form"
            noValidate
            autoComplete="off">
                <Input
                inputProps={{'aria-label': 'description'}}
                autoFocus
                value={message}
                onChange={handleChange}
                />

                <Button onClick={() => {
                    console.log("Message sent")
                    setMessage("")
                    }} variant="contained"> Send `{'>'}` </Button>
            </Box>
        </Stack>
    )
}

export default TextField
