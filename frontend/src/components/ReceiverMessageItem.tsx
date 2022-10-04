import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const ReceiverMessageItem = (props: any) => {
    
    return (
        //If still time add a way to calculate the length of the message
        <>
            <Card variant="outlined" 
            sx={{backgroundColor: 'black', marginBottom: '0.5em', borderRadius: '15px',}}>
                <CardContent>
                    <Typography sx={{textAlign: 'left', color: 'white'}}>{props.message}</Typography>
                </CardContent>
            </Card>
            <Typography>22:12</Typography>
        </>
    )
}

export default ReceiverMessageItem
