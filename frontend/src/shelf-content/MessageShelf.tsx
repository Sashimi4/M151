import { Box, Paper, useColorScheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SenderMessageItem from '../components/SenderMessageItem'
import ReceiverMessageItem from '../components/ReceiverMessageItem'
import TextField from '../components/TextField'
import ColorScheme from '../assets/ColorScheme'


const MessageShelf = () => {

  const [messages, setMessages] = useState(["First message"])

  const addMessageComponent = (message: string) => {
    setMessages([...messages, message])
  }

  useEffect(() => {
    console.log("messages updated")
  }, [messages])

    return (
      <>
        <Box sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, paddingRight: "35px", paddingLeft: "25px", 
        alignItems: "center", position: "absolute", bottom: 0, height: "100%", width: "46%"}}>
          {/* TODO: Remove Grid and just implement a Stack with Row, then have them listed after each other*/}
              {/* TODO: Loop here the users recipient messages*/}
              <ReceiverMessageItem message={"Yolo"}/>

              {messages.map((item, i) => (
                <Box sx={{paddingTop: "0.5em", paddingBottom: "0.5em", marginBottom: "1.5em"}}>
                  <SenderMessageItem message={item}/>
                </Box>
              ))}

              <ReceiverMessageItem message={"That's crazy 😁"}/>

          <TextField addMessageComponent={addMessageComponent}/>
        </Box>
      </>
    );
  }

  export default MessageShelf;