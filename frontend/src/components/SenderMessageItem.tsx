import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const SenderMessageItem = (props: any) => {
    


    return (
        //If still time add a way to calculate the length of the message
        <>
            <Card variant="outlined" 
            sx={{backgroundColor: 'red', marginBottom: '0.5em', borderRadius: '15px',}}>
                <CardContent>
                    <Typography sx={{textAlign: 'right'}}>{props.message}</Typography>
                </CardContent>
            </Card>
            <Typography>Seen 22:12</Typography>
        </>
    )
}

export default SenderMessageItem
