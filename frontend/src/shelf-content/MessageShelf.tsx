import { Box, Paper, useColorScheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Client, over } from 'stompjs';
import SockJS from 'sockjs-client';
import SenderMessageItem from '../components/SenderMessageItem'
import ReceiverMessageItem from '../components/ReceiverMessageItem'
import TextField from '../components/TextField'
import ColorScheme from '../assets/ColorScheme'

//AppState = CHAT
const MessageShelf = () => {

  const [messages, setMessages] = useState(["First message"])

  const addMessageComponent = (message: string) => {
    setMessages([...messages, message])
  }

  // websocket connection start

  const [newMessage, setNewMessage] = useState("")

  var stompClient: Client | null = null

  const onConnected = () => {
    console.log("websocket connected")

    stompClient?.subscribe('/user/' + '3c5ecfe5-5995-400a-bd19-f746c06b21e0' + '/queue/messages', onMessageReceived);
  }

  const sendMessage = (newMessage: string) => {
    console.log(newMessage);
    if (stompClient) {
      if(newMessage.trim() !== "") {

        const message = {
          senderId: "3c5ecfe5-5995-400a-bd19-f746c06b21e0",//
          recipientId: "b192620f-824e-476a-b438-5769a128c31b",
          senderName: "Sarah",
          recipientName: "Janet",
          content: newMessage,
          timestamp: new Date(),
        }

        console.log(message);
        stompClient.send("/chat", {}, JSON.stringify(message));
      }
    }
  }

  const onMessageReceived = (payload: { body: string; })=>{
    var payloadData = JSON.parse(payload.body)
    console.log(payload)
    addMessageComponent(payload.body)
  }

  const onError = (err: any) => {
    console.log(err);
  }

  useEffect(() => {
    const sockJS = new SockJS("http://localhost:8080/ws-message")
    stompClient = over(sockJS)
    stompClient.connect({}, onConnected, onError)
  }, [])
  
  // websocket connection end

  useEffect(() => {
    console.log("messages updated")
  }, [messages])

    return (
      <>
        <Box sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, paddingRight: "35px", paddingLeft: "25px", 
        alignItems: "center", position: "absolute", bottom: 0, height: "100%", width: "46%"}}>
          {/* TODO: Remove Grid and just implement a Stack with Row, then have them listed after each other*/}
              {/* TODO: Loop here the users recipient messages*/}
              <ReceiverMessageItem message={"Yolo 😜"}/>

              {messages.map((item, i) => (
                <Box sx={{paddingTop: "0.5em", paddingBottom: "0.5em", marginBottom: "1.5em"}}>
                  <SenderMessageItem message={item}/>
                </Box>
              ))}

              <ReceiverMessageItem message={"That's crazy 😁"}/>

          <TextField addMessageComponent={addMessageComponent} sendMessage={sendMessage}/>
        </Box>
      </>
    );
  }

  export default MessageShelf;