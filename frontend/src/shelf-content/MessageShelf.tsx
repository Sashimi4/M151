import { Paper } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SenderMessageItem from '../components/SenderMessageItem'
import ReceiverMessageItem from '../components/ReceiverMessageItem'
import TextField from '../components/TextField'
import Grid2 from '@mui/material/Unstable_Grid2'

const MessageShelf = () => {

  const [messages, setMessages] = useState(["First message"])

  const addMessageComponent = (message: string) => {
    setMessages([...messages, message])
  }

  useEffect(() => {
    console.log("messages updated")
  }, [messages])

    return (
      <Paper elevation={0} sx={{width: '100%'}}>
        {/* TODO: Remove Grid and just implement a Stack with Row, then have them listed after each other*/}
        <Grid2 container>
          <Grid2 xs={5}>
            {/* TODO: Loop here the users recipient messages*/}
            <ReceiverMessageItem message={"Yolo"}/>
          </Grid2>
          <Grid2 xs={2}>
          </Grid2>
          <Grid2 xs={5}>
            {/* TODO: For testing sake ALL messages will be shown here, even receiver messages.*/}
            {messages.map((item, i) => ( <SenderMessageItem message={item}/>))}

          </Grid2>
        </Grid2>

        <TextField addMessageComponent={addMessageComponent}/>
      </Paper>
    );
  }

  export default MessageShelf;