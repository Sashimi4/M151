import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const MessageItem = (props: any) => {
    return (
        <Card variant="outlined" sx={{}}>
            <CardContent sx={{backgroundColor: 'red'}}>
                <Typography>Yeah I just arrived yesterday in New York</Typography>
            </CardContent>
        </Card>
    )
}

export default MessageItem
