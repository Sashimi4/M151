import React, { useState } from 'react'
import { Button, Input, Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Grid2 from '@mui/material/Unstable_Grid2'

const TextField = (props: any) => {

    const [message, setMessage] = useState("")

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value)
    }

    return (
        <Stack direction="row" spacing={2} sx={{backgroundColor: 'salmon'}}>
            <Box
            sx={{backgorundColor: 'black'}}
            component="form"
            noValidate
            autoComplete="off">
                <Grid2 container sx={{backgorundColor: 'black'}}>
                    <Grid2 xs={10} sx={{background: 'green'}}>
                        <Input
                        inputProps={{'aria-label': 'description'}}
                        autoFocus
                        value={message}
                        onChange={handleChange}
                        sx={{background: 'orange', width: '100%'}}
                        />
                    </Grid2>
                    <Grid2 xs={2} sx={{background: 'blue', paddingRight: '2em'}}>
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
                    </Grid2>
                </Grid2>
            </Box>
        </Stack>
    )
}

export default TextField
