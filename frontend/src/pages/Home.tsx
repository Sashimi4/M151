import { Client, over } from 'stompjs';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SockJS from 'sockjs-client';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Grid2 from '@mui/material/Unstable_Grid2';

import MessageList from '../components/MessageList';
import SearchShelf from '../shelf-content/SearchShelf';
import ProfileShelf from '../shelf-content/ProfileShelf';
import MessageShelf from '../shelf-content/MessageShelf';
import { Box, createTheme, Paper, ThemeProvider } from '@mui/material';
import Navbar from '../components/Navbar';
import AppState from '../assets/AppStates';

var stompClient: Client | null = null
//source : https://github.com/JayaramachandranAugustin/ChatApplication/blob/main/react-client/src/components/ChatRoom.js

const Home = () => {

  const [activeShelfState, setActiveShelfState] = useState(AppState.HOME)

  const [message, setMessage] = useState("empty")

  // use effect must be moved to single shelf + additionally in the message list if a message got updated
  useEffect(() => {
    console.log(message)
  }, [message])


  /*useEffect(() => {
    console.log(`final state: ${activeShelfState}`)
  }, [activeShelfState])
  */
  const connect = () => {
    var socket = new SockJS("http://localhost:8080/ws-message")
    stompClient = over(socket)
    stompClient.connect({}, onConnected, onError)
  }

  const onConnected = () => {
    stompClient?.subscribe('/communication', onMessageReceived);
    stompClient?.subscribe('/user/queue/private-messages', onMessageReceived);
  }

  const onMessageReceived = (payload: { body: string; })=>{
    var payloadData = JSON.parse(payload.body);
    console.log(payload)
    setMessage(payload.body)
  }

  const onError = (err: any) => {
    console.log(err);
  }

  const sendValue = () => {
    if (stompClient) {
      var chatMessage = {
        message: "sascha",
      };
      console.log(chatMessage);
      stompClient.send("/private-messages", {}, JSON.stringify(chatMessage));
    }
  }

  const updateAppState = (state: AppState) => {
    console.log(`state in home page: ${state}`)
    setActiveShelfState(state)
  }

  // TODO() = Replace static text with strings from "AppStaticStrings"

    return (
      /* Interchangeable shelf content */
      <Box sx={{width: '100%', overflowY: 'hidden'}}>
          <Grid2 container>
            <Grid2 xs={2}>
              <Navbar updateAppState={updateAppState}/>
            </Grid2>
            <Grid2 xs={4}>
              <MessageList updateAppState={updateAppState}/>
            </Grid2>
            <Grid2 xs={6}>
              {/* swap content out here */}
              {/*
              (() => {
                switch(activeShelfState) {
                  case AppState.HOME: 
                    return <SearchShelf/>
                  case AppState.CHAT:
                    return <MessageShelf/>
                  case AppState.PROFILE:
                    return <ProfileShelf/>
                  default:
                    return null
                }
              })()*/}
              <MessageShelf/>
            </Grid2>
          </Grid2>
      </Box>
    );
  }

  /* Web socket logic:
  
        <h1>Home</h1>
        <p>Still working</p>
        <p>New message: {message}</p>
        <button onClick={connect}>Connect to Server</button>
        <button onClick={sendValue}>Send Message</button>
        <hr></hr>
        <hr></hr>
  */

  export default withAuthenticationRequired(Home, {
    // Update message with loading icon
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
  });