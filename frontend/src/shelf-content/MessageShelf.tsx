import { Box, Paper, useColorScheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Client, over } from 'stompjs';
import SockJS from 'sockjs-client';
import SenderMessageItem from '../components/SenderMessageItem'
import ReceiverMessageItem from '../components/ReceiverMessageItem'
import TextField from '../components/TextField'
import ColorScheme from '../assets/ColorScheme'
import ChatHeader from '../components/ChatHeader';

//AppState = CHAT
const MessageShelf = (props: any) => {

  const [accessToken, setAccessToken] = useState("")

  const [messages, setMessages] = useState(["First message"])

  const addMessageComponent = (message: string) => {
    setMessages([...messages, message])
  }

  // websocket connection start
  
  const [newMessage, setNewMessage] = useState("")

  var stompClient: Client | null = null

  const onConnected = () => {
    stompClient?.subscribe("/user/queue/direct-message" + "-user", onMessageReceived);
  }

  const sendMessage = (newMessage: string) => {
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

        stompClient.send("/chat", {}, JSON.stringify(message));
      }
    }
  }

  const onMessageReceived = (payload: any) => {
    var message = JSON.parse(payload.body)

    addMessageComponent(payload.body)
  }

  const onError = (err: any) => {
    console.log(err);
  }

  useEffect(() => {
    const options = {
      headers: {
        "Authorization" : "Bearer " + "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImNBbldHOUM1T2J4OFZoczFKTklnYSJ9.eyJodHRwczovL3RpbmRlci5zcGFjZS5jb20vcm9sZXMiOlsiVVNFUiJdLCJpc3MiOiJodHRwczovL2Rldi1vcG1vemphYS51cy5hdXRoMC5jb20vIiwic3ViIjoiYXV0aDB8YjE5MjYyMGYtODI0ZS00NzZhLWI0MzgtNTc2OWExMjhjMzFiIiwiYXVkIjpbImh0dHBzOi8vdGluZGVyLnNwYWNlLmNvbSIsImh0dHBzOi8vZGV2LW9wbW96amFhLnVzLmF1dGgwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NjcyNTE5MTMsImV4cCI6MTY2NzMzODMxMywiYXpwIjoiYzJteXlFanUzV2J5UFlRTHFyelRiNXdkcW94QmJxc0YiLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIiwicGVybWlzc2lvbnMiOlsiY3JlYXRlOm1lc3NhZ2VzIl19.DfSxvdaS3ENbxJGC-Te_i3wRGo69zjLZ8pMiJ2WzXU6EQtb8yKNBX-AwGCFinigUy1Y6vBeA91zzUcTzAeB7ECYGfd2M8RI74xOf0_HaAn6SVxBZcaVx2m_87AQ7dcsum9rEObYYJ7ugJnsVGeCp7e1Vp81M4Cr5YMalrYv0yiJycSxNKX6hyR5NyFGBbNyMP7FJxaNO2dAxGduuIWGLvoOS3-L6PqER_mYcnHFd6CRvwyEHD87Eh3whaXPdzrkouO0Mfq6Klca91lYGFNqiYNWSdz9mr0YOJND2iEU8_GrkN5RlUQERohNFH-56DauqwxUCCTurP11ATA3SkxpxCg"
      }
    }
    const sockJS = new SockJS("http://localhost:8080/chatroom", options)
    stompClient = over(sockJS)
    stompClient.connect({}, onConnected, onError)
  }, [])

  useEffect(() => {
  }, [messages])

    return (
      <>
        <Box sx={{backgroundColor: ColorScheme.BACKGROUND_BLACK, paddingRight: "35px", paddingLeft: "25px", 
        alignItems: "center", position: "absolute", bottom: 0, height: "100%", width: "46%"}}>

          <ChatHeader/>
          
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

function getAccessTokenWithPopup(arg0: { domain: string; client_id: string; audience: string; }) {
  throw new Error('Function not implemented.');
}
