import { Client, over } from 'stompjs';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SockJS from 'sockjs-client';
import { withAuthenticationRequired } from '@auth0/auth0-react';

import Grid2 from '@mui/material/Unstable_Grid2';

import ProfileCard from '../components/ProfileCard';
import MessageList from '../components/MessageList';
import SearchShelf from '../shelf-content/SearchShelf';
import ProfileShelf from '../shelf-content/ProfileShelf';
import MessageShelf from '../shelf-content/MessageShelf';

var stompClient: Client | null = null
//source : https://github.com/JayaramachandranAugustin/ChatApplication/blob/main/react-client/src/components/ChatRoom.js

const Home = () => {

  const [message, setMessage] = useState("empty")

  useEffect(() => {
    console.log(message)
  }, [message])

  const connect = () => {
    var socket = new SockJS("http://localhost:8080/ws-message")
    stompClient = over(socket)
    stompClient.connect({}, onConnected, onError)
  }

  const onConnected = () => {
    stompClient?.subscribe('/communication', onMessageReceived);
  }

  const onMessageReceived = (payload: { body: string; })=>{
    var payloadData = JSON.parse(payload.body);
    console.log(payload)
    setMessage(payload.body)
}

  const onError = (err: any) => {
    console.log(err);
  }
  
  const sendValue=()=>{
    if (stompClient) {
      var chatMessage = {
        message: "sascha",
      };
      console.log(chatMessage);
      stompClient.send("/message", {}, JSON.stringify(chatMessage));
    }
  }

    return (
      /* Interchangeable shelf content */
      <div>
        <Grid2 container>
          <Grid2 xs={2}>
            <ProfileShelf/>
          </Grid2>
          <Grid2 xs={4}>
            <MessageList/>
          </Grid2>
          <Grid2 xs={6}>
            <MessageShelf/>
          </Grid2>
        </Grid2>
      </div>
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