import { Client, over } from 'stompjs';
import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import SockJS from 'sockjs-client';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import Grid2 from '@mui/material/Unstable_Grid2';

import MessageList from '../components/MessageList';
import SearchShelf from '../shelf-content/SearchShelf';
import ProfileShelf from '../shelf-content/ProfileShelf';
import MessageShelf from '../shelf-content/MessageShelf';
import { Box, createTheme, Paper, ThemeProvider } from '@mui/material';
import Navbar from '../components/Navbar';
import AppState from '../assets/AppStates';

//source : https://github.com/JayaramachandranAugustin/ChatApplication/blob/main/react-client/src/components/ChatRoom.js

const Home = () => {

  const [ activeShelf, setActiveShelf ] = useState(AppState.HOME)

  const [userData, setUserData] = useState(null)

  const { getAccessTokenWithPopup } = useAuth0();

  const [accessToken, setAccessToken] = useState("")

  useEffect(() => {
    console.log(`final state: ${activeShelf}`)
  }, [activeShelf])

  const fetchUserProfile = async () => {
    //getAccessTokenSilently won't work for localhost
    const token = await getAccessTokenWithPopup({
      domain: "dev-opmozjaa.us.auth0.com",
      client_id: "c2myyEju3WbyPYQLqrzTb5wdqoxBbqsF",
      audience: "https://tinder.space.com",
    })

    //debugging purposes
    console.log(token)

    setAccessToken(token)
  }

  useEffect(() => {
    fetchUserProfile()
  }, [])

  // TODO() = Replace static text with strings from "AppStaticStrings"

    return (
      /* Interchangeable shelf content */
      <Box sx={{width: '100%', overflowY: 'hidden'}}>
          <Grid2 container>
            <Grid2 xs={2}>
              <Navbar setActiveShelf={setActiveShelf}/>
            </Grid2>
            <Grid2 xs={4}>
              <MessageList setActiveShelf={setActiveShelf}/>
            </Grid2>
            <Grid2 xs={6}>
              {/* swap content out here */}
              {/*
              (() => {
                switch(activeShelf) {
                  case AppState.HOME: 
                    return <SearchShelf/>
                  case AppState.CHAT:
                    return <MessageShelf/>
                  case AppState.PROFILE:
                    return <ProfileShelf/>
                  default:
                    return null
                }  <button onClick={fetchUserProfile}>Fetch Token</button>
              })()*/}
              <MessageShelf accessToken={accessToken}/>
            </Grid2>
          </Grid2>
      </Box>
    );
  }

  export default withAuthenticationRequired(Home, {
    // Update message with loading icon
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
  });